let horas = 0,
minutos = 0,
segundos = 0,
bandera = false,
idInterval;

let cronometro = document.getElementById("cronometro"),
botonIniciar = document.querySelector("#btniniciar"),
botonPausar = document.querySelector("#btnPausar"),
botonDetener = document.querySelector("#btnDetener");

botonIniciar.addEventListener('click', comenzarCronometro);
botonPausar.addEventListener('click', pausarCronometro);
botonDetener.addEventListener('click', detenerCronometro);

function comenzarCronometro() {
    if (bandera === false) {
        idInterval = setInterval(actualizarCronometro, 1000);
        bandera = true;
    }
}
function pausarCronometro() {
    if (bandera) {
        clearInterval(idInterval);
        bandera = false;
    }
}
function detenerCronometro() {
    clearInterval(idInterval);
    bandera = false;
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometro.innerHTML = `0${horas}:0${minutos}:0${segundos}`;
}
function actualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    let horasString = horas < 10 ? `0${horas}` : horas.toString(),
    minutosString = minutos < 10 ? `0${minutos}` : minutos.toString(),
    segundosString = segundos < 10 ? `0${segundos}` : segundos.toString();
    cronometro.innerHTML = `${horasString}:${minutosString}:${segundosString}`;
}