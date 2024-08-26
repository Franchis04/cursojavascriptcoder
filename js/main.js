function calcularEdad(anioNacimiento, anioACalcular) {
    let edad = 0;
    let anioActual = anioNacimiento;

    while (anioActual < anioACalcular) {
        edad++;
        anioActual++;

    }

    return edad;
}

let anioNacimiento = prompt("Ingrese su año de nacimiento: ");
let anioACalcular = prompt("Ingrese el año en el cual quiera saber su edad: ");

let edadCalculada = calcularEdad(anioNacimiento, anioACalcular);
console.log("La edad en el año " + anioACalcular + " será: " + edadCalculada + " años");
