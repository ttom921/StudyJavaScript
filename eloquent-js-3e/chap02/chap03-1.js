// let makeNoise = function(){
//     console.log("Pling");
// }
// makeNoise();

// const power = function (base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(power(2, 10));

// const hummus = function (factor) {
//     const ingredient = function (amount, uint, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${uint} ${name}`);
//     }
//     ingredient(1,"can","chickpeas");
//     ingredient(0.25,"cup","tahini");
// }
// hummus(1);

// 箭頭函數
// const square1 = (x) => { return x * x; };
// const square2 = x => x * x;

// closure閉包
function wrapValue(n) {
    let local = n;
    return () => local;
}

let warp1 = wrapValue(1);
let warp2 = wrapValue(2);
console.log(warp1());
// -> 1
console.log(warp2());
// -> 2
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
