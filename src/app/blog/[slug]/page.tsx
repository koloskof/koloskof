import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string) {
  const blogDir = path.join(process.cwd(), "src/blog");
  const filePath = path.join(blogDir, `${slug}.md`);
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      title: data.title || slug.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
      content: contentHtml,
      date: data.date || null,
      author: data.author || null,
      tags: data.tags || []
    };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/blog");
  
  try {
    const files = await fs.readdir(blogDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    return mdFiles.map((file) => ({
      slug: file.replace('.md', ''),
    }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <main className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Главная
            </Link>
            <span className="text-muted-foreground">→</span>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Блог
            </Link>
            <span className="text-muted-foreground">→</span>
            <span className="text-muted-foreground">{post.title}</span>
          </div>
          
          <h1 className="text-3xl font-bold leading-tight">
            {post.title}
          </h1>
          
          {(post.date || post.author) && (
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              {post.date && <span>{post.date}</span>}
              {post.author && <span>Автор: {post.author}</span>}
            </div>
          )}
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="border-t border-border pt-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog"
              className="text-blue-600 hover:underline font-medium"
            >
              ← Вернуться к блогу
            </Link>
            
            <div className="text-sm text-muted-foreground">
              <Link href="https://t.me/bankfloorbelow" className="hover:underline">
                Обсудить в Telegram
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
