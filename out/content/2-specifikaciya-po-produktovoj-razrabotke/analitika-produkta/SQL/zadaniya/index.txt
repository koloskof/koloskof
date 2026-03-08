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
0:{"P":null,"b":"p4sgdc3utZK-wUSIC-oba","p":"","c":["","content","2-specifikaciya-po-produktovoj-razrabotke","analitika-produkta","sql","zadaniya",""],"i":false,"f":[[["",{"children":["content",{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql/zadaniya","c"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e27041d1401e0af5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ru","className":"dark h-full","children":["$","body",null,{"className":"__variable_fb8f2c __variable_f910ec antialiased h-full bg-background flex flex-col","children":[["$","div",null,{"className":"flex-1","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"border-t border-border mt-auto","children":["$","div",null,{"className":"container mx-auto px-4 py-8 max-w-4xl","children":["$","div",null,{"className":"text-center text-sm text-muted-foreground","children":["$","p",null,{"children":"КОЛОСКОВ™"}]}]}]}]]}]}]]}],{"children":["content",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["slug","2-specifikaciya-po-produktovoj-razrabotke/analitika-produkta/sql/zadaniya","c"],["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L4",null,["$","$L5",null,{"children":["$L6",["$","$L7",null,{"promise":"$@8"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$L9",null,{"children":"$La"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$Lb",null,{"children":["$","div",null,{"hidden":true,"children":["$","$c",null,{"fallback":null,"children":"$Ld"}]}]}]]}],false]],"m":"$undefined","G":["$e",[]],"s":false,"S":true}
a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
6:null
f:I[8175,[],"IconMark"]
8:{"metadata":[["$","title","0",{"children":"КОЛОСКОВ.РФ: Платформизация экономики"}],["$","meta","1",{"name":"description","content":"Размышления о финтехе, банкинге и цифровых технологиях"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","$Lf","3",{}]],"error":null,"digest":"$undefined"}
d:"$8:metadata"
10:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","734","static/chunks/app/content/%5B...slug%5D/page-7b3ae3552f08c16e.js"],""]
11:T4750,<h1>Задания</h1>
<p><strong>Скачайте базу данных c GitHub</strong> <a href="https://github.com/productstar-team/sql_course/blob/master/inside_airbnb_dublin.db">https://github.com/productstar-team/sql_course/blob/master/inside_airbnb_dublin.db</a></p>
<p>Какой тип комнаты есть в городе Bray помимо Entire home/apt?</p>
<pre><code class="language-sql">SELECT DISTINCT room_type 
FROM listings 
WHERE city = 'Bray'
</code></pre>
<p>Представьте, что вы хотите написать email хосту, вы знаете только его  ****id, но не знаете его имени. Как зовут хоста с <strong>id 192210</strong>?</p>
<pre><code class="language-sql">SELECT name 
FROM hosts 
WHERE id = 192210
</code></pre>
<p>У вас есть только дата регистрации пользователя (5 июля 2016 года) и его имя (John), необходимо найти его id</p>
<pre><code class="language-sql">SELECT id, name, host_since
FROM hosts
WHERE name = 'John'AND host_since = '2016-07-05'
ORDER BY
	host_since DESC
</code></pre>
<p>У некоторых хостов не заполнено место расположения (<em>location</em>), то есть значение в этом поле пустое (NULL). У какого количества пользователей с именем Paul не заполнена локация?</p>
<pre><code class="language-sql">SELECT * FROM hosts where location is null and name like '%Paul%'
</code></pre>
<p>или</p>
<pre><code class="language-sql">SELECT * FROM hosts where location is null and name = 'Paul'
</code></pre>
<p>Вы заметили, что после обновления сервиса в саппорт стали поступать жалобы от пользователей о снижении количества аренд. У вас есть примеры id пользователей, которые обращались с жалобами - 406017, 15189624, 29181706. Попробуем разобраться почему это случилось.</p>
<p>Выберете указанных пользователей из базы и подумайте, что их объединяет?</p>
<pre><code class="language-sql">SELECT * 
FROM hosts 
WHERE id IN (406017, 15189624, 29181706)
</code></pre>
<p>Предположительно, именно отсутствие описания могло повлиять на решение пользователей о бронировании. Теперь посмотрим на других пользователей со схожими параметрами. Напишите запрос и оцените какое количество пользователей могла затронуть эта проблема.</p>
<pre><code class="language-sql">SELECT * 
FROM hosts 
WHERE about IS NULL AND is_super_host = 't'
</code></pre>
<p>А теперь выгрузите только список <strong>id</strong> пользователей, чтобы саппорт мог с ними связаться.</p>
<pre><code class="language-sql">SELECT id 
FROM hosts 
WHERE about IS NULL and is_super_host = 't'
</code></pre>
<p>Выберете из таблицы id и имена пользователей, которые зарегистрировались с 1 мая по 31 мая 2019</p>
<pre><code class="language-sql">SELECT id, name 
FROM hosts 
WHERE host_since BETWEEN '2019-05-01' AND '2019-05-3
</code></pre>
<p>Но времени пообщаться со всеми, к сожалению, нет. Поэтому придется выбрать только 10 человек. Напишите запрос, который оставит в выборке нужное вам количество пользователей.</p>
<pre><code class="language-sql">SELECT id, name 
FROM hosts 
WHERE host_since 
BETWEEN '2019-05-01' AND '2019-05-3
</code></pre>
<p>В реальной жизни можно столкнуться с проблемой, когда пользователи вводят данные в разных форматах: кто-то может написать имя с большой, кто-то с маленькой буквы, а кто-то все напишет капсом. Не очень удобная для вас ситуация, если вам необходимо отфильтровать или найти информацию по таким «неправильным» данным.</p>
<p>В рамках этого задания мы научимся исправлять ошибки подобного вида, а также закрепим навык присваивания имен таблицам и столбцам.</p>
<hr>
<p>Выберите имена пользователей из таблицы хостов, дав при этом таблице название <strong>airbnb_hosts</strong>, а именам — название <strong>host_name.</strong></p>
<pre><code class="language-sql">SELECT name AS host_name FROM hosts AS airbnb_hosts
</code></pre>
<p>или</p>
<pre><code class="language-sql">SELECT name host_name FROM hosts airbnb_hosts
</code></pre>
<p>А теперь в рамках этого же запроса надо вывести имена прописными буквами (то есть ТАКИМИ) и дать этому столбцу название <strong>upper_case</strong></p>
<pre><code class="language-sql">SELECT 
      name as host_name, 
      UPPER(name) AS upper_case
FROM 
      hosts AS airbnb_hosts
</code></pre>
<p>Дополните свой запрос также написанием имен со строчной буквы и найдите имя пользователя с идентификатором 687547. В поле ввода введите имя этого пользователя.</p>
<pre><code class="language-sql">SELECT 
	id,
	name AS host_name, 
    	UPPER(name) AS upper_case, 
    	LOWER(name) AS lower_case
FROM 
	hosts AS airbnb_hosts
WHERE
	id = 687547
</code></pre>
<p>Сервисный сбор Airbnb составляет 3%. Попробуем посчитать какой процент Airbnb может получить с минимального и максимального бронирования по каждому арендуемому помещению. Считаем, что цена за бронирование указана в USD.</p>
<p>Мы знаем, что в таблице listings есть информация о минимальной и максимальной длительности аренды, а также ее стоимость за один день. Необходимо вывести в запросе айди помещения, стоимость одного бронирования, минимальную и максимальную длительность, а также минимальную и максимальную стоимость (цена*количество ночей). Новым столбцам необходимо дать имена <strong>minimum_cost / maximum_cost</strong></p>
<pre><code class="language-sql">SELECT	
	id, 
    	price, 
   	minimum_nights, 
    	maximum_nights, 
   	price*minimum_nights AS minimum_cost, 
    	price*maximum_nights AS maximum_cost 
FROM 
	listings
</code></pre>
<p>Теперь необходимо вычислить сам сервисный сбор (3%). Выведете новые столбцы для минимальной и максимальной стоимости как <strong>minimum_fee/maximum_fee</strong>, старую часть запроса не удаляйте.</p>
<pre><code class="language-sql">SELECT	
	id, 
  price, 
  minimum_nights, 
  maximum_nights, 
  price*minimum_nights AS minimum_cost, 
  price*maximum_nights AS maximum_cost, 
  price*minimum_nights*0.03 AS minimum_fee, 
  price*maximum_nights*0.03 AS maximum_fee
FROM 
	listings
</code></pre>
<p>А теперь перейдем к нашему непосредственному заданию, где нам надо разбить хостов по дате первой активности. В итоге нас должно получиться четыре группы:</p>
<ul>
<li>в 2009 и ранее</li>
<li>с 2010 по 2014</li>
<li>с 2015 по 2019</li>
<li>с 2020</li>
</ul>
<pre><code class="language-sql">SELECT 
	id, 
	name, 
	host_since
FROM hosts
</code></pre>
<p>А теперь напишем простое проверочное условие: если дата первой активности была до 1 января 2015 (не включительно), то это группа А, иначе – B. Присвоим получившемуся результату имя <strong>type</strong></p>
<pre><code class="language-sql">SELECT 
	id, 
	name, 
	host_since, 
	  CASE 
	    WHEN host_since &#x3C; '2015-01-01' THEN 'A' 
	    ELSE 'B' 
    END  type 
FROM hosts
</code></pre>
<p>Отлично, осталось дело за малым – правильно указать интервалы дат. Напомним, нам необходимо разбить пользователей на категории:</p>
<ul>
<li>стал хостом в 2009 и ранее;</li>
<li>стал хостом с 2010 по 2014;</li>
<li>стал хостом с 2015 по 2019;</li>
<li>стал хостом с 2020.</li>
</ul>
<p>Вам необходимо добавить эти условия в запрос, названия самим категориям можете выбрать любые. Для выбора интервала можете пользоваться как BETWEEN, так и операторами сравнения.</p>
<pre><code class="language-sql">SELECT 
	id, 
	name, 
	host_since, 
   	CASE 
    	WHEN host_since &#x3C;= '2009-12-31' THEN 'в 2009 и ранее' 
			WHEN host_since BETWEEN '2010-01-01' AND '2014-12-31' THEN 'с 2010 по 2014'
			WHEN host_since BETWEEN '2015-01-01' AND '2019-12-31' THEN 'с 2015 по 2019 '
			WHEN host_since >= '2020-01-01' THEN 'с 2020' 
		ELSE 'другие' 
  	END AS type 
FROM hosts
</code></pre>
<hr>
<p>Напишите запрос, который позволит найти максимальную стоимость бронирования при максимально большой длительности аренды для каждого жилья.</p>
<pre><code class="language-sql">SELECT	
	id, 
    	price, 
    	maximum_nights, 
    	price*maximum_nights AS maximum_cost 
FROM 
	listings
</code></pre>
<hr>
<p>Сколько придется заплатить за самое дорогое бронирование?</p>
<pre><code class="language-sql">SELECT	
	id, 
   	price,
   	maximum_nights,
   	price*maximum_nights AS maximum_cost 
FROM 
	listings
ORDER BY 
	maximum_cost DESC
</code></pre>
<p>Сколько придется заплатить за самое бюджетное бронирование?</p>
<pre><code class="language-sql">SELECT	
	id, 
   	price,
   	maximum_nights,
   	price*maximum_nights AS maximum_cost 
FROM 
	listings
ORDER BY 
	maximum_cost ASC
</code></pre>
<p>Когда зарегистрировался самый первый хост? Введите ответ в том же формате, что и в результате запроса</p>
<pre><code class="language-sql">SELECT * 
FROM hosts 
ORDER BY host_since ASC
</code></pre>
<p>Как зовут хоста, который зарегистрировался позже всех?</p>
<pre><code class="language-sql">SELECT * 
FROM hosts 
ORDER BY host_since DESC
</code></pre>
<p>Как бы очевидно это ни звучало, но продуктами пользуются люди, и они же теми или иными действиями создают данные. А мы, аналитики, эти данные анализируем :)И, пожалуй, в жизни каждого аналитика, работающего с данными, возникали естественные вопросы: А кто же мои пользователи? Как их зовут? Сколько им лет? Больше ли мужчин или женщин пользуются моим продуктом?В рамках этого задания мы проанализируем имена наших пользователей (хостов) и узнаем чье имя самое популярное.</p>
<p>Для начала ответим на вопрос: а сколько вообще пользователей есть в нашей базе? Напишите запрос, который выведет количество пользователей в таблице hosts, а результат впишите в поле ввода.</p>
<pre><code class="language-sql"></code></pre>
<p>А теперь напишите запрос, который вернет количество уникальных имен из таблицы hosts</p>
<pre><code class="language-sql">SELECT COUNT(DISTINCT name) 
FROM hosts
</code></pre>
<p>Напишите запрос, который выведет имя и количество всех пользователей с таким же именем.</p>
<pre><code class="language-sql">SELECT 
	name, 
    	COUNT(*) as amount 
FROM
	hosts 
GROUP BY  
	name
</code></pre>
<p>Отсортируйте получившиеся данные по убыванию количества встречающихся имен и впишите в поле ввода самое популярное имя.</p>
<pre><code class="language-sql">SELECT 
	name, 
    	COUNT(*) as amount 
FROM
	hosts 
GROUP BY  
	name 
ORDER BY 
	amount desc
</code></pre>
<p>Напишите запрос, который покажет, сколько пользователей в базе являются супер/обычными хостами.</p>
<pre><code class="language-sql">SELECT 
	is_super_host,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	is_super_host
</code></pre>
<p>В реальной жизни довольно часто приходится выводить количество событий в разных временных разрезах: минут, часы, дни, недели, месяца, года и тд. Сейчас и мы научимся выполнять подобные запросы.</p>
<p>Для начала напишите запрос, который выведет дату регистрации и количество зарегистрированных хостов на эту дату.</p>
<pre><code class="language-sql">SELECT 
    	host_since as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
</code></pre>
<p>Сколько регистраций было в последний доступный нам день?</p>
<pre><code class="language-sql">SELECT 
    	host_since as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
ORDER BY 
	period DESC
</code></pre>
<p>А теперь вспомните как мы приводили дату регистрации к месяцу/году в предыдущем уроке и напишите запрос, который вернет <strong>год</strong>  регистрации хоста и количество хостов, зарегистрировавшихся в этот период.</p>
<pre><code class="language-sql">SELECT 
    	DATE(host_since, 'start of year') as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
</code></pre>
<p>Теперь немного измените запрос и сгруппируйте регистрации по месяцам.</p>
<pre><code class="language-sql">SELECT 
    	DATE(host_since, 'start of month') as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
</code></pre>
<p>В каком месяце было больше всего регистраций? Впишите ответ в формате гггг-мм-дд.</p>
<pre><code class="language-sql">SELECT 
    	DATE(host_since, 'start of month') as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
ORDER BY 
	amount desc
</code></pre>
<p>В рамках данного задания мы поупражняемся в работе с другими операторами, изученными в лекции.</p>
<p>Напишите запрос, который выведет из таблицы listings тип комнаты и их количество, а также минимальную, максимальную и среднюю стоимость для каждого типа жилья.</p>
<pre><code class="language-sql">SELECT 
	room_type, 
    	MIN(price), 
   	MAX(price),
    	AVG(price), 
    	COUNT(*) as amount
FROM
	listings
GROUP BY
	room_type
</code></pre>
<p>Напишите запрос, который покажет <strong>максимальную длительность</strong> 
аренды и <strong>количество</strong> доступных помещений в категории <strong>гостиничных номеров,</strong>  отсортируйте при этом <strong>по убыванию</strong> количества помещений.</p>
<pre><code class="language-sql">SELECT
	maximum_nights, 
    	COUNT(*) as amount
FROM 
	listings
WHERE
	room_type = 'Hotel room'
GROUP BY 
	maximum_nights
ORDER BY
	amount desc
</code></pre>
<p>А теперь оставьте в результате запроса только те записи, где количество доступных помещений больше 1.</p>
<pre><code class="language-sql">SELECT
	maximum_nights, 
    	COUNT(*) as amount
FROM 
	listings
WHERE
	room_type = 'Hotel room'
GROUP BY 
	maximum_nights
HAVING 
	amount > 1
ORDER BY
	amount desc
</code></pre>
4:["$","div",null,{"className":"max-w-4xl mx-auto p-8","children":[["$","div",null,{"className":"mb-6","children":["$","$L10",null,{"href":"/","className":"text-blue-600 hover:underline","children":"← Назад на главную"}]}],["$","article",null,{"className":"prose prose-lg max-w-none","children":["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$11"}}]}]]}]
