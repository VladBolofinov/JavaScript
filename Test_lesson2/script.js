/* Задачки по логическим операторам */  

"use strict";

console.log( NaN || 2 || undefined );    /* выведет 2 */
 
console.log( NaN && 2 && undefined );    /* выведет NaN */
 
console.log( 1 && 2 && 3 );            /* выведет 3 */
 
console.log( !1 && 2 || !3 );          /* выведет !3 */   /* вывело false */
 
console.log( 25 || null && !3 );       /* выведет 25 */
 
console.log( NaN || null || !3 || undefined || 5);      /* выведет 5 */
 
console.log( NaN || null && !3 && undefined || 5);    /* выведет 5 */
 
console.log( 5 === 5 && 3 > 1 || 5);    /* выведет 5 */     /* вывело true */

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
