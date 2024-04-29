import {bankListContainer, numberOfBanks, allDays, allTypes} from "./variables.js"
import { banks } from "./constructor.js"
import { createList } from "./banks-list-UI.js"


let filterParams = {
    bankDay: allDays,
    bankType: allTypes
}

function setFilter(filter, value) {
    updateFilterParam(filter, value)
    let filteredBanks = applyFilter()
    numberOfBanks.textContent = filteredBanks.length
    createList(filteredBanks, bankListContainer)
}

function updateFilterParam(filter, value) {
    filterParams = {
        ...filterParams,
        [filter]: value
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

export {setFilter}