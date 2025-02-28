function showPopup() {
    document.getElementById("coupon-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("coupon-popup").style.display = "none";
}

function closeCouponCodePopup() {
    document.getElementById("coupon-code-popup").style.display = "none";
}

function submitEmail() {
    const email = document.getElementById("email").value;

    if (email) {
       
        document.getElementById("coupon-code-popup").style.display = "flex";

        closePopup();
    } else {
        alert("Please enter a valid ID.");     } }

