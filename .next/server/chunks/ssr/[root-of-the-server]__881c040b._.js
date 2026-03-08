module.exports = {

"[project]/.next-internal/server/app/blog/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/lib/blog-titles.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Маппинг английских имен файлов на русские заголовки
__turbopack_context__.s({
    "blogTitles": ()=>blogTitles,
    "getBlogTitle": ()=>getBlogTitle
});
const blogTitles = {
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
    '5-knig-dlya-interesuyushchihsya-ekonomikoy': '5 книг для интересующихся экономикой'
};
function getBlogTitle(slug) {
    // Если есть русский перевод, используем его
    if (blogTitles[slug]) {
        return blogTitles[slug];
    }
    // Если это файл с хешем, не показываем заголовок
    if (isHashFilename(slug)) {
        return '';
    }
    // Иначе форматируем английское название
    return slug.replace(/-/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase()).replace(/\s+/g, ' ').trim();
}
// Проверяем, является ли имя файла хешем
function isHashFilename(slug) {
    // Проверяем, состоит ли slug только из букв и цифр и имеет длину хеша
    return /^[a-f0-9]{32}$/.test(slug) || /^[a-f0-9]{40}$/.test(slug) || /^[a-f0-9]{64}$/.test(slug);
}
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>BlogPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2d$titles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blog-titles.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getBlogPosts() {
    const blogDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "src/blog");
    try {
        const files = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(blogDir);
        const mdFiles = files.filter((file)=>file.endsWith('.md'));
        const posts = await Promise.all(mdFiles.map(async (file)=>{
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(blogDir, file);
            const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, 'utf8');
            const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileContent);
            const slug = file.replace('.md', '');
            const title = data.title || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2d$titles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogTitle"])(slug);
            const excerpt = content.slice(0, 200) + (content.length > 200 ? '...' : '');
            return {
                slug,
                title,
                content,
                excerpt
            };
        }));
        return posts.sort((a, b)=>a.title.localeCompare(b.title));
    } catch (error) {
        console.error('Error reading blog posts:', error);
        return [];
    }
}
async function BlogPage() {
    const posts = await getBlogPosts();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-8 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "space-y-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-blue-600 hover:underline",
                                children: "← Главная"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold",
                            children: "Отраслевая аналитика"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Исследование потенциала потребительского рынка и поиск технологических решений для улучшения качества жизни людей и повышения эффективности бизнеса."
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: posts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6",
                        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        post.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/blog/${post.slug}`,
                                                className: "text-foreground hover:text-blue-600 transition-colors",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 23
                                        }, this),
                                        post.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: post.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/blog/${post.slug}`,
                                            className: "block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed hover:text-foreground transition-colors",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/blog/${post.slug}`,
                                                className: "text-blue-600 hover:underline text-sm font-medium",
                                                children: "Читать далее →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this)
                            }, post.slug, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "Посты блога загружаются..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border pt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-sm text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Всего статей: ",
                                posts.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/page.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__881c040b._.js.map