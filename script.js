const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: 0, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: 0, src: './img/xbacon.png' },
    { name: 'Bacon Egg', price: 39, vegan: 0, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: 0, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: 1, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: 1, src: './img/monstruoso-vegan.png' },
]


const list = document.querySelector('section')
const total1 = document.querySelector('h1')
let mylist = ''
let myoff = ''
let myvegan1 = ''

//const producto1 = { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' }

    

menuOptions.forEach(item => {
    mylist = mylist + `
        <div>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p id = "p1">R$ ${item.price.toFixed(2)} </p>
        </div>
        `

})
function menu() {
    if (true) { list.innerHTML = mylist; total1.innerHTML = '' }

}

const valoroff = menuOptions.map(value1 => {
    value1.price = value1.price - (value1.price / 10)

    return value1
})
valoroff.forEach(item => {
    myoff = myoff + `
    <div>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p id = "p1">R$ ${item.price.toFixed(2)} </p>
    </div>
    `
})
function off() {

    if (true) { list.innerHTML = myoff; total1.innerHTML = '' }
}

const mytotal = menuOptions.reduce((value, item) => {
    return value + item.price
}, 0)


function todo() {
    if (true) {
        total1.innerHTML = `
    <div id ="box-1">O Valor Total Com Desconto È <br> R$ ${mytotal.toFixed(2)}</div>
    `

    }
}

const myvegan = menuOptions.filter(vegano => vegano.vegan > 0)

const myVegans = myvegan.forEach(item => {
    myvegan1 = myvegan1 + `
    <div>
        <img src=${item.src}>
        <p>${item.name}</p>
        <p id = "p1">R$ ${item.price.toFixed(2)} </p>
    </div>
    `
})


function vegan1() {
    if (true) { list.innerHTML = myvegan1; total1.innerHTML = '' }
}



