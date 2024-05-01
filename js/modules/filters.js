import {bankListContainer, numberOfBanks, allDays, allTypes, titleType} from "./variables.js"
import { banks } from "./constructor.js"
import { createList } from "./banks-list-UI.js"
import { deliverOrderBtn, alphaOrderBtn } from "../banks.js"

let daysBtnList = document.querySelector('#days-btn-list')
let typesBtnList = document.querySelector('#type-btn-list')
let daysButtons = Array.from(daysBtnList.querySelectorAll('a'))
let typesButtons = Array.from(typesBtnList.querySelectorAll('a'))


let filterParams = {
    bankDay: allDays,
    bankType: allTypes
}

let orderParams = {
    day: '',
    type: ''
}

let filteredBanks = []

function setFilter(filter, value, key, string) {
    updateFilterParam(filter, value)
    updateOrderParams(key, string)
    filteredBanks = applyFilter()
    numberOfBanks.textContent = filteredBanks.length
    if (orderParams.day !== '' & orderParams.day !== 'Tutte') {
        if (orderParams.type === 'Mattina') {
           filteredBanks.sort((a, b) => a.orderM - b.orderM)
           switchClassActiveBtn(deliverOrderBtn, alphaOrderBtn) 
           deliverOrderBtn.removeAttribute('disabled')
        } else if (orderParams.type === 'Pomeriggio') {
            filteredBanks.sort((a, b) => a.orderE - b.orderE)
            switchClassActiveBtn(deliverOrderBtn, alphaOrderBtn)
            deliverOrderBtn.removeAttribute('disabled')
        } else {
            switchClassActiveBtn(alphaOrderBtn, deliverOrderBtn)
            deliverOrderBtn.setAttribute('disabled', '')
        }
    }  else {
        filteredBanks.sort((a, b) => a.name.localeCompare(b.name))
        switchClassActiveBtn(alphaOrderBtn, deliverOrderBtn)
        deliverOrderBtn.setAttribute('disabled', '')
    }
    createList(filteredBanks, bankListContainer)
    return filteredBanks
}

function changeToAlphabeticOrder() {
    filteredBanks.sort((a, b) => a.name.localeCompare(b.name))
    switchClassActiveBtn(alphaOrderBtn, deliverOrderBtn)
    createList(filteredBanks, bankListContainer)
}

function changeToDeliverOrden() {
    if (titleType.innerText === 'Mattina') {
        filteredBanks.sort((a, b) => a.orderM - b.orderM)
    } if (titleType.innerText === 'Pomeriggio') {
        filteredBanks.sort((a, b) => a.orderE - b.orderE)
    }
    switchClassActiveBtn(deliverOrderBtn, alphaOrderBtn)
    createList(filteredBanks, bankListContainer)
}

function switchClassActiveBtn(btn1, btn2) {
    btn1.classList.add('order-btn-active')
    btn2.classList.remove('order-btn-active')
}

function updateFilterParam(filter, value) {
    filterParams = {
        ...filterParams,
        [filter]: value
    }
}

function updateOrderParams(key, string) {
    orderParams = {
        ...orderParams,
        [key]: string
    }
}

function applyFilter() {
    let filteredBanks = banks
    // filtro per giorno
    if (filterParams.bankDay !== allDays) {
        filteredBanks = filteredBanks.filter(bank => filterParams.bankDay.includes(bank.days))
    }
    // filtro per tipo
    if (filterParams.bankType !== allTypes) {
        filteredBanks = filteredBanks.filter(bank => filterParams.bankType.includes(bank.type))
    }
    return filteredBanks
}


export {setFilter, changeToAlphabeticOrder, changeToDeliverOrden, daysButtons, typesButtons, daysBtnList, typesBtnList}