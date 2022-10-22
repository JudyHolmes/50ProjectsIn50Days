const panel = document.querySelectorAll('.panel')

panel.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        item.classList.add('active')
    })
})