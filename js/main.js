const usuario = {
    anioNacimiento: 0,

    calcularEdad: function(anio) {
        return anio - this.anioNacimiento;
    }
};

function guardarUsuarioAjax(usuario) {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject('Error en la solicitud AJAX');
            }
        })
        .then(data => {
            console.log('Datos enviados:', data);
            resolve('Usuario guardado exitosamente en el servidor');
        })
        .catch(error => reject('Error de red o servidor: ' + error));
    });
}

function cargarUsuarioAjax() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                reject('Error al obtener los datos del servidor');
            }
        })
        .then(data => {
            const usuarioSimulado = {
                anioNacimiento: usuario.anioNacimiento 
            };
            resolve(usuarioSimulado);
        })
        .catch(error => reject('Error de red o servidor: ' + error));
    });
}

function mostrarResultado(mensaje) {
    document.getElementById('result').textContent = mensaje;
}

async function calcularEdadUsuario() {
    const anioNacimiento = parseInt(document.getElementById('birthYear').value);
    const anioObjetivo = parseInt(document.getElementById('targetYear').value);

    if (isNaN(anioNacimiento) || isNaN(anioObjetivo)) {
        mostrarResultado('Por favor, ingresa números válidos.');
        return;
    }

    usuario.anioNacimiento = anioNacimiento;

    try {
        const guardarResultado = await guardarUsuarioAjax(usuario);
        console.log(guardarResultado);

        const edad = usuario.calcularEdad(anioObjetivo);
        
        await Swal.fire({
            title: "¡Aquí está!",
            text: "Tu edad sería = " + edad,
            icon: "success",
            confirmButtonText: "Ok!"
        });

    } catch (error) {
        console.error(error);
        mostrarResultado('Hubo un error al calcular la edad.');
    }
}

async function cargarDatosUsuario() {
    try {
        const usuarioCargado = await cargarUsuarioAjax();
        usuario.anioNacimiento = usuarioCargado.anioNacimiento;
        mostrarResultado(`Año de nacimiento: ${usuario.anioNacimiento}`);
    } catch (error) {
        mostrarResultado(error);
    }
}

document.getElementById('calculateBtn').addEventListener('click', calcularEdadUsuario);

window.onload = cargarDatosUsuario;


