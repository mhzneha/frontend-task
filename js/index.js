document.addEventListener('DOMContentLoaded', function() {
    const testimonialLinks = document.querySelectorAll('.client-list');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 2;
    const totalTestimonials = testimonialLinks.length;

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    updateDots();
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        const nextTab = new bootstrap.Tab(testimonialLinks[currentIndex]);
        nextTab.show();
        updateDots();
    });

    testimonialLinks.forEach((link, index) => {
        link.addEventListener('click', function() {
            currentIndex = index;
            updateDots();
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            const tab = new bootstrap.Tab(testimonialLinks[currentIndex]);
            tab.show();
            updateDots();
        });
    });
});