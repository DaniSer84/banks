let bankListContainer = document.querySelector('#bank-list-container')
let titleDay = document.querySelector('#title-day')
let titleType = document.querySelector('#title-type')
let numberOfBanks = document.querySelector('#number-of-banks')
let ulExtra = document.querySelector('#extra')
let addButton = document.querySelector('#add-btn')
let nameInput = document.querySelector('#nome')
let addressInput = document.querySelector('#indirizzo')

let bankTypes = {
    all: ['Cont-M', 'CmRp', 'Cont-P', 'Cont-P', 'R', '', 'Extra'],
    morning: ['Cont-M', 'CmRp'],
    evening: ['Cont-P', 'CmRp', 'R'],
    contestuali: ['Cont-M', 'Cont-P'],
    ConsegnaRitiro: ['CmRp'],
    soloRitiro: ['R'],
    extra: ['Extra']
}

let bankDays = {
    all: ['L-V', 'L/M/V', 'Lun e Gio', 'Lun e Mer', 'Mar', 'Mar e Gio', 'Mer', ''],
    monday: ['L-V', 'L/M/V', 'Lun e Gio', 'Lun e Mer'],
    tuesday: ['L-V', 'Mar', 'Mar e Gio'],
    wednesday: ['L-V', 'L/M/V', 'Lun e Mer', 'Mer'],
    thursday: ['L-V', 'Lun e Gio', 'Mar e Gio'],
    friday: ['L-V', 'L/M/V']
}

let allDays = bankDays.all
let allTypes = bankTypes.all



export {bankListContainer, titleDay, titleType, numberOfBanks, ulExtra, addButton, nameInput, addressInput, bankDays, bankTypes, allDays, allTypes}