document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', String(!pressed));

            // Toggle the theme class on the body
            document.body.classList.toggle('dark-theme');
        });
    }
});
