import { addExtra} from "./modules/banks-list-UI.js"
import { banks } from "./modules/constructor.js"
import {titleDay, titleType, ulExtra, addButton, nameInput, addressInput, bankDays, bankTypes, bankListContainer} from "./modules/variables.js"
import { setFilter, daysButtons, typesButtons, daysBtnList, typesBtnList, changeToAlphabeticOrder, changeToDeliverOrden } from "./modules/filters.js"

banks.sort((a, b) => a.name.localeCompare(b.name))




// banks.forEach(bank => {
//     let string = bank.address.split(' ')
//     string.splice(0, 0, string[string.length-1])
//     string.pop()
//     let formattedAddress = string.join('+')

//      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}+Mi&key=AIzaSyBUqW5XdSX8-mV7FnY_yFvQZw-xmnAUi7I`)
//         .then(res => res.json())
//         .then(data => {
//             coords.push(data.results[0].geometry.location)
//         })
// })
// console.log(coords)


// ******* FUNCTIONS ************


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

export {daysButtons, typesButtons, deliverOrderBtn, alphaOrderBtn}

