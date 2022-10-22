const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

let timer = setInterval(loading, 30)

function loading() {
    load++
    if (load > 99) clearInterval(timer)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
}

// 算法来源-脱胎于数据归一化：https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}