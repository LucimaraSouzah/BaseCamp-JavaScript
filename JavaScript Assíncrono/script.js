// Assincrono = não ocorre ou não se efetiva ao mesmo tempo
// Promises = .then() ou .catch()  {
//     três estados = [
//         Pending
//         Fulfilled
//         Reject
//     ]
// } // 
// Estrutura const myPromise = new Promise((resolve, reject)) => { window.setTimeOut(()=> { resolve(console.log('Resolvida'))}, 2000)})
// Async e Await
// API = Application Programming Interface é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end
// Fetch = retorna uma promisse, usa await


const catBtn = document.getElementById('change-cat')
const url = 'https://thatcopy.pw/catapi/rest/'

const getCats = async () => {
    try {
        const data = await fetch(url)
        const json = await data.json()
        return json.webpurl
    } catch(e) {
        console.log(e.message)
    }
}

const loadImg = async() => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg)

loadImg()