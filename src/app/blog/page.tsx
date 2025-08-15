
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default async function Blog() {
  const allPostsData = await getSortedPostsData();
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          КОЛОСКОВ™
        </h1>
        <p className="text-xl text-muted-foreground leading-7">
          Размышления о финтехе, банкинге и цифровых технологиях
        </p>
      </div>
      
      <div className="space-y-12">
        {allPostsData.filter(post => post !== null).map(({ id, date, title, content, tags }) => (
          <article key={id} className="border-b border-border pb-8 last:border-b-0">
            <div className="space-y-4">
              <time className="text-sm text-muted-foreground">
                {new Date(date).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {title && (
                <Link 
                  href={`/blog/${id}`} 
                  className="block group"
                >
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h2>
                </Link>
              )}
              <div className="prose prose-gray dark:prose-invert max-w-none prose-p:leading-7 prose-p:text-foreground prose-a:text-primary prose-a:underline prose-a:underline-offset-4">
                <div className="whitespace-pre-line text-foreground break-words overflow-wrap-anywhere">
                  {content}
                </div>
              </div>
              {tags && tags.length > 0 && (
                <div className="flex gap-2 flex-wrap pt-2">
                  {tags.map((tag, index) => (
                    <Badge key={`${id}-${tag}-${index}`} variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
