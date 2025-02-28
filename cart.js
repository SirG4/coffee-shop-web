function clearAll() {
    localStorage.removeItem('basketItems'); 
    updateBasketDisplay(); 
}

function updateBasketDisplay() {
    var basketItemsContainer = document.getElementById('cart-items');
    var totalContainer = document.getElementById('subtotal'); 

    basketItemsContainer.innerHTML = ''; 

    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    
    var totalPrice = 0;

    basketItems.forEach(function(item, index) {
        var itemRow = document.createElement('tr'); 
        itemRow.innerHTML = `
            <td>
                <button class="remove-item" onclick="removeItem(${index})" aria-label="Remove ${item.name}">
                    &#10005; <!-- Cross sign (X) -->
                </button>
                <img src="${item.imageSrc}" alt="${item.name}" class="cart-item-image">
                ${item.name}
            </td>
            <td>1</td> 
            <td class="price">£${parseFloat(item.price).toFixed(2)}</td>
        `;
        basketItemsContainer.appendChild(itemRow);

        totalPrice += parseFloat(item.price); 
    });
    
    totalContainer.textContent = `£${totalPrice.toFixed(2)}`; 
}


function removeItem(index) {
    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    basketItems.splice(index, 1); 
    localStorage.setItem('basketItems', JSON.stringify(basketItems)); 
    updateBasketDisplay(); 
}

window.onload = function() {
    updateBasketDisplay();
};
