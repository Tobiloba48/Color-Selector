const input = document.querySelector('input')

input.addEventListener('input', function addColor() {
    value = input.value
    document.body.style.backgroundColor = value
})