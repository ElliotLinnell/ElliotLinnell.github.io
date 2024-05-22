document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleDarkModeButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    const grayedTexts = document.querySelectorAll('.grayed-text');

    grayedTexts.forEach((grayedText) => {
        grayedText.addEventListener('click', () => {
            const range = document.createRange();
            range.selectNode(grayedText);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            alert('Text copied to clipboard: ' + grayedText.innerText);
        });
    });
});
