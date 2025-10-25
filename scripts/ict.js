// Simple animation for feature cards on scroll
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');
    const steps = document.querySelectorAll('.step');

    // Animate feature cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 0.5s ease forwards`;
                entry.target.style.animationDelay = `${entry.target.dataset.delay || '0s'}`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // Set animation delays for staggered effect
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.dataset.delay = `${index * 0.2}s`;
        observer.observe(card);
    });

    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.dataset.delay = `${index * 0.3}s`;
        observer.observe(step);
    });

    // Form functionality
    const joinButtons = document.querySelectorAll('#joinButton, #joinButtonBottom');
    const joinForm = document.getElementById('joinForm');
    const onboardingForm = document.getElementById('onboardingForm');
    const formSuccess = document.getElementById('formSuccess');

    joinButtons.forEach(button => {
        button.addEventListener('click', function () {
            // First show the form
            joinForm.classList.add('active');
            formSuccess.classList.remove('active');

            // Then scroll to it after a small delay to ensure it's visible
            setTimeout(() => {
                window.scrollTo({
                    top: joinForm.offsetTop - 100,
                    behavior: 'smooth'
                });
            }, 50);
        });
    });

    onboardingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // In a real application, you would send this data to a server
        // For this example, we'll just show the success message

        joinForm.classList.remove('active');
        formSuccess.classList.add('active');

        // Reset form
        onboardingForm.reset();
    });

    // Update hero background to show a Nigerian studying
    const heroBackground = document.querySelector('.hero .hero-background');
    heroBackground.style.backgroundImage = "url('https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')";
});