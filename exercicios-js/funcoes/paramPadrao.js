// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

//se passar 0 ele assume false e retorna 1
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//estrategia 2, 3 e 4 parar gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //b = *index do argumento na assinatura da funcao* in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 4), soma2(0, 0, 0))

//valor padrao do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 4), soma3(0, 0, 0))