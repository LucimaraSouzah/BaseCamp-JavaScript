function substituiPares(a){
    if(!a.length) return false
    if(!a) return false
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            console.log('Você já é zero')
        } else if (a[i] % 2 === 0){
            console.log(`Substituindo ${a[i]} por 0.`)
            a[i] = 0
        } 
    }
    return a
}

let a = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituiPares(a))
