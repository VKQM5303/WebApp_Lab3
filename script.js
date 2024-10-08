document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-theme');
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        });
    }
});
