'use strict';
/* Задача:

У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
 */

'use strict';
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    //Перебирает весь объект и записывает в массив данные длины и ширины
let counter = -1;
let arrDataShops = [];
let sumShopsSqr = 0;
let arrDataShopsSum = [];

for (let key in data) {
    if (typeof(data[key]) == 'object') {
        for (let j in data[key]) {
            if (typeof(data[key][j]) == 'object') {
                for (let y in data[key][j]) {
                    counter = counter + 1;
                    arrDataShops[counter] = data[key][j][y];
                }
            }  
        }
    }
}

//Находит площадь каждого магазина и записывает в массив
for (let i = 0; i <= ((arrDataShops.length) - 1); i++) {
    arrDataShopsSum[i] = arrDataShops[i] * arrDataShops[i+1];
    arrDataShopsSum[i+1] = 0;
    i++;
}

//Общая площадь всех магазинов (считает сумму значений в массиве)
for (let i = 0; i < arrDataShopsSum.length; i++) {
    sumShopsSqr += arrDataShopsSum[i];
}
//Находит объём Торговика
let spaceShops = sumShopsSqr * data.height;
//Находит цену отопления
let priceWarm = spaceShops * data.moneyPer1m3;
//Сравнивает вкладываемся ли в бюджет
if (priceWarm < data.budget) {
    return `Бюджета достаточно`;
    } else {
        return `Бюджета недостаточно`;
    }
}
isBudgetEnough(shoppingMallData);


//РЕШЕНИЕ ЗДОРОВОГО ЧЕЛОВЕКА

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);