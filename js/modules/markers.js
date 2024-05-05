import { bindInfoWindow } from "./map.js";

let markers = []

function addMarkers(map, banks) {
    markers.map(marker => marker.setMap(null))
    markers = []
    banks.forEach(bank => {

        let marker = new google.maps.Marker({
            position:  bank.coords,
            map,
          });

        bindInfoWindow(marker, createMarkerDetails(bank))
        markers.push(marker)
    })
    return markers
}

function createMarkerDetails(bank) {
    return `
        <h3>${bank.name}</h3>
        <p>${bank.address}</p>
        <p><b>tipo</b>: ${bank.type}</p>
        <p><b>giorni</b>: ${bank.days}</p>
        <p>${bank.description}</p>
        <a href="https://www.google.com/maps?saddr=My+Location&daddr=${bank.coords.lat},${bank.coords.lng}" target="_blank">Naviga</a>
    `
}

// TODO: change markers z-index when clicked

export {addMarkers, markers}