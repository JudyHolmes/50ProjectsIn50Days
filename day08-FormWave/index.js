const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((item, idx) => `<span style="transition-delay:${idx * 50}ms">${item}</span>`)
        .join('')
})