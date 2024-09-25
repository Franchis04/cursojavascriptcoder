const usuario = {
    anioNacimiento: 0,

    calcularEdad: function(anio) {
        return anio - this.anioNacimiento;
    }
};

function mostrarResultado(mensaje) {
    document.getElementById('result').textContent = mensaje;
}

function calcularEdadUsuario() {
    const anioNacimiento = parseInt(document.getElementById('birthYear').value);
    const anioObjetivo = parseInt(document.getElementById('targetYear').value);

    if (isNaN(anioNacimiento) || isNaN(anioObjetivo)) {
        mostrarResultado('Por favor, ingresa números válidos.');
        return;
    }
   
    usuario.anioNacimiento = anioNacimiento;

    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuarioJSON);

    const edad = usuario.calcularEdad(anioObjetivo);

    mostrarResultado(`En el año ${anioObjetivo}, tendrías ${edad} años.`);
}

function cargarDatosUsuario() {

    const usuarioGuardado = localStorage.getItem('usuario');
    
    if (usuarioGuardado) {

        const usuarioCargado = JSON.parse(usuarioGuardado);
        usuario.anioNacimiento = usuarioCargado.anioNacimiento;
        
        mostrarResultado(`Año de nacimiento: ${usuario.anioNacimiento}`);
    } else {
        mostrarResultado('No hay datos guardados del usuario.');
    }
}

// Eventos
document.getElementById('calculateBtn').addEventListener('click', calcularEdadUsuario);

window.onload = cargarDatosUsuario;