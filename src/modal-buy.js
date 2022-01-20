(() => {
const refs = {
    openBuyBtn: document.querySelector('[data-buy-open]'),
    closeBuyBtn: document.querySelector('[data-buy-close]'),
    buy: document.querySelector('[data-buy]'),
};

refs.openBuyBtn.addEventListener('click', toggleBuy);
refs.closeBuyBtn.addEventListener('click', toggleBuy);

function toggleBuy() {
    refs.buy.classList.toggle('is-hidden');
}
})();