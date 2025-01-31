import { markers} from "./markers.js";
import { bindInfoWindow, map } from "./map.js";
import {filteredBanks} from "./filters.js"
import config from "../../config.js";

let numberOfBanks = document.querySelector('#number-of-banks')

// *** CREATE BANK LIST ON DOM ***
function createList(array, container) {
    container.innerHTML = ''
    array.forEach(bank => {
        addBanks(container, bank)
    });
}

function addBanks(container, bank) {
    let item = document.createElement('li')
    item.classList.add(`${bank.type}`)
    let bankName = document.createElement('h4')
    let bankNumber =  filteredBanks.indexOf(bank)+1
    let marker = findMarker(markers, bank)
    let label = bankNumber.toString()
    marker.setLabel(label)
    let color = ['yellow', 'blue', 'green', 'red', 'orange']
    if (bank.type === 'CmRp') {
        marker.setIcon(`../../img/${color[0]}_dot.png`)
    } else if (bank.type === 'Cont-M') {
        marker.setIcon(`../../img/${color[1]}_dot.png`)
    } else if (bank.type === 'Cont-P') {
        marker.setIcon(`../../img/${color[4]}_dot.png`)
    } else if (bank.type === 'R') {
        marker.setIcon(`../../img/${color[2]}_dot.png`)
    } else {
        marker.setIcon(`../../img/${color[3]}_dot.png`)
    }
    bankName.innerHTML = bankNumber+'.'+bank.name
    let bankAddress = document.createElement('span')
    bankAddress.innerHTML = bank.address
    let pin = document.createElement('span')
    pin.innerHTML = `<i class="fa-solid fa-location-dot"></i>`
    let key = document.createElement('span')
    key.innerHTML = `<svg class="list-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
    </svg>`
    let infoButton = document.createElement('button')
    infoButton.innerHTML = `<svg class="list-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>`
    let hours = document.createElement('span')
    hours.innerHTML = `<strong>${bank.hours}</strong}`
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    deleteButton.classList.add('delete-btn')
    
    // EVENT LISTENERS
    pin.addEventListener('click', () => {
        map.setZoom(16)
        map.panTo(marker.getPosition())
    })
    deleteButton.addEventListener('click', () => {
        item.remove()
        infoContainer.remove()
        updateNumberOfBanks(numberOfBanks, -1)
        marker.setMap(null)
        map.panTo(markers[markers.indexOf(marker)+1].getPosition())
    })
    bankName.addEventListener('click', function() {
        bankName.classList.toggle('done')
        if (bankName.classList.contains('done')) {
            marker.setZIndex(9999)
        } else {
            marker.setZIndex(-999)
        }
    })
    infoButton.addEventListener('click', () => {
        infoContainer.classList.toggle('info')
    } )
    
    container.classList.add('container')
    container.append(item)

    item.append(bankName, bankAddress, hours, pin,deleteButton)
    if (bank.key) {
        item.append(key) 
    }
    item.append(infoButton)

    // CREATE INFO SECTION
    let infoContainer = document.createElement('div')
    infoContainer.classList.add('info')
    infoContainer.style.position = 'relative'
    let info = document.createElement('ul')
    let codice = document.createElement('li')
    codice.innerHTML = `<strong>Codice</strong>: ${bank.code}`
    let tipo = document.createElement('li')
    tipo.innerHTML = `<strong>Tipo</strong>: ${bank.type}`
    let giorni = document.createElement('li')
    giorni.innerHTML = `<strong>Giorni</strong>: ${bank.days}`
    let borsa = document.createElement('li')
    borsa.innerHTML = `<strong>Borsa</strong>: ${bank.bag}`
    let indicazioni = document.createElement('li')
    indicazioni.innerHTML = `<strong>Indicazioni</strong>: ${bank.description}`
    let immagine = document.createElement('li')
    immagine.innerHTML = `<strong>Foto</strong>: <img src="${bank.image}">`
    let mappa = document.createElement('li')
    mappa.innerHTML = `<strong>GoogleMaps</strong>: <a href="https://www.google.com/maps?saddr=My+Location&daddr=${bank.coords.lat},${bank.coords.lng}" target="_blank">Naviga</a>`
    let legenda = document.createElement('a')
    legenda.textContent = 'legenda'
    legenda.href = '#legenda'
    legenda.classList.add('legend')
    

    infoContainer.append(info)
    info.append(codice, tipo, giorni, borsa, indicazioni, immagine, mappa, legenda)
    item.insertAdjacentElement('afterend', infoContainer)
}

function addExtra(name, address, container) {

    let item = document.createElement('li')
    let bankName = document.createElement('h4')
    let bankAddress = document.createElement('span')
    let deleteButton = document.createElement('button')
    let pin = document.createElement('span')
    pin.innerHTML = `<i class="fa-solid fa-location-dot"></i>`
    
    bankName.innerHTML = name
    bankAddress.innerHTML = address
    item.classList.add('Extra')
    
    bankName.addEventListener('click', function() {
        bankName.classList.toggle('done')
    })

    let numberOfExtra = document.querySelector('#number-of-extra')
    updateNumberOfBanks(numberOfExtra, +1)
    
    deleteButton.textContent = 'X'
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener('click', () => {
        item.remove()
        updateNumberOfBanks(numberOfExtra, -1)
    })
    
    addMarkerForExtra(name, address, pin, deleteButton)
    
    container.append(item)
    item.append(bankName, bankAddress, pin, deleteButton)
}

// function updateNumberIfDeletedItem() {
//     numberOfBanks.textContent = parseInt(numberOfBanks.innerText)-1
// }

function updateNumberOfBanks(number, update) {
    number.textContent = parseInt(number.textContent) + update
}


function findMarker(markers, bank) {
    let marker = markers.find(marker => marker.getPosition().lat() === bank.coords.lat)
    return marker
}

function convertAddressToCoords(address) {
    let formattedAddress = address.split(' ').join('+')
    let coords = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress},+Milano&key=${config.API_KEY}`)
    .then(res => res.json())
    .then(data => data.results[0].geometry.location)

    return coords
}

async function addMarkerForExtra (name, address, btn, deleteBtn) {
    let coords = await convertAddressToCoords(address)
    let marker = await new google.maps.Marker({
        position: coords,
        map
    })
    marker.setIcon('../../img/red_dot.png')
    marker.setLabel('E')
    let details = `
    <h3>${name}</h3>
    <p>${address}</p>
    <a href="https://www.google.com/maps?saddr=My+Location&daddr=${coords.lat},${coords.lng}" target="_blank">Naviga</a>
    `
    bindInfoWindow(marker, details)

    btn.addEventListener('click', () => {
        map.setZoom(16)
        map.panTo(coords)
    })
    deleteBtn.addEventListener('click', () => marker.setMap(null))
}

export {createList, addExtra}