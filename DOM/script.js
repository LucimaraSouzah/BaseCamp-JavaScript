// DOM = padrão de como acessar e modificar os elementos HTML de uma página

// document.createElement (cria)
// document.removeChild (remove)   
// document.appendChild (adiciona)
// document.replaceChild (substitui)

// let elemento = 'banana'
// elemento.classList.add('')
// elemento.classList.remove('')
// elemento.classList.toggle('')
// document.getElementsByName('elemento').style.color = 'red'

// EVENTOS
// mouseover (quando o mouse passa) / mouseout (quando sai)
// click, dbclick (doble click)
// change / load (enquanto carrega)

// elemento.addEventListener('click', outrafuncao())

function darkMode() {
    document.getElementById('body').classList.toggle('darkmode')
    document.getElementById('text').classList.toggle('darkmodeText')
    document.getElementById('button').classList.toggle('darkmodeButton')
    if (body.classList.contains('darkmode')) {
        document.getElementById('text').innerHTML = 'Dark Mode ON'
        document.getElementById('button').innerHTML = 'Light mode'
    } else {
        document.getElementById('text').innerHTML = 'Light Mode ON'
        document.getElementById('button').innerHTML = 'Dark mode'
    }
    
}

button.addEventListener('click', darkMode)