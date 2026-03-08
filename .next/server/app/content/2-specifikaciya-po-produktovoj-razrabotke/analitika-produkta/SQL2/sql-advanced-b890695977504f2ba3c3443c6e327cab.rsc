1:"$Sreact.fragment"
2:I[7555,[],""]
3:I[1295,[],""]
5:I[9665,[],"OutletBoundary"]
7:I[4911,[],"AsyncMetadataOutlet"]
9:I[9665,[],"ViewportBoundary"]
b:I[9665,[],"MetadataBoundary"]
c:"$Sreact.suspense"
e:I[8393,[],""]
:HL["/_next/static/media/028c0d39d2e8f589-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/5b01f339abf2f1a5.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/css/e27041d1401e0af5.css","style"]
0:{"P":null,"b":"p4sgdc3utZK-wUSIC-oba","p":"","c":["","content","2-specifikaciya-po-produktovoj-razrabotke","analitika-produkta","sql2","sql-advanced-b890695977504f2ba3c3443c6e327cab",""],"i":false,"f":[[["",{"children":["content",{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-advanced-b890695977504f2ba3c3443c6e327cab","c"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e27041d1401e0af5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ru","className":"dark h-full","children":["$","body",null,{"className":"__variable_fb8f2c __variable_f910ec antialiased h-full bg-background flex flex-col","children":[["$","div",null,{"className":"flex-1","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"border-t border-border mt-auto","children":["$","div",null,{"className":"container mx-auto px-4 py-8 max-w-4xl","children":["$","div",null,{"className":"text-center text-sm text-muted-foreground","children":["$","p",null,{"children":"КОЛОСКОВ™"}]}]}]}]]}]}]]}],{"children":["content",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-advanced-b890695977504f2ba3c3443c6e327cab","c"],["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L4",null,["$","$L5",null,{"children":["$L6",["$","$L7",null,{"promise":"$@8"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$L9",null,{"children":"$La"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$Lb",null,{"children":["$","div",null,{"hidden":true,"children":["$","$c",null,{"fallback":null,"children":"$Ld"}]}]}]]}],false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
6:null
f:I[8175,[],"IconMark"]
8:{"metadata":[["$","title","0",{"children":"КОЛОСКОВ.РФ: Платформизация экономики"}],["$","meta","1",{"name":"description","content":"Размышления о финтехе, банкинге и цифровых технологиях"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","$Lf","3",{}]],"error":null,"digest":"$undefined"}
d:"$8:metadata"
10:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","734","static/chunks/app/content/%5B...slug%5D/page-7b3ae3552f08c16e.js"],""]
11:T104d,<h1>SQL: Advanced</h1>
<hr>
<h3>Операции с текстом</h3>
<p><strong><code>CONCAT</code> или <code>||</code></strong></p>
<p>Используется для конкатенации, то есть объединения строк:</p>
<p>Пример:</p>
<pre><code class="language-sql">SELECT 'A' || '-' || 'B' AS result
</code></pre>
<p>Результат:</p>
<pre><code class="language-sql">A-B
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT
CONCAT(first_name, ' ', last_name) 
FROM users
</code></pre>
<p>Результат:</p>
<pre><code class="language-sql">Anna Morozova

</code></pre>
<p><strong><code>LENGTH</code></strong></p>
<p>Используется для определения длины строки:</p>
<p>Пример:</p>
<pre><code class="language-sql">SELECT LENGTH('SQL')
</code></pre>
<p>Результат:</p>
<pre><code class="language-sql">3
</code></pre>
<p><strong><code>SUBSTRING</code></strong></p>
<p>Используется для поиска по порядку элементов в строке:</p>
<p>Пример:</p>
<pre><code class="language-sql">SELECT SUBSTRING('ProductStar', 1, 8)
</code></pre>
<p>Результат:</p>
<pre><code class="language-sql">ProductS
</code></pre>
<p><strong><code>REGEXP</code></strong></p>
<p>Используется для поиска по группе символов и знаков (шаблону):</p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT REGEXP_MATCHES
('SQL #Course #Product_Star', 
'#([A-Za-z0-9_]+)',
'g'
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">Course
Product_Star

</code></pre>
<h3>Оконные функции</h3>
<ul>
<li>Используются для подсчета некоторой <strong>функции</strong> по какому-либо <strong>окну</strong>, то есть группе строк</li>
<li><strong>Функции</strong> бывают ****
<ul>
<li>агрегатные: SUM(), MIN(), MAX(), AVG(), COUNT()</li>
<li>ранжирующие: ROW_NUMBER(), RANK(), DENSE_RANK() и т.д.</li>
<li>смещающие: LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE() и т.д</li>
</ul>
</li>
<li><strong>Окно</strong> из строк можно отсортировать, сгруппировать или выбрать без какого-либо условия</li>
</ul>
<h3>Ускорение и оптимизация запросов</h3>
<ul>
<li>Уменьшение размера таблицы, упрощение джоинов и грамотное использование подзапросы облегчает и ускоряет запросы</li>
<li>Также для ускорения доступа к данным и самих запросов можно использовать <strong>индексы</strong></li>
<li><strong><code>EXPLAIN</code></strong> выводит информацию о том, что и в каком порядке делает ядро при каждом конкретном запросе</li>
</ul>
<h3>Представления и общие табличные выражения</h3>
<p><strong><code>VIEW</code></strong></p>
<p>Объект базы данных, являющийся результатом выполнения определенного запроса SELECT:</p>
<p>Структура запроса:</p>
<pre><code class="language-sql">CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">CREATE VIEW de_users AS
SELECT id, first_name, last_name
FROM users
WHERE country = 'DE'
</code></pre>
<p><strong><code>WITH</code></strong></p>
<p>Создает временные таблицы, существующие только для одного запроса:</p>
<p>Структура запроса:</p>
<pre><code class="language-sql">WITH w AS (sql_query)

SELECT * FROM w ...
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">WITH w AS (SELECT * FROM big_table)

SELECT * FROM w WHERE key = 123
</code></pre>
4:["$","div",null,{"className":"max-w-4xl mx-auto p-8","children":[["$","div",null,{"className":"mb-6","children":["$","$L10",null,{"href":"/","className":"text-blue-600 hover:underline","children":"← Назад на главную"}]}],["$","article",null,{"className":"prose prose-lg max-w-none","children":["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$11"}}]}]]}]
