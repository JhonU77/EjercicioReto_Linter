let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let adivinado = false;

alert("Bienvenido al juego 'Adivina el número'!");
alert("Estoy pensando en un número entre 1 y 10...");

while (!adivinado) {
  let intento = parseInt(prompt("Ingresa tu número:"));
  intentos++;

  if (intento === numeroSecreto) {
    alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
    adivinado = true;
  } else if (intento < numeroSecreto) {
    alert("El número es más alto. Intenta de nuevo.");
  } else if (intento > numeroSecreto) {
    alert("El número es más bajo. Intenta de nuevo.");
  } else {
    alert("Por favor ingresa un número válido.");
  }
}

var mensaje = "hola mundo";
console.log(mensaje);
mensaje = "hola";
