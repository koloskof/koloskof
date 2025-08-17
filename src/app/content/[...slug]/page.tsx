import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

async function getMarkdownContent(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), 'src', ...filePath.split('/'));
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    return {
      frontMatter: data,
      content: processedContent.toString(),
    };
  } catch {
    return null;
  }
}

interface DirectoryItem {
  name: string;
  type: 'directory' | 'file';
  path?: string;
  children?: DirectoryItem[];
}

async function getDirectoryStructure(dirPath: string): Promise<DirectoryItem[]> {
  try {
    const fullPath = path.join(process.cwd(), 'src', ...dirPath.split('/'));
    const entries = await fs.readdir(fullPath, { withFileTypes: true });
    
    const structure = [];
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subStructure = await getDirectoryStructure(path.join(dirPath, entry.name));
        if (subStructure.length > 0) {
          structure.push({
            name: entry.name,
            type: 'directory' as const,
            children: subStructure,
          });
        }
      } else if (entry.name.endsWith('.md')) {
        structure.push({
          name: entry.name,
          type: 'file' as const,
          path: path.join(dirPath, entry.name),
        });
      }
    }
    
    return structure;
  } catch {
    return [];
  }
}

function renderDirectoryStructure(structure: DirectoryItem[], currentPath: string[] = []) {
  return (
    <ul className="space-y-2 ml-4">
      {structure.map((item, index) => (
        <li key={index}>
          {item.type === 'directory' ? (
            <div>
              <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
              {item.children && renderDirectoryStructure(item.children, [...currentPath, item.name])}
            </div>
          ) : (
            <Link 
              href={`/content/${item.path?.replace(/\.md$/, '').replace(/\\/g, '/')}`}
              className="text-blue-600 hover:underline block"
            >
              {item.name.replace(/\.md$/, '')}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug || slug.length === 0) {
    const folders = ['2', '3', '4', '5', '6', '7'];
    const structures = await Promise.all(
      folders.map(async (folder) => {
        const folderName = await fs.readdir(path.join(process.cwd(), 'src'))
          .then(entries => entries.find(entry => entry.startsWith(folder + '.')));
        
        if (folderName) {
          const structure = await getDirectoryStructure(folderName);
          return { folderName, structure };
        }
        return null;
      })
    );
    
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Содержание</h1>
        <div className="space-y-8">
          {structures.filter(Boolean).map((folder, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{folder!.folderName}</h2>
              {renderDirectoryStructure(folder!.structure)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const filePath = slug.join('/') + '.md';
  const content = await getMarkdownContent(filePath);
  
  if (!content) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <Link href="/content" className="text-blue-600 hover:underline">
          ← Назад к содержанию
        </Link>
      </div>
      
      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  
  const folders = ['2', '3', '4', '5', '6', '7'];
  
  for (const folder of folders) {
    try {
      const folderName = await fs.readdir(path.join(process.cwd(), 'src'))
        .then(entries => entries.find(entry => entry.startsWith(folder + '.')));
      
      if (folderName) {
        await generateParamsForDirectory(folderName, params);
      }
    } catch (error) {
      console.error(`Error processing folder ${folder}:`, error);
    }
  }
  
  return params;
}

async function generateParamsForDirectory(dirPath: string, params: { slug: string[] }[], currentPath: string[] = []) {
  try {
    const fullPath = path.join(process.cwd(), 'src', dirPath);
    const entries = await fs.readdir(fullPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        await generateParamsForDirectory(
          path.join(dirPath, entry.name), 
          params, 
          [...currentPath, entry.name]
        );
      } else if (entry.name.endsWith('.md')) {
        const slug = [...dirPath.split(path.sep), ...currentPath, entry.name.replace(/\.md$/, '')];
        params.push({ slug });
      }
    }
  } catch (error) {
    console.error(`Error generating params for ${dirPath}:`, error);
  }
}