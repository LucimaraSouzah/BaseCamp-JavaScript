function numbers(a , b) {
    let num1 = a
    let num2 = b
    let soma = num1 + num2
    if (num1 == num2) {
        console.log(`Os números ${num1} e ${num2} são iguais. E a soma dos dois é ${soma} que é ` + maior(soma) + menor(soma))
    } else {
        console.log(`Os números ${num1} e ${num2} não são iguais. E a soma dos dois é ${soma} que é` + maior(soma) + menor(soma))
    }
}

function maior(soma) {
    let x; 
    if (soma < 10) {
        x = ' menor que 10 e'
    } else {
        x = ' maior que 10 e'
    }
    return x
}

function menor(soma) {
    let y; 
    if (soma < 20) {
        y = ' menor que 20.'
    } else {
        y = ' maior que 20.'
    }
    return y
}