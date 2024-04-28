function addBanks(container, bank) {
    let item = document.createElement('li')
    let bankName = document.createElement('h4')
    let bankAddress = document.createElement('span')
    let key = document.createElement('span')
    let infoButton = document.createElement('button')
    let hours = document.createElement('span')
    let closeButton = document.createElement('button')

    hours.innerHTML = `<strong>${bank.hours}</strong}`

    key.innerHTML = `<svg class="list-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
    </svg>`
    bankName.innerHTML = bank.name
    bankAddress.innerHTML = bank.address
    infoButton.innerHTML = `<svg class="list-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>`
    
    bankName.addEventListener('click', function() {
    bankName.classList.toggle('done')
    })

    closeButton.textContent = 'X'
    closeButton.classList.add('close-btn')

    closeButton.addEventListener('click', () => {
        item.remove()
        infoContainer.remove()
    })
    
    container.classList.add('container')
    container.append(item)
    item.append(bankName)
    item.append(bankAddress)
    item.append(hours)
    item.append(closeButton)
    
    if (bank.key == true) {
        item.append(key) 
    }
    item.append(infoButton)

    if (bank.type == 'CmRp') {
        item.classList.add('CmRp')
    } else if (bank.type == 'Cont-M') {
        item.classList.add('Cont-M')
    } else if (bank.type == 'Cont-P') {
        item.classList.add('Cont-P')
    } else if (bank.type == 'R') {
        item.classList.add('R')
    } else {
        item.classList.add('extra')
    }

    let infoContainer = document.createElement('div')
        infoContainer.classList.add('info')
        infoContainer.style.position = 'relative'
        let info = document.createElement('ul')

        let codice = document.createElement('li')
        let tipo = document.createElement('li')
        let giorni = document.createElement('li')
        let borsa = document.createElement('li')
        let indicazioni = document.createElement('li')
        let immagine = document.createElement('li')
        let mappa = document.createElement('li')
        let legenda = document.createElement('a')

        codice.innerHTML = `<strong>Codice</strong>: ${bank.code}`
        tipo.innerHTML = `<strong>Tipo</strong>: ${bank.type}`
        giorni.innerHTML = `<strong>Giorni</strong>: ${bank.days}`
        borsa.innerHTML = `<strong>Borsa</strong>: ${bank.bag}`
        indicazioni.innerHTML = `<strong>Indicazioni</strong>: ${bank.description}`
        immagine.innerHTML = `<strong>Foto</strong>: <img src="${bank.image}">`
        mappa.innerHTML = `<strong>GoogleMaps</strong>: <a href="${bank.map}" target="_blank">naviga</a>`
        legenda.textContent = 'legenda'
        legenda.href = '#legenda'
        legenda.classList.add('legend')

        infoContainer.append(info)
        info.append(codice)
        info.append(tipo)
        info.append(giorni)
        info.append(borsa)
        info.append(indicazioni)
        info.append(immagine)
        info.append(mappa)
        info.append(legenda)

        item.insertAdjacentElement('afterend', infoContainer)

    infoButton.addEventListener('click', () => {
        infoContainer.classList.toggle('info')
    } )
}

export {addBanks}