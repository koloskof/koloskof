# SQL: Преобразование и сортировка данных (часть 2)

---

<aside>
✏️ **‘now’ (сейчас)** – параметр, который возвращает текущее время и дату

</aside>

**Преобразование текущей даты/времени**

Структура запроса:

```sql
SELECT DATE(‘now’)
```

Структура запроса:

```sql
SELECT TIME(‘now’)
```

Структура запроса:

```sql
SELECT 
DATETIME(‘now’)
```

<aside>
❗ В разных СУБД синтаксис функций дат/времени может отличаться
Пример: SQLite: ‘now’, MySQL: NOW(), Amazon Redshift: GETDATE()

</aside>

---

<aside>
✏️ **Modifiers** – модификации даты/времени в SQLite.

</aside>

Список modifiers:

[Date And Time Functions](https://www.sqlite.org/lang_datefunc.html)

**Преобразование и модификации ‘now’**

Структура запроса:

```sql
SELECT DATE (‘now’, ‘modifier(s)’)
```

Пример:

```sql
SELECT DATETIME(‘now’, 
‘start of day’, ‘weekday 1’) 
```

---

**Преобразование и модификации любой даты/времени**

Структура запроса:

```sql
SELECT DATETIME(‘date’, ‘modifier(s)’)
```

Пример:

```sql
SELECT DATETIME(‘2019-12-13 03:30:29’
, ‘start of month’)
```

**Преобразование и модификации даты/времени из таблицы**

Структура запроса:

```sql
SELECT DATE(column_name, ‘modifier(s)’)
FROM table_name
```

Пример:

```sql
SELECT DATE(host_since
, ‘start of month’) 
FROM hosts
```

---

<aside>
✏️ **ORDER BY** – ключевое слово для сортировки записей по столбцу(ам)

</aside>

**Сортировка столбца(ов) по возрастающей ORDER BY (ASC)**

Структура запроса:

```sql
SELECT *
FROM table_name
ORDER BY column_name(s) (ASC)
```

Пример:

```sql
SELECT * 
FROM listings 
ORDER BY price ASC
```

**Сортировка столбца(ов) по убывающей ORDER BY DESC**

Структура запроса:

```sql
SELECT *
FROM table_name
ORDER BY column_name(s) DESC
```

Пример:

```sql
SELECT * 
FROM listings 
ORDER BY price DESC
```

**Сортировка ORDER BY с помощью порядковых чисел**

Структура запроса:

```sql
SELECT *
FROM table_name
ORDER BY 1, 2, ...
```

Пример:

```sql
SELECT price, minimum_nights
FROM listings 
ORDER BY 2, 1
```

---

**Извлечение первых N (Top N) записей**

Структура запроса:

```sql
SELECT *
FROM table_name
ORDER BY column_name DESC
LIMIT N
```

Пример:

```sql
SELECT *
FROM listings 
ORDER BY price DESC
LIMIT 5
```

**Извлечение последних N (Bottom N) записей**

Структура запроса:

```sql
SELECT *
FROM table_name
ORDER BY column_name (ASC)
LIMIT N
```

Пример:

```sql
SELECT *
FROM listings 
ORDER BY price 
LIMIT 5
```