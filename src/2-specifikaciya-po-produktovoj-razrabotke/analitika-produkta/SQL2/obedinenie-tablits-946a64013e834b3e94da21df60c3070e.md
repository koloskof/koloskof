# Объединение таблиц

---

### INNER JOIN (JOIN)

![%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%20946a64013e834b3e94da21df60c3070e/Untitled.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/Объединение%20таблиц%20946a64013e834b3e94da21df60c3070e/Untitled.png)

Из таблицы А и таблицы В возвращаются только те строки, по которым выполняются условия объединения

Структура запроса:

```sql
SELECT *
FROM a
INNER JOIN b ON a.key = b.key

```

Пример:

```sql
SELECT * 
FROM reviews 
INNER JOIN listings 
ON reviews.listing_id = listings.id
```

### LEFT JOIN

![%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%20946a64013e834b3e94da21df60c3070e/Untitled%201.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/Объединение%20таблиц%20946a64013e834b3e94da21df60c3070e/Untitled%201.png)

К таблице А добавляются только те строки из таблицы В, по которым выполняются условия объединения. Где не выполняются условия, то там ставятся пустые значения.

Структура запроса:

```sql
SELECT *
FROM a
LEFT JOIN b ON a.key = b.key

```

Пример:

```sql
SELECT * 
FROM reviews 
LEFT JOIN listings 
ON reviews.listing_id = listings.id
```

### RIGHT JOIN

![%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%20946a64013e834b3e94da21df60c3070e/Untitled%201.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/Объединение%20таблиц%20946a64013e834b3e94da21df60c3070e/Untitled%201.png)

Из таблицы А берем только то, что есть и в таблице В, а также присоединяем все данные из таблицы В. Где не выполняются условия, то там ставятся пустые значения

Структура запроса:

```sql
SELECT *
FROM a
RIGHT JOIN b ON a.key = b.key

```

Пример:

```sql
SELECT * 
FROM reviews 
RIGHT JOIN listings 
ON reviews.listing_id = listings.id
```

### FULL OUTER JOIN

![%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%20946a64013e834b3e94da21df60c3070e/Untitled%202.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/Объединение%20таблиц%20946a64013e834b3e94da21df60c3070e/Untitled%202.png)

Возвращаем все строки из таблицы А, и таблицы В. Где не выполняются условия, то там ставятся пустые значения

Структура запроса:

```sql
SELECT *
FROM a
FULL OUTER JOIN b ON a.key = b.key

```

Пример:

```sql
SELECT * 
FROM hosts 
FULL OUTER JOIN listings 
ON hosts.id = listings.host_id
```

### CROSS JOIN

![%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%20946a64013e834b3e94da21df60c3070e/Untitled%203.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/Объединение%20таблиц%20946a64013e834b3e94da21df60c3070e/Untitled%203.png)

Каждую строку таблицы А объединяем с каждой строкой таблицы В (декартово произведение)

Структура запроса:

```sql
SELECT *
FROM a
CROSS JOIN b ON a.key = b.key
```

Пример:

```sql
SELECT * 
FROM hosts 
CROSS JOIN listings
```

### UNION

![%D0%9E%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%20946a64013e834b3e94da21df60c3070e/Untitled%204.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/Объединение%20таблиц%20946a64013e834b3e94da21df60c3070e/Untitled%204.png)

Соединяет таблицы не по горизонтали, а по вертикали

Структура запроса:

```sql
SELECT * FROM a
UNION 
select * from b
```

Пример:

```sql
SELECT id FROM hosts 
UNION
SELECT reviewer_id FROM reviews
```

<aside>
❗ **UNION** по умолчанию отбирает `только уникальные записи`.  Если надо получить `все записи`, в том числе одинаковые, то надо использовать **UNION ALL**.

</aside>