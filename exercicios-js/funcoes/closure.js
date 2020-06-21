//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a funcao acessa e manipular as variaveis externas a funcao

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x;
    }

    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao())