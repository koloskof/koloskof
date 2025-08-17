import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "src/blog");
  
  try {
    const files = await fs.readdir(blogDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        const slug = file.replace('.md', '');
        const title = data.title || slug.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
        const excerpt = content.slice(0, 200) + (content.length > 200 ? '...' : '');
        
        return {
          slug,
          title,
          content,
          excerpt
        };
      })
    );
    
    return posts.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <main className="space-y-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Главная
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold">
            Отраслевая аналитика
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Исследование потенциала потребительского рынка и поиск технологических решений 
            для улучшения качества жизни людей и повышения эффективности бизнеса.
          </p>
        </div>

        <div className="space-y-8">
          {posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="text-foreground hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        Читать далее →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Посты блога загружаются...
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Всего статей: {posts.length}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
