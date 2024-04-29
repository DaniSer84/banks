import { addExtra} from "./modules/banks-list-UI.js"
import { banks } from "./modules/constructor.js"
import {titleDay, titleType, ulExtra, addButton, nameInput, addressInput, bankDays, bankTypes} from "./modules/variables.js"
import { setFilter } from "./modules/filters.js"

banks.sort((a, b) => a.name.localeCompare(b.name))



// ******* FUNCTIONS ************



// console.log(Object.values(bankDays)[0])

// console.log(applyFilter(day, type))

let daysBtnList = document.querySelector('#days-btn-list')
let typesBtnList = document.querySelector('#type-btn-list')
let daysButtons = Array.from(daysBtnList.querySelectorAll('a'))
let typesButtons = Array.from(typesBtnList.querySelectorAll('a'))

daysBtnList.addEventListener('click', (e) => {
    // console.log(e.target)
    let pressedButton = e.target.closest('a')
    if (pressedButton) {
        pressedButton.classList.add('active')
        let otherButtons = daysButtons.filter(button => button !== pressedButton)
        otherButtons.forEach(button => button.classList.remove('active'))
        let day = Object.values(bankDays)[daysButtons.indexOf(pressedButton)]
        setFilter('bankDay', day)
        titleDay.textContent = pressedButton.innerText
    } 
})
typesBtnList.addEventListener('click', (e) => {
    // console.log(e.target)
    let pressedButton = e.target.closest('a')
    if (pressedButton) {
        pressedButton.classList.add('active')
        let otherButtons = typesButtons.filter(button => button !== pressedButton)
        otherButtons.forEach(button => button.classList.remove('active'))
        let type = Object.values(bankTypes)[typesButtons.indexOf(pressedButton)]
        setFilter('bankType', type)
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

// let selectMorning = function(array) {
//     let morning = []
//     for (let bank of array) {
//         if (bank.type == 'Cont-M' || bank.type == 'CmRp' || bank.type == 'Cont-P') {
//             morning.push(bank)
//         }
//     }
//     morning.sort((a, b) => a.orderM - b.orderM)
//     createList(morning, bankListContainer)
//     scegli.remove()
// }

// let selectEvening = function(array) {
//     let evening = []
//     for (let bank of array) {
//         if (bank.type == 'Cont-P' || bank.type == 'R' || bank.type == 'CmRp') {
//             evening.push(bank)
//         }
//     }
//     createList(evening, bankListContainer)
//     scegli.remove()
// }

// // ***************************************************************

// // *********** ARRAYS ************+

// let monday = []
// for (let bank of banks) {
//     if (bank.days == 'L-V' || bank.days == 'L/M/V' || bank.days == 'Lun e Gio' || bank.days == 'Lun e Mer') {
//         monday.push(bank)
//     }
// }

// let tuesday = []
// for (let bank of banks) {
//     if (bank.days == 'L-V' || bank.days == 'Mar' || bank.days == 'Mar e Gio') {
//         tuesday.push(bank)
//     }
// }

// let wednesday = []
// for (let bank of banks) {
//     if (bank.days == 'L-V' || bank.days == 'Mer' || bank.days == 'L/M/V' || bank.days == 'Lun e Mer') {
//         wednesday.push(bank)
//     }
// }

// let thursday = []
// for (let bank of banks) {
//     if (bank.days == 'L-V' || bank.days == 'Mar e Gio' || bank.days == 'Lun e Gio') {
//         thursday.push(bank)
//     }
// }

// let friday = []
// for (let bank of banks) {
//     if (bank.days == 'L-V' || bank.days == 'L/M/V') {
//         friday.push(bank)
//     }
// }




// let btn1 = document.querySelector('#btn-1')
// let btn2 = document.querySelector('#btn-2')
// let btn3 = document.querySelector('#btn-3')
// let btn4 = document.querySelector('#btn-4')
// let btn5 = document.querySelector('#btn-5')

// let tutteButton = document.querySelector('#tutte-btn')

// // btn1.addEventListener('click', () => {
// //         selectMorning(monday) 
// //         weekDay.textContent = 'Lunedì mattina'
// // })
// // btn2.addEventListener('click', () => {
// //         selectMorning(tuesday)
// //         weekDay.textContent = 'Martedì mattina'
// // })
// // btn3.addEventListener('click', () => {
// //         selectMorning(wednesday)
// //         weekDay.textContent = 'Mercoledì mattina'
// // })
// // btn4.addEventListener('click', () => {
// //         selectMorning(thursday)
// //         weekDay.textContent = 'Giovedì mattina'
// // })
// // btn5.addEventListener('click', () => {
// //     selectMorning(friday)
// //     weekDay.textContent = 'Venerdì mattina'
// // })



// let btn1p = document.querySelector('#btn-1p')
// let btn2p = document.querySelector('#btn-2p')
// let btn3p = document.querySelector('#btn-3p')
// let btn4p = document.querySelector('#btn-4p')
// let btn5p = document.querySelector('#btn-5p')

// // btn1p.addEventListener('click', () => {
// //     selectEvening(monday) 
// //     weekDay.textContent = 'Lunedì pomeriggio'
// // })
// // btn2p.addEventListener('click', () => {
// //     selectEvening(tuesday)
// //     weekDay.textContent = 'Martedì pomeriggio'
// // })
// // btn3p.addEventListener('click', () => {
// //     selectEvening(wednesday)
// //     weekDay.textContent = 'Mercoledì pomeriggio'
// // })
// // btn4p.addEventListener('click', () => {
// //     selectEvening(thursday)
// //     weekDay.textContent = 'Giovedì pomeriggio'
// // })
// // btn5p.addEventListener('click', () => {
// // selectEvening(friday)
// // weekDay.textContent = 'Venerdì pomeriggio'
// // })


// // tutteButton.addEventListener('click', () => {
// //     createList(banks, bankListContainer)
// //     scegli.remove()
// //     weekDay.textContent = 'Tutte'
// // })


