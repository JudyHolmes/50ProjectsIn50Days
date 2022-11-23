const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', ()=>{
        // 为什么这里不能用this：当函数作为方法调用时，this指向调用该方法的对象，当函数作为嵌套函数调用时，this指向全局对象（非严格模式下）或者undefined（严格模式）而不是其外包函数的上下文
        console.log(this)
        toggle.parentNode.classList.toggle('active')
    })
})