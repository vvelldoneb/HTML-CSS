// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            const quantityInput = document.getElementById(`quantity-${id}`);
            const quantity = quantityInput.value;
            window.location.href = `product-profile.html?id=${id}&quantity=${quantity}`;
        });
    });
});
document.querySelector('.buy-button').addEventListener('click', () => {
    alert('Item added to cart!');
});
function addToCart() {
    const productName = "Living Kit";
    const quantity = document.getElementById('quantity1').value;
    window.location.href = `form-page.html?product=${productName}&quantity=${quantity}`;
}
