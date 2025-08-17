# SQL: Группировка данных

---

### **Функции агрегации MIN(), MAX(), SUM(), AVG(), COUNT()**

**Группировка наименьшим значением MIN()**

Структура запроса:

```sql
SELECT MIN(column_name)
FROM table_name
```

Пример:

```sql
SELECT MIN(price) AS min_price
FROM listings
```

**Группировка наибольшим значением MAX()**

Структура запроса:

```sql
SELECT MAX(column_name)
FROM table_name
```

Пример:

```sql
SELECT MAX(price) AS min_price
FROM listings
```

**Группировка суммой значений SUM()**

Структура запроса:

```sql
SELECT SUM(column_name)
FROM table_name
```

Пример:

```sql
SELECT SUM(price) AS min_price
FROM listings
```

**Группировка средним арифметическим значений AVG()**

Структура запроса:

```sql
SELECT AVG(column_name)
FROM table_name
```

Пример:

```sql
SELECT AVG(price) AS min_price
FROM listings
```

**Группировка количеством значений всей таблицы COUNT()**

Структура запроса:

```sql
SELECT COUNT(*)
FROM table_name
```

Пример:

```sql
SELECT COUNT(*) AS total_count
FROM listings
```

**Группировка количеством значений столбца COUNT()**

Структура запроса:

```sql
SELECT COUNT(column_name)
FROM table_name
```

Пример:

```sql
SELECT COUNT(price) AS price_count
FROM listings
```

**Группировка количеством уникальных значений COUNT()**

Структура запроса:

```sql
SELECT COUNT(DISTINCT column_name)
FROM table_name
```

Пример:

```sql
SELECT COUNT(DISTINCT room_type) 
FROM listings
```

<aside>
❗ Если в столбце есть значения NULL, то при применении функций агрегации - значения NULL не будут считаться.

</aside>

---

<aside>
✏️ **GROUP BY** – ключевое слово для группировки данных

</aside>

**Группировка значений столбца(ов)**

Структура запроса:

```sql
SELECT column_name(s)
FROM table_name
GROUP BY column_name(s)
```

Пример:

```sql
SELECT room_type, city
FROM listings
GROUP BY room_type, city
```

**Группировка с помощью порядковых чисел**

Структура запроса:

```sql
SELECT column_name(s)
FROM table_name
GROUP BY 1, 2...
```

Пример:

```sql
SELECT room_type, city
FROM listings
GROUP BY 1, 2
```

**GROUP BY и функции агрегации MIN(), MAX(), SUM(), AVG(), COUNT()**

Структура запроса:

```sql
SELECT column_name(s)
, COUNT(*) 
FROM table_name
GROUP BY column_name(s)
```

Пример:

```sql
SELECT room_type
, COUNT(*) AS total_count
FROM listings
GROUP BY room_type
```

<aside>
❗ Если в SELECT есть функции агрегации, то все **остальные не агрегированные колонки должны быть указаны в GROUP BY**. Иначе SQLite выдаст неопределенный результат, а другие СУБД могут выдать ошибку.

</aside>

---

<aside>
✏️ **HAVING** – ключевое слово для фильтрации сгруппированных значений

</aside>

Структура запроса:

```sql
SELECT column_name_1
, MIN(column_name_2)
FROM table_name
GROUP BY column_name 
HAVING condition(s)
```

Пример:

```sql
SELECT room_type
, COUNT(*) AS total_count 
FROM listings
GROUP BY room_type 
HAVING total_count > 100
```

<aside>
❗ Разница между WHERE и HAVING:
- **WHERE** выбирает строки для группировки
- **HAVING** отбирает результаты группировки

</aside>

---

<aside>
❗ **Порядок выполнения запроса в SQL:**
- FROM
- WHERE
- GROUP BY
- HAVING
- SELECT 
- DISTINCT
- ORDER BY
- LIMIT

</aside>

![SQL%20%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20dd042a5e6e874fbd9c1c706869bf7c6c/Untitled.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Аналитика%20продукта/SQL2/SQL%20Группировка%20данных%20dd042a5e6e874fbd9c1c706869bf7c6c/Untitled.png)