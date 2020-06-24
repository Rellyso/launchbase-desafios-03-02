const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const siteID = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${siteID}`
        modal.querySelector('.max-modal').classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
    minimizeModal()
    modal.querySelector('.max-modal').classList.remove('active')
})

modal.querySelector('.max-modal').addEventListener('click', function () {
    if (modal.classList.contains('maximize')) {
        minimizeModal()
    } else {
        maximizeModal()
    }
})


function maximizeModal() {
    modal.classList.add('maximize')
    modal.querySelector('.max-modal i#minimize').classList.add('active')
    modal.querySelector('.max-modal i#maximize').classList.remove('active')
}

function minimizeModal() {
    modal.classList.remove('maximize')
    modal.querySelector('.max-modal i#maximize').classList.add('active')
    modal.querySelector('.max-modal i#minimize').classList.remove('active')
}