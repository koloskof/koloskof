# Подзапросы

---

<aside>
✏️ **Подзапрос** - это запрос, вложенный в другой запрос. Его также называют внутренним или просто вложенным запросом.

</aside>

### Подзапрос в `SELECT`

Структура запроса:

```sql
SELECT 
	column_1, 
	column_2, 
  (SELECT ... ) 
FROM table_name
```

Пример:

```sql
SELECT 
  id, 
  price, 
  (SELECT avg(price) FROM listings) AS avg
FROM listings
```

### Подзапрос в `FROM`

Структура запроса:

```sql
SELECT 
	column_1
FROM (SELECT ... )

```

Пример:

```sql
SELECT 
	*
FROM (SELECT id, price FROM listings 
WHERE price > 1000)
```

### Подзапрос в `JOIN`

Структура запроса:

```sql
SELECT 
	column_1,
	column_2
FROM table_name
LEFT JOIN (SELECT ...)

```

Пример:

```sql
SELECT 
	hosts.id AS host_id, 
	total.listings AS listings
FROM hosts
LEFT JOIN (SELECT host_id, 
COUNT(*) AS listings 
FROM listings GROUP BY host_id) 
AS total ON total.host_id = hosts.id
ORDER BY total.listings DESC
```

### Подзапрос в `WHERE IN/NOT IN`

Структура запроса:

```sql
SELECT 
	column_1
FROM table_name
WHERE column_1 IN (SELECT ... )

```

Пример:

```sql
SELECT 
	count(*)
FROM listings 
WHERE id IN (SELECT DISTINCT 
listing_id FROM reviews)
```

### Подзапрос в `WHERE <>`

Структура запроса:

```sql
SELECT 
	column_1
FROM table_name
WHERE column_1 IN (SELECT ... )

```

Пример:

```sql
SELECT 
	count(*)
FROM listings 
WHERE id IN (SELECT DISTINCT 
listing_id FROM reviews)
```

### Подзапрос в `WHERE =`

Структура запроса:

```sql
SELECT 
	column_1, 
	column_2
FROM table_name
WHERE column_1 = (SELECT ... )

```

Пример:

```sql
SELECT 
	id, 
	 price
FROM listings 
WHERE price = (SELECT max(price) 
FROM listings)
```