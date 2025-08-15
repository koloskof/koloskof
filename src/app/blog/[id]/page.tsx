
import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.filter(path => path !== null).map(path => ({
    id: path.params.id
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="mb-8">
        <Link 
          href="/blog" 
          className="text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          ← Назад к блогу
        </Link>
      </nav>
      
      <article className="space-y-8">
        <header className="space-y-4">
          <time className="text-sm text-muted-foreground">
            {new Date(postData.date).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {postData.title && (
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {postData.title}
            </h1>
          )}
        </header>
        
        <div className="border-t border-border pt-8 space-y-8">
          <div 
            className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-m-20 prose-headings:tracking-tight prose-h1:text-4xl prose-h1:font-extrabold prose-h2:text-3xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold prose-h4:text-xl prose-h4:font-semibold prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-6 prose-a:font-medium prose-a:text-primary prose-a:underline prose-a:underline-offset-4 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic prose-code:relative prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-pre:overflow-x-auto prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-li:mt-2 break-words overflow-wrap-anywhere"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
          {postData.tags && postData.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-4 border-t border-border">
              {postData.tags.map((tag, index) => (
                <Badge key={`${postData.id}-${tag}-${index}`} variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
