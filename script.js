const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    const hoverBox = card.querySelector('.hover-box');

    card.addEventListener('mouseenter', () => {
        gsap.to(card, { rotation: 360, duration: 1 });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotation: 0, duration: 1 });
    });
});
