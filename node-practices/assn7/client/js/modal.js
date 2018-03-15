const initModal = () => {
    document.querySelectorAll('.close, .button-action, .button-secondary').forEach(elem => {
        elem.onclick = () => {
            document.querySelector('.modal').classList.toggle('show')
        }
    })
}

initModal()

// This modal adds new posts into the array on click.
