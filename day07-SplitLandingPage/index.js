const container = document.querySelector('.container')

const leftBox = document.querySelector('.split.left')
const rightBox = document.querySelector('.split.right')

console.log(leftBox)
console.log(rightBox)

leftBox.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
})
leftBox.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})

rightBox.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
})
rightBox.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})