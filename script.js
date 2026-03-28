// Pinata functionality
let clickCount = 0;
function shakePinata() {
    const pinata = document.getElementById('pinata');
    pinata.classList.add('shake');
    setTimeout(() => pinata.classList.remove('shake'), 500);
    clickCount++;
    if (clickCount >= 10) {
        document.getElementById('pinata-container').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        // Simple confetti effect
        createConfetti();
    }
}

function createConfetti() {
    const colors = ['red', 'yellow', 'green', 'blue', 'orange', 'purple'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
        setTimeout(() => document.body.removeChild(confetti), 3000);
    }
}

// Slideshow
document.addEventListener('DOMContentLoaded', function() {
    const slideshowTrack = document.querySelector('.toys-slideshow .slideshow-track');
    if (slideshowTrack) {
        const slides = slideshowTrack.querySelectorAll('.slide');
        let trackIndex = 0;
        setInterval(() => {
            trackIndex = (trackIndex + 1) % slides.length;
            slideshowTrack.style.transform = `translateX(-${trackIndex * 100}%)`;
        }, 3000);
    }
});

// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\(\d{1}\)\s?)?\d{3}-\d{3}-\d{4}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email');
        e.preventDefault();
    }
    if (!phoneRegex.test(phone)) {
        alert('Invalid phone number');
        e.preventDefault();
    }
    // reCAPTCHA check would go here
});