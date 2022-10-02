const prev = document.getElementById('prev')
const next = document.getElementById('next')
const stripe = document.querySelector('.stripe')
const steps = document.querySelectorAll('.step')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    update()
})

function update() {
    steps.forEach((item, idx) => {
        if (idx < currentActive) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    }) 

    const actives = document.querySelectorAll('.active')

    stripe.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === steps.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}