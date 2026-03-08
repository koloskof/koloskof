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
0:{"P":null,"b":"p4sgdc3utZK-wUSIC-oba","p":"","c":["","content","2-specifikaciya-po-produktovoj-razrabotke","analitika-produkta","sql2","sql-preobrazovanie-i-sortirovka-dannyh-chast-2-636eb51dcbae48109b632ae04759c35d",""],"i":false,"f":[[["",{"children":["content",{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-preobrazovanie-i-sortirovka-dannyh-chast-2-636eb51dcbae48109b632ae04759c35d","c"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e27041d1401e0af5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ru","className":"dark h-full","children":["$","body",null,{"className":"__variable_fb8f2c __variable_f910ec antialiased h-full bg-background flex flex-col","children":[["$","div",null,{"className":"flex-1","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"border-t border-border mt-auto","children":["$","div",null,{"className":"container mx-auto px-4 py-8 max-w-4xl","children":["$","div",null,{"className":"text-center text-sm text-muted-foreground","children":["$","p",null,{"children":"КОЛОСКОВ™"}]}]}]}]]}]}]]}],{"children":["content",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-preobrazovanie-i-sortirovka-dannyh-chast-2-636eb51dcbae48109b632ae04759c35d","c"],["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L4",null,["$","$L5",null,{"children":["$L6",["$","$L7",null,{"promise":"$@8"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$L9",null,{"children":"$La"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$Lb",null,{"children":["$","div",null,{"hidden":true,"children":["$","$c",null,{"fallback":null,"children":"$Ld"}]}]}]]}],false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
6:null
f:I[8175,[],"IconMark"]
8:{"metadata":[["$","title","0",{"children":"КОЛОСКОВ.РФ: Платформизация экономики"}],["$","meta","1",{"name":"description","content":"Размышления о финтехе, банкинге и цифровых технологиях"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","$Lf","3",{}]],"error":null,"digest":"$undefined"}
d:"$8:metadata"
10:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","734","static/chunks/app/content/%5B...slug%5D/page-7b3ae3552f08c16e.js"],""]
11:Te04,<h1>SQL: Преобразование и сортировка данных (часть 2)</h1>
<hr>
<p><strong>Преобразование текущей даты/времени</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT DATE(‘now’)
</code></pre>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT TIME(‘now’)
</code></pre>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT 
DATETIME(‘now’)
</code></pre>
<hr>
<p>Список modifiers:</p>
<p><a href="https://www.sqlite.org/lang_datefunc.html">Date And Time Functions</a></p>
<p><strong>Преобразование и модификации ‘now’</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT DATE (‘now’, ‘modifier(s)’)
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT DATETIME(‘now’, 
‘start of day’, ‘weekday 1’) 
</code></pre>
<hr>
<p><strong>Преобразование и модификации любой даты/времени</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT DATETIME(‘date’, ‘modifier(s)’)
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT DATETIME(‘2019-12-13 03:30:29’
, ‘start of month’)
</code></pre>
<p><strong>Преобразование и модификации даты/времени из таблицы</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT DATE(column_name, ‘modifier(s)’)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT DATE(host_since
, ‘start of month’) 
FROM hosts
</code></pre>
<hr>
<p><strong>Сортировка столбца(ов) по возрастающей ORDER BY (ASC)</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
ORDER BY column_name(s) (ASC)
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM listings 
ORDER BY price ASC
</code></pre>
<p><strong>Сортировка столбца(ов) по убывающей ORDER BY DESC</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
ORDER BY column_name(s) DESC
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT * 
FROM listings 
ORDER BY price DESC
</code></pre>
<p><strong>Сортировка ORDER BY с помощью порядковых чисел</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
ORDER BY 1, 2, ...
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT price, minimum_nights
FROM listings 
ORDER BY 2, 1
</code></pre>
<hr>
<p><strong>Извлечение первых N (Top N) записей</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
ORDER BY column_name DESC
LIMIT N
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT *
FROM listings 
ORDER BY price DESC
LIMIT 5
</code></pre>
<p><strong>Извлечение последних N (Bottom N) записей</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT *
FROM table_name
ORDER BY column_name (ASC)
LIMIT N
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT *
FROM listings 
ORDER BY price 
LIMIT 5
</code></pre>
4:["$","div",null,{"className":"max-w-4xl mx-auto p-8","children":[["$","div",null,{"className":"mb-6","children":["$","$L10",null,{"href":"/","className":"text-blue-600 hover:underline","children":"← Назад на главную"}]}],["$","article",null,{"className":"prose prose-lg max-w-none","children":["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$11"}}]}]]}]
