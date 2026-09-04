// Lista de correos registrados para probar
let usuarios = ['admin@duoc.cl'];

// Cambiar entre Login y Registro
const btnCambiar = document.getElementById('btnCambiar');
const secRegistro = document.getElementById('sec-registro');
const secLogin = document.getElementById('sec-login');

btnCambiar.addEventListener('click', () => {
    secRegistro.classList.toggle('oculto');
    secLogin.classList.toggle('oculto');

    if (secRegistro.classList.contains('oculto')) {
        btnCambiar.textContent = 'Ir a Registro';
    } else {
        btnCambiar.textContent = 'Iniciar Sesión';
    }
});


const formRegistro = document.getElementById('formRegistro');

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    
   
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let todoOk = true;


    const nombre = document.getElementById('nombre').value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    if (nombre === '') {
        document.getElementById('err-nombre').textContent = 'Ingresa tu nombre.';
        todoOk = false;
    } else if (!soloLetras.test(nombre)) {
        document.getElementById('err-nombre').textContent = 'Solo se permiten letras.';
        todoOk = false;
    } else if (nombre.length > 100) {
        document.getElementById('err-nombre').textContent = 'Máximo 100 caracteres.';
        todoOk = false;
    }

    
    const correo = document.getElementById('correo').value.trim();
    
    if (correo === '') {
        document.getElementById('err-correo').textContent = 'El correo es obligatorio.';
        todoOk = false;
    } else if (!correo.endsWith('@duoc.cl')) {
        document.getElementById('err-correo').textContent = 'El correo debe terminar en @duoc.cl';
        todoOk = false;
    } else if (correo.length > 60) {
        document.getElementById('err-correo').textContent = 'Máximo 60 caracteres.';
        todoOk = false;
    } else if (usuarios.includes(correo)) {
        document.getElementById('err-correo').textContent = 'Este correo ya está registrado.';
        todoOk = false;
    }

    
    const pass = document.getElementById('pass').value;
    const tieneMayus = /[A-Z]/.test(pass);
    const tieneMinus = /[a-z]/.test(pass);
    const tieneEspecial = /[@#\$%&*\-_!]/.test(pass);

    if (pass.length < 10) {
        document.getElementById('err-pass').textContent = 'Mínimo 10 caracteres.';
        todoOk = false;
    } else if (!tieneMayus) {
        document.getElementById('err-pass').textContent = 'Debe incluir al menos una mayúscula.';
        todoOk = false;
    } else if (!tieneMinus) {
        document.getElementById('err-pass').textContent = 'Debe incluir al menos una minúscula.';
        todoOk = false;
    } else if (!tieneEspecial) {
        document.getElementById('err-pass').textContent = 'Debe incluir un carácter especial (@#$%).';
        todoOk = false;
    }

    // 4. Confirmar contraseña
    const confirmPass = document.getElementById('confirmPass').value;
    if (confirmPass !== pass || confirmPass === '') {
        document.getElementById('err-confirm').textContent = 'Las contraseñas no coinciden.';
        todoOk = false;
    }

    
    const telefono = document.getElementById('telefono').value.trim();
    if (telefono !== '' && isNaN(telefono)) {
        document.getElementById('err-telefono').textContent = 'Ingresa solo números.';
        todoOk = false;
    }

  
    const generos = document.querySelectorAll('input[name="genero"]:checked');
    if (generos.length === 0) {
        document.getElementById('err-genero').textContent = 'Selecciona al menos una opción.';
        todoOk = false;
    }

  
    if (todoOk) {
        usuarios.push(correo);
        alert('¡Usuario registrado con éxito!');
        formRegistro.reset();
    }
});


const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const correo = document.getElementById('loginCorreo').value.trim();
    const pass = document.getElementById('loginPass').value;
    const errLogin = document.getElementById('err-login');

    errLogin.textContent = '';

    if (correo === '' || pass === '') {
        errLogin.textContent = 'Rellena todos los campos.';
        return;
    }

    if (!usuarios.includes(correo)) {
        errLogin.textContent = 'Usuario o contraseña incorrectos.';
    } else {
        alert('¡Sesión iniciada correctamente!');
        formLogin.reset();
    }
});