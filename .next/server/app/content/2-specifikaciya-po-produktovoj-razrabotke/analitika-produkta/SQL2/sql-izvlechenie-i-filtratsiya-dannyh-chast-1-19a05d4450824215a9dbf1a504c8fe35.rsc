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
0:{"P":null,"b":"p4sgdc3utZK-wUSIC-oba","p":"","c":["","content","2-specifikaciya-po-produktovoj-razrabotke","analitika-produkta","sql2","sql-izvlechenie-i-filtratsiya-dannyh-chast-1-19a05d4450824215a9dbf1a504c8fe35",""],"i":false,"f":[[["",{"children":["content",{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-izvlechenie-i-filtratsiya-dannyh-chast-1-19a05d4450824215a9dbf1a504c8fe35","c"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e27041d1401e0af5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ru","className":"dark h-full","children":["$","body",null,{"className":"__variable_fb8f2c __variable_f910ec antialiased h-full bg-background flex flex-col","children":[["$","div",null,{"className":"flex-1","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"border-t border-border mt-auto","children":["$","div",null,{"className":"container mx-auto px-4 py-8 max-w-4xl","children":["$","div",null,{"className":"text-center text-sm text-muted-foreground","children":["$","p",null,{"children":"КОЛОСКОВ™"}]}]}]}]]}]}]]}],{"children":["content",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-izvlechenie-i-filtratsiya-dannyh-chast-1-19a05d4450824215a9dbf1a504c8fe35","c"],["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L4",null,["$","$L5",null,{"children":["$L6",["$","$L7",null,{"promise":"$@8"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$L9",null,{"children":"$La"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$Lb",null,{"children":["$","div",null,{"hidden":true,"children":["$","$c",null,{"fallback":null,"children":"$Ld"}]}]}]]}],false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
6:null
f:I[8175,[],"IconMark"]
8:{"metadata":[["$","title","0",{"children":"КОЛОСКОВ.РФ: Платформизация экономики"}],["$","meta","1",{"name":"description","content":"Размышления о финтехе, банкинге и цифровых технологиях"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","$Lf","3",{}]],"error":null,"digest":"$undefined"}
d:"$8:metadata"
10:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","734","static/chunks/app/content/%5B...slug%5D/page-7b3ae3552f08c16e.js"],""]
11:Tca8,<h1>SQL: Извлечение и фильтрация данных (часть 1)</h1>
<hr>
<p><strong>Извлечение столбцов из таблицы</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT column_name(s) 
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT name, id 
FROM hosts
</code></pre>
<p><strong>Извлечение всех столбцов из таблицы</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM hosts
</code></pre>
<p><strong>Извлечение уникальных значений</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT DISTINCT column_name(s) 
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT DISTINCT name 
FROM hosts
</code></pre>
<hr>
<p><strong>Извлечение определенного количества строк</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
LIMIT N
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT *
FROM hosts
LIMIT 10
</code></pre>
<hr>
<p><strong>Фильтрация строк по соответствию = или IS</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT * 
FROM table_name
WHERE column_name = value
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM hosts
WHERE host_since = ‘2020-01-01’
</code></pre>
<p><strong>Фильтрация строк по соответствию >, ≥, &#x3C;, ≤</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT * 
FROM table_name
WHERE column_name > value
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM hosts
WHERE host_since &#x3C;= ‘2020-01-01’
</code></pre>
<p><strong>Фильтрация строк по не соответствию !=, &#x3C;> или IS NOT</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT * 
FROM table_name
WHERE column_name != value
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM hosts
WHERE host_since != ‘2020-01-01’
</code></pre>
<p><strong>Фильтрация строк по частичному соответствию LIKE ‘%’</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT * 
FROM table_name
WHERE column_name LIKE '%value%'
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM hosts
WHERE location LIKE '%Dublin%'
</code></pre>
<hr>
<p>И важно заметить, что запросы по прошедшему материалу не меняют никоим образом саму базу данных и данные в ней. Фильтрация строк происходит в результате, сама таблица в базе данных остается такой же как и была.</p>
4:["$","div",null,{"className":"max-w-4xl mx-auto p-8","children":[["$","div",null,{"className":"mb-6","children":["$","$L10",null,{"href":"/","className":"text-blue-600 hover:underline","children":"← Назад на главную"}]}],["$","article",null,{"className":"prose prose-lg max-w-none","children":["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$11"}}]}]]}]
