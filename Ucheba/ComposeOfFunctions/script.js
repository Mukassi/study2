const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);



const compose = (...funtions) => (argument) => {
   return funtions.reduceRight((result, func) => func(result), argument);
};

const discount = compose(normalizePrice, divide100, multiply20);
console.log(discount(200.0));

const composeWithArgs = (...funtions) => funtions.reduceRight((func, general) => (...argument) => general(func(...argument)));



const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}
console.log(composeWithArgs(add1,addAll3)(1,2,3))  