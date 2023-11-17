const links = document.querySelectorAll(".menu-item > a");
const productButtons = document.getElementsByClassName('product-button');
const burger = document.getElementById('burger');
const name_ = document.getElementById('name');
const phone = document.getElementById('phone');

function menuNavBar(links) {
    for (let link of links) {
        link.onclick = () => {
            document.getElementById(link.getAttribute('data-link')).scrollIntoView({ behavior: "smooth" });
        }
    };
}

function buttonBehavior(productButtons) {
    for (let button of productButtons) {
        button.onclick = () => {
            document.getElementById('order').scrollIntoView({ behavior: "smooth" });
        }
    };
}

menuNavBar(links);
buttonBehavior(productButtons);

document.getElementById('main-action-button').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: "smooth" })
});

const actionButton = document.querySelector('#order-action').onclick = () => {
    let hasError = false;
    [burger, name_, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });

    if (!hasError) {
        [burger, name_, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
    }
}

let prices = document.getElementsByClassName('products-item-price');
document.getElementById('change-currency').onclick = (e) => {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let k = 1;
    if (currentCurrency === '$') {
        newCurrency = '₽';
        k = 80;
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        k = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        k = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        k = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let price of prices) {
        price.innerText = +(price.getAttribute('data-base-price') * k).toFixed(1) + " " + newCurrency;
    }
}