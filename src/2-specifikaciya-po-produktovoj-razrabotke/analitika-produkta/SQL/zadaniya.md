# Задания

**Скачайте базу данных c GitHub** [https://github.com/productstar-team/sql_course/blob/master/inside_airbnb_dublin.db](https://github.com/productstar-team/sql_course/blob/master/inside_airbnb_dublin.db)

Какой тип комнаты есть в городе Bray помимо Entire home/apt?

```sql
SELECT DISTINCT room_type 
FROM listings 
WHERE city = 'Bray'
```

Представьте, что вы хотите написать email хосту, вы знаете только его  ****id, но не знаете его имени. Как зовут хоста с **id 192210**?

```sql
SELECT name 
FROM hosts 
WHERE id = 192210
```

У вас есть только дата регистрации пользователя (5 июля 2016 года) и его имя (John), необходимо найти его id

```sql
SELECT id, name, host_since
FROM hosts
WHERE name = 'John'AND host_since = '2016-07-05'
ORDER BY
	host_since DESC
```

У некоторых хостов не заполнено место расположения (*location*), то есть значение в этом поле пустое (NULL). У какого количества пользователей с именем Paul не заполнена локация?

```sql
SELECT * FROM hosts where location is null and name like '%Paul%'
```

или

```sql
SELECT * FROM hosts where location is null and name = 'Paul'
```

Вы заметили, что после обновления сервиса в саппорт стали поступать жалобы от пользователей о снижении количества аренд. У вас есть примеры id пользователей, которые обращались с жалобами - 406017, 15189624, 29181706. Попробуем разобраться почему это случилось.

Выберете указанных пользователей из базы и подумайте, что их объединяет?

```sql
SELECT * 
FROM hosts 
WHERE id IN (406017, 15189624, 29181706)
```

Предположительно, именно отсутствие описания могло повлиять на решение пользователей о бронировании. Теперь посмотрим на других пользователей со схожими параметрами. Напишите запрос и оцените какое количество пользователей могла затронуть эта проблема.

```sql
SELECT * 
FROM hosts 
WHERE about IS NULL AND is_super_host = 't'
```

А теперь выгрузите только список **id** пользователей, чтобы саппорт мог с ними связаться.

```sql
SELECT id 
FROM hosts 
WHERE about IS NULL and is_super_host = 't'
```

Выберете из таблицы id и имена пользователей, которые зарегистрировались с 1 мая по 31 мая 2019

```sql
SELECT id, name 
FROM hosts 
WHERE host_since BETWEEN '2019-05-01' AND '2019-05-3
```

Но времени пообщаться со всеми, к сожалению, нет. Поэтому придется выбрать только 10 человек. Напишите запрос, который оставит в выборке нужное вам количество пользователей.

```sql
SELECT id, name 
FROM hosts 
WHERE host_since 
BETWEEN '2019-05-01' AND '2019-05-3
```

В реальной жизни можно столкнуться с проблемой, когда пользователи вводят данные в разных форматах: кто-то может написать имя с большой, кто-то с маленькой буквы, а кто-то все напишет капсом. Не очень удобная для вас ситуация, если вам необходимо отфильтровать или найти информацию по таким «неправильным» данным.

В рамках этого задания мы научимся исправлять ошибки подобного вида, а также закрепим навык присваивания имен таблицам и столбцам.

****
Выберите имена пользователей из таблицы хостов, дав при этом таблице название **airbnb_hosts**, а именам — название **host_name.**

```sql
SELECT name AS host_name FROM hosts AS airbnb_hosts
```

или

```sql
SELECT name host_name FROM hosts airbnb_hosts
```

А теперь в рамках этого же запроса надо вывести имена прописными буквами (то есть ТАКИМИ) и дать этому столбцу название **upper_case**

```sql
SELECT 
      name as host_name, 
      UPPER(name) AS upper_case
FROM 
      hosts AS airbnb_hosts
```

Дополните свой запрос также написанием имен со строчной буквы и найдите имя пользователя с идентификатором 687547. В поле ввода введите имя этого пользователя.

```sql
SELECT 
	id,
	name AS host_name, 
    	UPPER(name) AS upper_case, 
    	LOWER(name) AS lower_case
FROM 
	hosts AS airbnb_hosts
WHERE
	id = 687547
```

Сервисный сбор Airbnb составляет 3%. Попробуем посчитать какой процент Airbnb может получить с минимального и максимального бронирования по каждому арендуемому помещению. Считаем, что цена за бронирование указана в USD.

Мы знаем, что в таблице listings есть информация о минимальной и максимальной длительности аренды, а также ее стоимость за один день. Необходимо вывести в запросе айди помещения, стоимость одного бронирования, минимальную и максимальную длительность, а также минимальную и максимальную стоимость (цена*количество ночей). Новым столбцам необходимо дать имена **minimum_cost / maximum_cost**

```sql
SELECT	
	id, 
    	price, 
   	minimum_nights, 
    	maximum_nights, 
   	price*minimum_nights AS minimum_cost, 
    	price*maximum_nights AS maximum_cost 
FROM 
	listings
```

Теперь необходимо вычислить сам сервисный сбор (3%). Выведете новые столбцы для минимальной и максимальной стоимости как **minimum_fee/maximum_fee**, старую часть запроса не удаляйте.

```sql
SELECT	
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
```

А теперь перейдем к нашему непосредственному заданию, где нам надо разбить хостов по дате первой активности. В итоге нас должно получиться четыре группы:

- в 2009 и ранее
- с 2010 по 2014
- с 2015 по 2019
- с 2020

```sql
SELECT 
	id, 
	name, 
	host_since
FROM hosts
```

А теперь напишем простое проверочное условие: если дата первой активности была до 1 января 2015 (не включительно), то это группа А, иначе – B. Присвоим получившемуся результату имя **type**

```sql
SELECT 
	id, 
	name, 
	host_since, 
	  CASE 
	    WHEN host_since < '2015-01-01' THEN 'A' 
	    ELSE 'B' 
    END  type 
FROM hosts
```

Отлично, осталось дело за малым – правильно указать интервалы дат. Напомним, нам необходимо разбить пользователей на категории:

- стал хостом в 2009 и ранее;
- стал хостом с 2010 по 2014;
- стал хостом с 2015 по 2019;
- стал хостом с 2020.

Вам необходимо добавить эти условия в запрос, названия самим категориям можете выбрать любые. Для выбора интервала можете пользоваться как BETWEEN, так и операторами сравнения.

```sql
SELECT 
	id, 
	name, 
	host_since, 
   	CASE 
    	WHEN host_since <= '2009-12-31' THEN 'в 2009 и ранее' 
			WHEN host_since BETWEEN '2010-01-01' AND '2014-12-31' THEN 'с 2010 по 2014'
			WHEN host_since BETWEEN '2015-01-01' AND '2019-12-31' THEN 'с 2015 по 2019 '
			WHEN host_since >= '2020-01-01' THEN 'с 2020' 
		ELSE 'другие' 
  	END AS type 
FROM hosts
```

****
Напишите запрос, который позволит найти максимальную стоимость бронирования при максимально большой длительности аренды для каждого жилья.

```sql
SELECT	
	id, 
    	price, 
    	maximum_nights, 
    	price*maximum_nights AS maximum_cost 
FROM 
	listings
```

****
Сколько придется заплатить за самое дорогое бронирование?

```sql
SELECT	
	id, 
   	price,
   	maximum_nights,
   	price*maximum_nights AS maximum_cost 
FROM 
	listings
ORDER BY 
	maximum_cost DESC
```

Сколько придется заплатить за самое бюджетное бронирование?

```sql
SELECT	
	id, 
   	price,
   	maximum_nights,
   	price*maximum_nights AS maximum_cost 
FROM 
	listings
ORDER BY 
	maximum_cost ASC
```

Когда зарегистрировался самый первый хост? Введите ответ в том же формате, что и в результате запроса

```sql
SELECT * 
FROM hosts 
ORDER BY host_since ASC
```

Как зовут хоста, который зарегистрировался позже всех?

```sql
SELECT * 
FROM hosts 
ORDER BY host_since DESC
```

Как бы очевидно это ни звучало, но продуктами пользуются люди, и они же теми или иными действиями создают данные. А мы, аналитики, эти данные анализируем :)И, пожалуй, в жизни каждого аналитика, работающего с данными, возникали естественные вопросы: А кто же мои пользователи? Как их зовут? Сколько им лет? Больше ли мужчин или женщин пользуются моим продуктом?В рамках этого задания мы проанализируем имена наших пользователей (хостов) и узнаем чье имя самое популярное.

Для начала ответим на вопрос: а сколько вообще пользователей есть в нашей базе? Напишите запрос, который выведет количество пользователей в таблице hosts, а результат впишите в поле ввода.

```sql

```

А теперь напишите запрос, который вернет количество уникальных имен из таблицы hosts

```sql
SELECT COUNT(DISTINCT name) 
FROM hosts
```

Напишите запрос, который выведет имя и количество всех пользователей с таким же именем.

```sql
SELECT 
	name, 
    	COUNT(*) as amount 
FROM
	hosts 
GROUP BY  
	name
```

Отсортируйте получившиеся данные по убыванию количества встречающихся имен и впишите в поле ввода самое популярное имя.

```sql
SELECT 
	name, 
    	COUNT(*) as amount 
FROM
	hosts 
GROUP BY  
	name 
ORDER BY 
	amount desc
```

Напишите запрос, который покажет, сколько пользователей в базе являются супер/обычными хостами.

```sql
SELECT 
	is_super_host,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	is_super_host
```

В реальной жизни довольно часто приходится выводить количество событий в разных временных разрезах: минут, часы, дни, недели, месяца, года и тд. Сейчас и мы научимся выполнять подобные запросы.

Для начала напишите запрос, который выведет дату регистрации и количество зарегистрированных хостов на эту дату.

```sql
SELECT 
    	host_since as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
```

Сколько регистраций было в последний доступный нам день?

```sql
SELECT 
    	host_since as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
ORDER BY 
	period DESC
```

А теперь вспомните как мы приводили дату регистрации к месяцу/году в предыдущем уроке и напишите запрос, который вернет **год**  регистрации хоста и количество хостов, зарегистрировавшихся в этот период.

```sql
SELECT 
    	DATE(host_since, 'start of year') as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
```

Теперь немного измените запрос и сгруппируйте регистрации по месяцам.

```sql
SELECT 
    	DATE(host_since, 'start of month') as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
```

В каком месяце было больше всего регистраций? Впишите ответ в формате гггг-мм-дд.

```sql
SELECT 
    	DATE(host_since, 'start of month') as period,
    	COUNT(*) as amount 
FROM 
	hosts 
GROUP BY
	period
ORDER BY 
	amount desc
```

В рамках данного задания мы поупражняемся в работе с другими операторами, изученными в лекции.

Напишите запрос, который выведет из таблицы listings тип комнаты и их количество, а также минимальную, максимальную и среднюю стоимость для каждого типа жилья.

```sql
SELECT 
	room_type, 
    	MIN(price), 
   	MAX(price),
    	AVG(price), 
    	COUNT(*) as amount
FROM
	listings
GROUP BY
	room_type
```

Напишите запрос, который покажет **максимальную длительность** 
аренды и **количество** доступных помещений в категории **гостиничных номеров,**  отсортируйте при этом **по убыванию** количества помещений.

```sql
SELECT
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
```

А теперь оставьте в результате запроса только те записи, где количество доступных помещений больше 1.

```sql
SELECT
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
```