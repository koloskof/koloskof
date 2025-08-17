// Маппинг английских имен файлов на русские заголовки
export const blogTitles: Record<string, string> = {
  // Банковские и финтех темы
  'bank-for-next-gen': 'Банк для нового поколения',
  'banking-for-gen-z': 'Банкинг для поколения Z',
  'banking-core-modules': 'Основные модули банкинга',
  'banking-only-1-finished': 'Банкинг только на 1% завершен',
  'banking-the-underbanked': 'Банкинг для недобанкованных',
  'bank-for-kids-': 'Банк для детей 🧸',
  'core-bank-ai-bank': 'Основной банк → ИИ банк',
  'embedded-banking': 'Встроенный банкинг',
  'embedded-finance': 'Встроенные финансы',
  'neo-banking-yap-': 'Необанкинг (Yap)',
  'open-banking.-banking-as-a-service.-core-banking.-embedded-finance-': 'Открытый банкинг. Banking-as-a-Service. Основной банкинг. Встроенные финансы',
  'post-banking': 'Пост-банкинг',
  'real-time-banking': 'Банкинг в реальном времени',
  'real-time-banking-2022-2025': 'Банкинг в реальном времени 2022-2025',
  'shariah-compliant-digital-bank-': 'Цифровой банк, соответствующий шариату 🇰🇿',
  
  // Платежи и финансовые сервисы
  'cross-border-money-transfer': 'Трансграничные денежные переводы',
  'digital-wallet': 'Цифровой кошелек',
  'interchange-fee-': 'Интерчейндж комиссия 🇰🇿',
  'lyft-payments': 'Платежи Lyft',
  'n26-installment-': 'Рассрочка N26 🇩🇪',
  'payments-and-loyalty': 'Платежи и лояльность',
  'payments-people': 'Платежные люди',
  'paypal-first-look-2024': 'PayPal первый взгляд 2024',
  'prepaid-platform': 'Предоплаченная платформа',
  'qr-tips': 'QR чаевые',
  'social-payments': 'Социальные платежи',
  'stripe-payment-element': 'Stripe Payment Element',
  'stripe-session-2024': 'Stripe Session 2024',
  'tap-to-phone': 'Коснуться телефона',
  'virtual-credit-card-numbers': 'Виртуальные номера кредитных карт',
  
  // BNPL и кредитование
  'bnpl-business-models': 'Бизнес-модели BNPL',
  'revenue-based-financing': 'Финансирование на основе выручки',
  'the-role-of-buy-now-pay-later-in-embedded-finance-with-hosam-arab': 'Роль "Купи сейчас, заплати потом" во встроенных финансах с Хосамом Арабом',
  
  // Компании и продукты
  'calendly-3-billion-scheduling-': 'Calendly ($3 миллиарда планирования)',
  'freedom-holding-corporation': 'Freedom Holding Corporation',
  'freedom-arbuz-': 'Freedom ← Arbuz 🇰🇿',
  'freedom-mobile': 'Freedom mobile',
  'goldman-sachs-gen-z-research': 'Исследование Goldman Sachs поколения Z',
  'j.p.-morgan': 'J.P. Morgan',
  'meta-vs-shopify': 'Meta против Shopify',
  'mollie-rises-665m-euro': 'Mollie привлекает 665 млн евро',
  'nucoin-by-nubank': 'Nucoin от Nubank',
  'otp-bank': 'OTP Bank',
  'revolut-10': 'Revolut 10',
  'shopify-update': 'Обновление Shopify',
  'shopify-vc': 'Shopify VC',
  'the-new-nubank': 'Новый Nubank',
  'this-is-bud': 'Это Bud',
  'wildberries-wallet': 'Кошелек Wildberries',
  
  // Технологии и инфраструктура
  'digital-assistant-for-every-day-life': 'Цифровой помощник для повседневной жизни',
  'digital-euro': 'Цифровое евро',
  'fintech-workspace': 'Финтех рабочее пространство',
  'highly-customizable-design-infrostructure-for-buildling-modern-financial-experience': 'Высоко настраиваемая дизайн-инфраструктура для создания современного финансового опыта',
  'pos-software': 'ПОС программное обеспечение',
  'retail-software': 'Розничное программное обеспечение',
  'web1-web2-web3': 'Web1, Web2, Web3',
  
  // Исследования и аналитика
  'creative-economy': 'Креативная экономика',
  'creative-juice': 'Креативный сок',
  'creator-report': 'Отчет о создателях',
  'crowd-shopping': 'Групповые покупки',
  'learn-earn': 'Учись и зарабатывай',
  'next-2030-fintech': 'СЛЕДУЮЩИЙ 2030 ФИНТЕХ',
  'open-data': 'Открытые данные',
  'out-of-the-box': 'Готовое решение',
  'peer-to-peer-consulting': 'Консультирование P2P',
  'ready-set-shop-': 'Готов, начинай, покупай!',
  'the-middle-east-s-top-25-fintech-companies-2022': 'ТОП-25 финтех компаний Ближнего Востока 2022',
  'the-most-reliable-way-to-organize-and-manage-delivery-': 'Самый надежный способ организовать и управлять доставкой 📦',
  'token-2049': 'Token 2049',
  'umma-amazing-ummazing': 'Umma + Amazing = Ummazing',
  'what-are-the-learning-of-open-finance': 'Какие уроки открытых финансов',
  'wish-driven-model': 'Модель, основанная на желаниях',
  
  // HR и бизнес
  'client-services-business-platforms': 'Клиентские сервисы → Бизнес-платформы',
  'hr-fintech': 'HR + Финтех',
  
  // Русские файлы (уже на русском)
  '11-globalnyh-finteh-trendov': '11 глобальных финтех трендов',
  '2025-2030-gody-bank-4.0': '2025-2030 годы: Банк 4.0',
  '5-knig-dlya-interesuyushchihsya-ekonomikoy': '5 книг для интересующихся экономикой',
  
  // Остальные файлы (используем имя файла как есть, но красиво форматируем)
};

// Функция для получения русского заголовка или красиво отформатированного английского
export function getBlogTitle(slug: string): string {
  // Если есть русский перевод, используем его
  if (blogTitles[slug]) {
    return blogTitles[slug];
  }
  
  // Если это файл с хешем, не показываем заголовок
  if (isHashFilename(slug)) {
    return '';
  }
  
  // Иначе форматируем английское название
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

// Проверяем, является ли имя файла хешем
function isHashFilename(slug: string): boolean {
  // Проверяем, состоит ли slug только из букв и цифр и имеет длину хеша
  return /^[a-f0-9]{32}$/.test(slug) || /^[a-f0-9]{40}$/.test(slug) || /^[a-f0-9]{64}$/.test(slug);
}
