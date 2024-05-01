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
        <p>${bank.type}</p>
        <p>${bank.days}</p>
        <a href="https://www.google.com/maps?saddr=My+Location&daddr=${bank.coords.lat},${bank.coords.lng}" target="_blank">Directions</a>
    `
}

export {addMarkers, markers}