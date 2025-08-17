# Аватар

Figma: [https://www.figma.com/file/bEm9RDSMMKidd1epwXlRAW/Content?node-id=1%3A135](https://www.figma.com/file/bEm9RDSMMKidd1epwXlRAW/Content?node-id=1%3A135)

Используется для обозначения принадлежности какой-либо информации к конкретному человеку. Блок содержит в себе конструкцию, которая позволяет отобразить фотографию пользователя со вспомогательными элементами.

Внутри блока есть элемент, в который вкладывается сама фотография человека и имеет различные размерные модификации.

![%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%20d2f2c82cd72748c2b97592a6228ba8e1/Size.png](🌖%20Спецификация%20по%20продуктовой%20разработке/Дизайн%20продукта/Контент/Аватар/Size.png)

```json
{
  block: 'avatar',
  content: [
    {
      elem: 'photo',
      elemMods: { size: 'l' }
    }
  ] 
}
```

Если фотографии нет, то отображается заглушка.

![%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%20d2f2c82cd72748c2b97592a6228ba8e1/Placeholder.png](Placeholder.png)

Фотографию можно комбинировать с блоками отвечающими за статус или вместе с счётчиками.

![%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%20d2f2c82cd72748c2b97592a6228ba8e1/Status.png](Status.png)

```json
{
  block: 'avatar',
  content: [
    {
      elem: 'photo',
      elemMods: { size: 'm' }
      content: { block: 'image' }
    },
    {
      elem: 'counter',
      content: '7'
    }
  ]
}
```

## Элемент photo

[Модификаторы](%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%20d2f2c82cd72748c2b97592a6228ba8e1/%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B%20a9bd311b4f3043f3a16896461f9a2bf6.csv)