 function showPopup() {
     document.getElementById("coupon-popup").style.display = "flex";
 }

 function closePopup() {
     document.getElementById("coupon-popup").style.display = "none";
 }

 function closePopup1() {
    document.getElementById("coupon-popup-signup").style.display = "none";
}

 function closeCouponCodePopup() {
     document.getElementById("coupon-code-popup").style.display = "none";
 }

 function showpopupsignup() {
    document.getElementById("coupon-popup-signup").style.display = "flex";
 }

 function submitEmail() {
     const email = document.getElementById("email").value;

     if (email) {
         document.getElementById("coupon-code-popup").style.display = "flex";
        
         closePopup();
     } else {
         alert("Please enter a valid ID.");     } }
 

 setTimeout(showPopup, 1000);

document.addEventListener('DOMContentLoaded', function() {
    console.log("Slideshow script loaded");

    function createSlideshow(sliderSelector) {
        const slider = document.querySelector(sliderSelector);
        const slides = slider.querySelectorAll('img');
        console.log(slides); 

        let currentIndex = 0;
        const totalSlides = slides.length;

        if (totalSlides === 0) {
            console.error(`No slides found for ${sliderSelector}`);
            return;
        }


        slides[currentIndex].style.opacity = '1';
        slides[currentIndex].style.visibility = 'visible';

    
        function nextSlide() {
        
            slides[currentIndex].style.opacity = '0';
            slides[currentIndex].style.visibility = 'hidden';

        
            currentIndex = (currentIndex + 1) % totalSlides;

         
            slides[currentIndex].style.opacity = '1';
            slides[currentIndex].style.visibility = 'visible';

            console.log(`Current Slide Index for ${sliderSelector}: ${currentIndex}`);
        }

        setInterval(nextSlide, 3000);
    }

    createSlideshow('.image-slider1');
    createSlideshow('.image-slider2');
    createSlideshow('.image-slider3');
});

