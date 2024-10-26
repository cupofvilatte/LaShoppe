const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const wayfinder = document.getElementById('wayfinder');
    const mobileNav = document.getElementById('mobile-nav');

    wayfinder.addEventListener('click', () => {
        // Toggle the display of the navigation
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });