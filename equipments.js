
function add_to_basket(event) {
    var itemContainer = event.target.closest('.equipment-footer');
    if (!itemContainer) {
        console.error("Item container not found");
        return;
    }

    var itemName = itemContainer.querySelector('.product-name').innerText;
    var itemPrice = parseFloat(itemContainer.querySelector('.price').innerText.replace('£', '').trim());
    var itemImageSrc = itemContainer.parentNode.querySelector('img').src; 

    console.log(itemName, itemPrice, itemImageSrc); 

    if (typeof(Storage) !== "undefined") {
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.push({ name: itemName, price: itemPrice, imageSrc: itemImageSrc });
        localStorage.setItem('basketItems', JSON.stringify(basketItems));

        showSuccessMessage("Item added to basket!");
    } else {
        showErrorMessage("Item could not be added to basket.");
    }
}


function showSuccessMessage(message) {
    var toast = document.querySelector('.message-box');
    toast.textContent = message;
    toast.style.display = 'block';
  
    setTimeout(function() {
      toast.style.display = 'none';
    }, 3000);
}
    
  
function showErrorMessage(message) {
    var toast = document.querySelector('.message-box2');
    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(function() {
        toast.style.display = 'none';
    }, 3000);
}
  