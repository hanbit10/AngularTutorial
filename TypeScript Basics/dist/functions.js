"use strict";
//use can use ? for optional parameter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
//required parameter
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
const mult = function (num1, num2) {
    return num1 * num2;
};
//rest parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
function add3(...num_array) {
    return num_array.reduce((a, b) => a + b);
}
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(add2(2, 3, ...[4, 5, 6]));
console.log(add3(1, 2, 3));
console.log(concatString);
var ColorHair;
(function (ColorHair) {
    ColorHair[ColorHair["Red"] = 0] = "Red";
    ColorHair[ColorHair["Brown"] = 1] = "Brown";
    ColorHair[ColorHair["White"] = 2] = "White";
    ColorHair[ColorHair["Blond"] = 3] = "Blond";
    ColorHair[ColorHair["Black"] = 4] = "Black";
})(ColorHair || (ColorHair = {}));
let getHairColor = ColorHair.Red;
console.log(getHairColor);
//# sourceMappingURL=functions.js.map