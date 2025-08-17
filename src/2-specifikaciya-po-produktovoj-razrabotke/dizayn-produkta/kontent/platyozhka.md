# Платёжка

Figma: [https://www.figma.com/file/bEm9RDSMMKidd1epwXlRAW/Content?node-id=1%3A4520](https://www.figma.com/file/bEm9RDSMMKidd1epwXlRAW/Content?node-id=1%3A4520)

Служит для отображения логотипов платёжных систем и чаще всего используется в контексте платёжных процессов, как правило внутри форм или блоков банковских карт.

Графический блок имеет ряд значений размерных модификаций и два типа отображения:

1. Монохромное (с цветовым значением заданным в Теме);

![%D0%9F%D0%BB%D0%B0%D1%82%D0%B5%CC%88%D0%B6%D0%BA%D0%B0%206a1e1a4277414fd29da530f22415b1b8/PaymentIcon.png](PaymentIcon.png)

```json
{
  block: 'payment',
  mods: { name: 'visa', view: 'mono', size: 'm' }
}
```

2. По-умолчанию (c соответствующим цветовым оформлением).

![%D0%9F%D0%BB%D0%B0%D1%82%D0%B5%CC%88%D0%B6%D0%BA%D0%B0%206a1e1a4277414fd29da530f22415b1b8/PaymentIcon%201.png](PaymentIcon%201.png)

```json
{
  block: 'payment',
  mods: { name: 'visa', view: 'brand', size: 'm' }
}
```

[Модификаторы](%D0%9F%D0%BB%D0%B0%D1%82%D0%B5%CC%88%D0%B6%D0%BA%D0%B0%206a1e1a4277414fd29da530f22415b1b8/%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B%203e66b19ecdf2417387a86254e3cbe12e.csv)