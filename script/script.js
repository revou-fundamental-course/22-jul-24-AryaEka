document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth;
    let index = 0;

    function nextSlide() {
        index++;
        slides.style.transition = 'transform 1s ease';
        slides.style.transform = `translateX(${-index * slideWidth}px)`;

        if (index === slideCount - 1) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.transform = 'translateX(0)';
                index = 0;
            }, 1000); // Match this duration with the transition duration
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function validateForm() {
    // Get the form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var destination = document.getElementById("destination").value;

    // Check if all fields are filled
    if (name && email && destination) {
        // Show success alert
        alert("Form submitted successfully!");
        return true; // Form is valid
    } else {
        // Alert if form is not complete (though required fields will catch most cases)
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }
}

function showAlert(productName, price) {
    alert(`Kamu Membeli ${productName} Dengan Harga ${price}.`);
}

function performAction() {
    // Show the loading spinner
    document.getElementById('loading').style.display = 'block';
    document.getElementById('cta-button').disabled = true;

    // Simulate a delay (e.g., a network request)
    setTimeout(function() {
        // Hide the loading spinner
        document.getElementById('loading').style.display = 'none';
        document.getElementById('cta-button').disabled = false;

        // Show an alert
        alert('Your action has been completed!');
    }, 2000); // 2 seconds delay
}

