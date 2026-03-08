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
0:{"P":null,"b":"p4sgdc3utZK-wUSIC-oba","p":"","c":["","content","2-specifikaciya-po-produktovoj-razrabotke","analitika-produkta","sql2","sql-gruppirovka-dannyh-dd042a5e6e874fbd9c1c706869bf7c6c",""],"i":false,"f":[[["",{"children":["content",{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-gruppirovka-dannyh-dd042a5e6e874fbd9c1c706869bf7c6c","c"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e27041d1401e0af5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ru","className":"dark h-full","children":["$","body",null,{"className":"__variable_fb8f2c __variable_f910ec antialiased h-full bg-background flex flex-col","children":[["$","div",null,{"className":"flex-1","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"border-t border-border mt-auto","children":["$","div",null,{"className":"container mx-auto px-4 py-8 max-w-4xl","children":["$","div",null,{"className":"text-center text-sm text-muted-foreground","children":["$","p",null,{"children":"КОЛОСКОВ™"}]}]}]}]]}]}]]}],{"children":["content",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql2/sql-gruppirovka-dannyh-dd042a5e6e874fbd9c1c706869bf7c6c","c"],["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L4",null,["$","$L5",null,{"children":["$L6",["$","$L7",null,{"promise":"$@8"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$L9",null,{"children":"$La"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$Lb",null,{"children":["$","div",null,{"hidden":true,"children":["$","$c",null,{"fallback":null,"children":"$Ld"}]}]}]]}],false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
6:null
f:I[8175,[],"IconMark"]
8:{"metadata":[["$","title","0",{"children":"КОЛОСКОВ.РФ: Платформизация экономики"}],["$","meta","1",{"name":"description","content":"Размышления о финтехе, банкинге и цифровых технологиях"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","$Lf","3",{}]],"error":null,"digest":"$undefined"}
d:"$8:metadata"
10:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","734","static/chunks/app/content/%5B...slug%5D/page-7b3ae3552f08c16e.js"],""]
11:T12a0,<h1>SQL: Группировка данных</h1>
<hr>
<h3><strong>Функции агрегации MIN(), MAX(), SUM(), AVG(), COUNT()</strong></h3>
<p><strong>Группировка наименьшим значением MIN()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT MIN(column_name)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT MIN(price) AS min_price
FROM listings
</code></pre>
<p><strong>Группировка наибольшим значением MAX()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT MAX(column_name)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT MAX(price) AS min_price
FROM listings
</code></pre>
<p><strong>Группировка суммой значений SUM()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT SUM(column_name)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT SUM(price) AS min_price
FROM listings
</code></pre>
<p><strong>Группировка средним арифметическим значений AVG()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT AVG(column_name)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT AVG(price) AS min_price
FROM listings
</code></pre>
<p><strong>Группировка количеством значений всей таблицы COUNT()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT COUNT(*)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT COUNT(*) AS total_count
FROM listings
</code></pre>
<p><strong>Группировка количеством значений столбца COUNT()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT COUNT(column_name)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT COUNT(price) AS price_count
FROM listings
</code></pre>
<p><strong>Группировка количеством уникальных значений COUNT()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT COUNT(DISTINCT column_name)
FROM table_name
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT COUNT(DISTINCT room_type) 
FROM listings
</code></pre>
<hr>
<p><strong>Группировка значений столбца(ов)</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT column_name(s)
FROM table_name
GROUP BY column_name(s)
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT room_type, city
FROM listings
GROUP BY room_type, city
</code></pre>
<p><strong>Группировка с помощью порядковых чисел</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT column_name(s)
FROM table_name
GROUP BY 1, 2...
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT room_type, city
FROM listings
GROUP BY 1, 2
</code></pre>
<p><strong>GROUP BY и функции агрегации MIN(), MAX(), SUM(), AVG(), COUNT()</strong></p>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT column_name(s)
, COUNT(*) 
FROM table_name
GROUP BY column_name(s)
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT room_type
, COUNT(*) AS total_count
FROM listings
GROUP BY room_type
</code></pre>
<hr>
<p>Структура запроса:</p>
<pre><code class="language-sql">SELECT column_name_1
, MIN(column_name_2)
FROM table_name
GROUP BY column_name 
HAVING condition(s)
</code></pre>
<p>Пример:</p>
<pre><code class="language-sql">SELECT room_type
, COUNT(*) AS total_count 
FROM listings
GROUP BY room_type 
HAVING total_count > 100
</code></pre>
<hr>
<p><img src="%F0%9F%8C%96%20%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5/%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0/SQL2/SQL%20%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20dd042a5e6e874fbd9c1c706869bf7c6c/Untitled.png" alt="SQL%20%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20dd042a5e6e874fbd9c1c706869bf7c6c/Untitled.png"></p>
4:["$","div",null,{"className":"max-w-4xl mx-auto p-8","children":[["$","div",null,{"className":"mb-6","children":["$","$L10",null,{"href":"/","className":"text-blue-600 hover:underline","children":"← Назад на главную"}]}],["$","article",null,{"className":"prose prose-lg max-w-none","children":["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$11"}}]}]]}]
