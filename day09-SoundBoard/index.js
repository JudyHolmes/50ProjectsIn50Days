const ids = ['yeQv', 'huoYuanJia', 'yanHuaYiLeng', 'qingHuaCi', 'qianLiZhiWai', 'yangGuangZhaiNan', 'daoXiang', 'yeDeDiQiZhang']
const songs = ['夜曲', '霍元甲', '烟花易冷', '青花瓷', '千里之外', '阳光宅男', '稻香', '夜的第七章']

ids.forEach((id, idx) => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.innerText = songs[idx]
    document.querySelector('.buttons').appendChild(button)

    button.addEventListener('click', () => {
        playSong()
        
        document.getElementById(id).play()
    })
})

function playSong() {
    ids.forEach(song => {
        document.getElementById(song).pause()
        document.getElementById(song).currentTime = 0
    })
}