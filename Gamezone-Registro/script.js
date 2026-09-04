document.addEventListener('DOMContentLoaded', () => {
    // Almacenamiento local simulado para correos registrados
    const usuariosRegistrados = ['existente@duoc.cl'];

    // Alternar entre Login y Registro
    const toggleBtn = document.getElementById('toggle-form-btn');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');

    toggleBtn.addEventListener('click', () => {
        loginSection.classList.toggle('hidden');
        registerSection.classList.toggle('hidden');
        toggleBtn.textContent = registerSection.classList.contains('hidden') ? 'Registrarse' : 'Iniciar Sesión';
    });

    // Validaciones del Formulario de Registro
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Limpiar errores previos
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

        // 1. Nombre Completo
        const nombre = document.getElementById('nombre').value.trim();
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!nombre) {
            setError('error-nombre', 'El nombre no debe estar vacío.');
            isValid = false;
        } else if (!regexNombre.test(nombre)) {
            setError('error-nombre', 'Solo se permiten caracteres alfabéticos y espacios.');
            isValid = false;
        } else if (nombre.length > 100) {
            setError('error-nombre', 'Máximo 100 caracteres.');
            isValid = false;
        }

        // 2. Correo Electrónico
        const email = document.getElementById('email').value.trim();
        const regexEmail = /^[^\s@]+@duoc\.cl$/; // Debe terminar en @duoc.cl
        if (!email) {
            setError('error-email', 'El correo es obligatorio.');
            isValid = false;
        } else if (!regexEmail.test(email)) {
            setError('error-email', 'Debe ser un correo válido terminado en @duoc.cl.');
            isValid = false;
        } else if (email.length > 60) {
            setError('error-email', 'El correo no debe superar los 60 caracteres.');
            isValid = false;
        } else if (usuariosRegistrados.includes(email)) {
            setError('error-email', 'Este correo ya se encuentra registrado.');
            isValid = false;
        }

        // 3. Contraseña (REGLA: Mínimo 10 caracteres, 1 mayúscula, 1 minúscula y 1 carácter especial)
        const password = document.getElementById('password').value;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[@#\$%&*_\-!.,]/.test(password);

        if (password.length < 10) {
            setError('error-password', 'La contraseña debe tener al menos 10 caracteres.');
            isValid = false;
        } else if (!hasUppercase) {
            setError('error-password', 'Debe incluir al menos una letra mayúscula.');
            isValid = false;
        } else if (!hasLowercase) {
            setError('error-password', 'Debe incluir al menos una letra minúscula.');
            isValid = false;
        } else if (!hasSpecialChar) {
            setError('error-password', 'Debe incluir al menos un carácter especial (ej: @#$%).');
            isValid = false;
        }

        // 4. Confirmar Contraseña
        const confirmPassword = document.getElementById('confirm-password').value;
        if (confirmPassword !== password || !confirmPassword) {
            setError('error-confirm', 'Las contraseñas no coinciden.');
            isValid = false;
        }

        // 5. Teléfono (Opcional)
        const telefono = document.getElementById('telefono').value.trim();
        const regexTel = /^\+?[0-9]{8,15}$/;
        if (telefono !== '' && !regexTel.test(telefono)) {
            setError('error-telefono', 'Ingrese un número de teléfono válido.');
            isValid = false;
        }

        // 6. Géneros Favoritos
        const generos = document.querySelectorAll('input[name="generos"]:checked');
        if (generos.length === 0) {
            setError('error-generos', 'Seleccione al menos un género favorito.');
            isValid = false;
        }

        // Éxito de Registro
        if (isValid) {
            usuariosRegistrados.push(email);
            alert('¡Registro completado con éxito!');
            registerForm.reset();
        }
    });

    // Validaciones de Formulario de Login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.getElementById('login-email').value.trim();
        const loginPass = document.getElementById('login-password').value;
        const loginError = document.getElementById('login-error');

        loginError.textContent = '';

        if (!loginEmail || !loginPass) {
            loginError.textContent = 'Por favor, complete todos los campos.';
            return;
        }

        if (!usuariosRegistrados.includes(loginEmail)) {
            loginError.textContent = 'El Formato de correo electrónico es inválido.';
        } else {
            alert('¡Inicio de sesión correcto!');
            loginForm.reset();
        }
    });

    function setError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }
});