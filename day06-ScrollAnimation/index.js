const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showbox)

showbox()

function showbox() {
    // 计算结果如何得出？
    const windowHeight = window.innerHeight / 5 * 4

    boxes.forEach(item => {
        const boxTop = item.getBoundingClientRect().top

        if (boxTop < windowHeight) {
            item.classList.add('show')
        } else {
            item.classList.remove('show')
        }
    })
}