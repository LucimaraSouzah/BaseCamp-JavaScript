// MAP
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
number.map((item) => console.log(item * 2))

// FILTER
function filtraPares(array) {
    return array.filter(callback)
}

function callback(item) {
    return item % 2 == 0
}

console.log(filtraPares(number))


// REDUCE
function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2, 3, 4, 10]

console.log(somaNumeros(arr))

// 

const lista = [
    {
        name: 'sabão em pó',
        preço: 30
    },
    {
        name: 'cereal', 
        preço: 12
    },
    {
        name:'toalha',
        preço: 30
    }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preço
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))