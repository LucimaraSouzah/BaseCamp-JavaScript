// ECMAScript Error = erros que ocorrem em tempo de execução
// DOMException = erros relacionados ao DOM

// throw = retorna um erro enquanto que RETURN retorna uma string ou coisa do tipo
// try catch = verificar se um pedaço do código tem algum erro e manipular o erro
// finally = bloco para executar após o erro
// new Error = colocar o nome do erro e usar throw

function number(array, num) {
    try {
        if (!array && !num) throw new ReferenceError('Envie os parâmetros')
        if (typeof array !== 'object') throw new TypeError('Tipo não correspondente')
        if (typeof num !== 'number') throw new TypeError('Tipo não correspondente')
        if (array.length !== num) throw new RangeError('Tamanho não correspondente')
        return array
    } catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError')
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado" + e)
        }

    }
}

console.log(number([1,2,3], 3))