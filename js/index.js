const page = document.querySelector('#page');
const model1 = document.querySelector('#model-1');
const model2 = document.querySelector('#model-2');
const model3 = document.querySelector('#model-3');
const model4 = document.querySelector('#model-4');
const model = document.querySelector('#model');
const price = document.querySelector('#price');
const year = document.querySelector('#year');

model1.addEventListener('click', () => {
    page.style.backgroundImage = 'url(./imgs/img-1.jpg)'
    model.innerHTML = 'BMW X6 M'
    year.innerHTML = '2019'
    price.innerHTML = '110.00,00€'
})
model2.addEventListener('click', () => {
    page.style.backgroundImage = 'url(./imgs/img-2.jpg)'
    model.innerHTML = 'BMW I8'
    year.innerHTML = '2015'
    price.innerHTML = '127.500,00€'
})
model3.addEventListener('click', () => {
    page.style.backgroundImage = 'url(./imgs/img-3.jpg)'
    model.innerHTML = 'BMW M8'
    year.innerHTML = '2018'
    price.innerHTML = '147.000,00€'
})
model4.addEventListener('click', () => {
    page.style.backgroundImage = 'url(./imgs/img-4.jpg)'
    model.innerHTML = 'BMW M440I'
    year.innerHTML = '2016'
    price.innerHTML = '70.000,00€'
})
