# Таблица

Figma: [https://www.figma.com/file/7kl4eBgLcnK6OYgM01XVig/Patterns?node-id=1%3A217](https://www.figma.com/file/7kl4eBgLcnK6OYgM01XVig/Patterns?node-id=1%3A217)

Паттерн предназначен для отображения простых табличных данных. У него есть набор модификаторов для того, чтобы покрыть максимальное количество как стилистических так и структурных потребностей. 

Управляя отступами внутри ячеек можно дать больше «воздуха» (этот прием часто используется при небольшом количестве контента для того, чтобы увеличить общую массу блока).

![%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/table1.png](table1.png)

```json
{
  block: 'table',
  content: [
    {
      elem: 'row',
      content: [
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: 'Банковские карты'
        },
        {
          elem: 'col',
          elemMods: { width: '25' },
          content: '3,5%'
        },
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: '2,8%'
        }
      ]
    },
    ...
  ]
}
```

Можно сделать строки зебрированными (это позволит легче фокусироваться на каждой отдельной строке в длинных таблицах).

![%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/table2.png](table2.png)

```json
{
  block: 'table',
  mods: { stripe: 'odd' },
  content: [
    {
      elem: 'row',
      content: [
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: 'Банковские карты'
        },
        {
          elem: 'col',
          elemMods: { width: '25' },
          content: '3,5%'
        },
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: '2,8%'
        }
      ]
    },
    ...
  ]
}
```

При малом количестве строк можно отбить их бордерами. Это разграничит информацию, но сохранить целостность блока.

![%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/table3.png](table3.png)

```json
{
  block: 'table',
  mods: { border: 'between' },
  content: [
    {
      elem: 'row',
      content: [
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: 'Банковские карты'
        },
        {
          elem: 'col',
          elemMods: { width: '25' },
          content: '3,5%'
        },
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: '2,8%'
        }
      ]
    },
    ...
  ]
}
```

Также строку можно маркировать под статус (это поможет определить 'успешность' записи без явного указания бейджем)

![%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/table4.png](table4.png)

```json
{
  block: 'table',
  mods: { stripe: 'odd' },
  content: [
    {
      elem: 'row',
      elemMods: { status: 'normal' },
      content: [
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: 'Банковские карты'
        },
        {
          elem: 'col',
          elemMods: { width: '25' },
          content: '3,5%'
        },
        {
          elem: 'col',
          elemMods: { width: '50' },
          content: '2,8%'
        }
      ]
    },
    ...
  ]
}
```

[Модификации](%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8%204d321c12e25c46f4b202352c35baa74e.csv)

## Элементы блока

### Элемент row

Основной дочерний элемент Паттерна  — повторяющаяся табличная строка.

[Модификации](%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8%20225f1986fe6948d4823316318056b95b.csv)

### Элемент col

Элемент `col` отвечает за колонки таблицы. Колонки вкладываются внутрь строк.

[Модификации](%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%200ff0216ffe7f4354b585016e375e3555/%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8%20a31f431ead8646e281ea69377f184f97.csv)

У каждой колонки можно управлять выравниваем содержимого по горизонтали и явно указать ширину и выравнивание содержимого внутри.