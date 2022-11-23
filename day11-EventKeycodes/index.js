const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e)=>{
    /* keycode已弃用，直接使用key == ''方法或code方法，此处为对比展示 */
    insert.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>`
})