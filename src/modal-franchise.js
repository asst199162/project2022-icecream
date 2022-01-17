(() => {
const refs = {
    openPriceBtn: document.querySelector('[data-price-open]'),
    closePriceBtn: document.querySelector('[data-price-close]'),
    price: document.querySelector('[data-price]'),
};

refs.openPriceBtn.addEventListener('click', togglePrice);
refs.closePriceBtn.addEventListener('click', togglePrice);

function togglePrice() {
    refs.price.classList.toggle('is-hidden');
}
})();