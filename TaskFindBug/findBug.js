const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};
let copy = Object.assign({}, restorantData);
/* let copy = {
    waitors: []
}; */

let i = 0;
for (let value of copy.waitors) {
    copy.waitors[i] = value;
    i = i + 1;
}
copy.waitors[0] = {name: 'Mike', age: 32};
//copy = Object.assign([], restorantData.menu);
console.log(copy);
console.log(restorantData);

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);





function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));


//Пример замыкания

let c = 4;
function addX(x) {
    return function(n) {
        return n + x;
    };
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);