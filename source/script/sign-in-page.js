document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    if (!username || !password) {
        errorDiv.textContent = 'Пожалуйста, заполните все поля';
    } else {
        errorDiv.textContent = '';

        alert('Форма успешно отправлена');
    }
});