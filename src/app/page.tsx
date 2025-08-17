import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <main className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            КОЛОСКОВ.РФ: Платформизация экономики
          </h1>
          <p className="text-xl">
            <a href="https://t.me/bankfloorbelow" className="text-blue-600 hover:underline">https://t.me/bankfloorbelow</a>
          </p>
          
          <div>
            <Image
              src="/колосков.png"
              alt="КОЛОСКОВ"
              width={1200}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              <Link href="/blog" className="text-blue-600 hover:underline">
                Отраслевая аналитика
              </Link>
            </h2>
            <p className="text-lg leading-relaxed">
              Исследование потенциала потребительского рынка и поиск технологических решений для улучшения качества жизни людей и повышения эффективности бизнеса (что позволит сервисным компаниям находить новые точки роста и создавать инновационные цифровые продукты в области финансовых и клиентских сервисов).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              <Link href="/blog" className="text-blue-600 hover:underline">
                Спецификация по продуктовой разработке
              </Link>
            </h2>
            <p className="text-lg leading-relaxed">
              Документация по разработке и развитию цифровых продуктов, в фундамент которой входит набор спецификаций, инструкций и API для реализации масштабируемых сервисов. Данная академическая база покрывают ключевые продуктовые дисциплины, такие как аналитика, разработка, дизайн и финансы, что позволяет оперативно восполнить пробелы в необходимых областях.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              <Link href="/blog" className="text-blue-600 hover:underline">
                Модульная финансовая платформа
              </Link>
            </h2>
            <p className="text-lg leading-relaxed">
              Технологическая инициатива в рамках которой формируются функциональные модули с превосходным пользовательским опытом, которые помогают финансовым сервисам проектировать качественное цифровое взаимодействие со своими клиентами. Подборка послужит хорошей базой как для укрепления основного ядра платежных сценариев так и для проработки концепции новых продуктовых концепций.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              <Link href="/blog" className="text-blue-600 hover:underline">
                Концепции финансовых сервисов
              </Link>
            </h2>
            <p className="text-lg leading-relaxed">
              Открытая цифровая среда для развития ключевых направлений в области банковских клиентских сервисов, которая включает в себя набор авторских эссе и пополняемый список потенциальных проектов для развития финансового сектора, начиная от беглых черновиков, до проработанных высоко детализированных прототипов с набором ключевых метрик, моделей монетизации и экшн планов для их последовательной реализации.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              <Link href="/blog" className="text-blue-600 hover:underline">
                Friends
              </Link>
            </h2>
            <p className="text-lg leading-relaxed">
              Пополняющийся список экспертов и менеджеров в области финтеха и цифровых сервисов с фокусом на Дискавери функции: продукт и дизайн.
            </p>
          </section>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link 
              href="/content" 
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Перейти к контенту
            </Link>
          </div>
          
          <p className="text-lg">
            Сообщество для открытого индустриального диалога{" "}
            <a href="https://t.me/bankfloorbelowclub" className="text-blue-600 hover:underline">
              https://t.me/bankfloorbelowclub
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
