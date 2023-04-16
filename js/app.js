
let horas = 0,
minutos = 0,
segundos = 0,
bandera = false;

let cronometro = document.querySelector("#cronometro"),
botonIniciar = document.querySelector("#btninicio"),
botonPausar = document.querySelector("#btnPausar"),
BotonDetener = document.querySelector("#btnDetener");

botonIniciar.addEventListener('click', comenzarCronometro);
// botonPausar.addEventListener('click', pausarCronometro);
// botonDetener.addEventListener('click', detenerCronometro);

function comenzarCronometro() {
    if (bandera === false) {
        cronometro = setInterval(actualizarCronometro, 1000);
        bandera = true;
        console.log("hola");
    }
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
    if(segundos<10){
        segundos = '0'+segundos;
    }

    console.log(segundos);
    const tiempo = `${horas}:${minutos}:${segundos}`;
    console.log(tiempo);
    cronometro.innerHTML = tiempo;
}