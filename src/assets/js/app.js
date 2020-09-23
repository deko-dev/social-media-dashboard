function changeTheme() {

    const body = document.querySelector('body');

    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
    } else {
        body.classList.replace('dark', 'light');
    }

}