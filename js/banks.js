import { addExtra} from "./modules/banks-list-UI.js"
import { banks } from "./modules/constructor.js"
import {titleDay, titleType, ulExtra, addButton, nameInput, addressInput, bankDays, bankTypes, bankListContainer} from "./modules/variables.js"
import { setFilter, daysButtons, typesButtons, daysBtnList, typesBtnList, changeToAlphabeticOrder, changeToDeliverOrden } from "./modules/filters.js"
import { initMap } from "./modules/map.js"

banks.sort((a, b) => a.name.localeCompare(b.name))


// ******* FUNCTIONS ************
window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
}

initMap()


daysBtnList.addEventListener('click', (e) => {
    // console.log(e.target)
    let pressedButton = e.target.closest('a')
    if (pressedButton) {
        pressedButton.classList.add('active')
        let otherButtons = daysButtons.filter(button => button !== pressedButton)
        otherButtons.forEach(button => button.classList.remove('active'))
        let day = Object.values(bankDays)[daysButtons.indexOf(pressedButton)]
        setFilter('bankDay', day, 'day', pressedButton.innerText)
        titleDay.textContent = pressedButton.innerText
    } 
})

typesBtnList.addEventListener('click', (e) => {
    let pressedButton = e.target.closest('a')
    if (pressedButton) {
        pressedButton.classList.add('active')
        let otherButtons = typesButtons.filter(button => button !== pressedButton)
        otherButtons.forEach(button => button.classList.remove('active'))
        let type = Object.values(bankTypes)[typesButtons.indexOf(pressedButton)]
        setFilter('bankType', type, 'type', pressedButton.innerText)
        titleType.textContent = pressedButton.innerText
    } 
})

let titlesContainer = document.querySelector('#titles-container')
let showMapButton = document.querySelector('.map-btn') 
let mapContainer = document.querySelector('.map-container')
let showXBtn = document.querySelector('#show-X-btn')
showMapButton.addEventListener('click', () => {
    mapContainer.classList.toggle('show')
    bankListContainer.classList.toggle('bank-list-on-map')
    titlesContainer.classList.toggle('titles-on-map')
    showXBtn.classList.toggle('hide')
    showMapButton.classList.toggle('active')
    ulExtra.classList.remove('extra-list-container-on-map')
    showXBtn.classList.remove('show-X-btn-active')
}
)

addButton.addEventListener('click', () => {
    let name = nameInput.value
    let address = addressInput.value
    addExtra(name, address, ulExtra)
    nameInput.value = ''
    addressInput.value = ''
})

let alphaOrderBtn = document.querySelector('#alpha-order')
alphaOrderBtn.addEventListener('click', () => changeToAlphabeticOrder()
)

let deliverOrderBtn = document.querySelector('#deliver-order')
deliverOrderBtn.addEventListener('click', () => changeToDeliverOrden())

let deleteListBtn = document.querySelector('.delete-list-btn')
deleteListBtn.addEventListener('click', () => location.reload())

showXBtn.addEventListener('click', () => {
    ulExtra.classList.toggle('extra-list-container-on-map')
    showXBtn.classList.toggle('show-X-btn-active')
})

export {banks, daysButtons, typesButtons, deliverOrderBtn, alphaOrderBtn}

