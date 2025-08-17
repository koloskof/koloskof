# Функция

## Функции

```python
age = int(input("Сколько тебе лет?"))
if(age >= 25):
	print('Тебе можно входить одному')
elif(age >= 18) and (age < 25):
	print('Тебе можно входить только с мамой')
else:
	print('Тебе сюда нельзя')

x = int(input("Введите число 1"))
y = int(input("Введите число 2"))

def sun(a,b):
	return a + b
	
z = sum(x,y)
print(x)
```