(() => {
const refs = {
    openReadBtn: document.querySelector('[data-read-open]'),
    closeReadBtn: document.querySelector('[data-read-close]'),
    read: document.querySelector('[data-read]'),
};

refs.openReadBtn.addEventListener('click', toggleRead);
refs.closeReadBtn.addEventListener('click', toggleRead);

function toggleRead() {
    refs.read.classList.toggle('is-hidden');
}
})();