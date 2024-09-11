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

    const edad = usuario.calcularEdad(anioObjetivo);

    mostrarResultado(`En el año ${anioObjetivo}, tendrás ${edad} años.`);
}

document.getElementById('calculateBtn').addEventListener('click', calcularEdadUsuario);