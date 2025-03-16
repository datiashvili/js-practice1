const img1 = document.querySelector('.img1')
console.log(img1)
img1.addEventListener('click', () => {
    img1.style.width = '100px'
})
const btn = document.querySelector('.btn')
console.log(btn)
btn.addEventListener('click', () => {
    img1.style.width = '500px'
})
const btn2 = document.querySelector('.btn2')
console.log(btn)
btn2.addEventListener('click', () => {
    img1.style.border = '6px solid skyblue'
    img1.style.borderRadius = '20px'
})
const btn3 = document.querySelector('.btn3')
console.log(btn3)
btn3.addEventListener('click', () => {
    img1.style.border = '0'
    img1.style.borderRadius = '0'

})