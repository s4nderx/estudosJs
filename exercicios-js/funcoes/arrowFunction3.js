let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) // true
comparaComThis(this) // false

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) //true
comparaComThisArrow(this) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true

//use arrow functions!!!!