const quantityControls = document.querySelectorAll(".js-quantity-control");
console.log("hay " + quantityControls.length + " controles de cantidad");
const cartBtn = document.querySelector('a[href="#"] img[src*="carrito"]').parentElement;
const cartMenu = document.querySelector('aside');
const overlay = document.querySelector('.js-overlay');
const closeBtn = cartMenu.querySelector('button');

quantityControls.forEach(control => {
    let quantity = 0;
    let counterTimer = 0;
    const lessButton = control.querySelector(".js-button-less");
    const addButton = control.querySelector(".js-button-add");
    const quantityCountSpan = control.querySelector(".js-quantity-count span");

    function resetTimer() {
        clearTimeout(counterTimer);
        counterTimer = setTimeout(() => {
            if (quantity > 0) {
                control.dataset.state = "counting";
            } else {
                control.dataset.state = "default";
            }
        }, 2000);
    };

    control.addEventListener("click", (e) => {
        console.log("click en el control");
        control.dataset.state = "active";
        resetTimer();
        if (quantity === 0) {
            quantity = 1;
            if (quantityCountSpan) quantityCountSpan.textContent = quantity;
        }
    });

    addButton.addEventListener("click", (e) => {
        resetTimer();
        if (control.dataset.state === "active") {
            e.stopPropagation();
            console.log("click en el boton mas");
            quantity++;
            if (quantityCountSpan) quantityCountSpan.textContent = quantity;
        }
    });

    lessButton.addEventListener("click", (e) => {
        resetTimer();
        if (quantity > 0 && control.dataset.state === "active") {
            e.stopPropagation();
            console.log("click en el boton menos");
            quantity--;
            if (quantityCountSpan) quantityCountSpan.textContent = quantity;

            if (quantity === 0) {
                control.dataset.state = "default";
            }
        }
    });

});

const openCart = (e) => {
    e.preventDefault();
    cartMenu.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
};

const closeCart = () => {
    cartMenu.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = '';
};

cartBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);