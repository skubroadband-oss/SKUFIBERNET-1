// WhatsApp Integration
function sendWhatsApp(plan) {
    const phone = "919100704026";
    let msg = `Hi, I am interested in ${plan}. Please contact me.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Scroll Animations
window.addEventListener('scroll', () => {
    // Add logic for navbar transition
});