const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");

function opcionPc(usuario) {
    const opcionesPc = ["Piedra", "Papel", "Tijera"];
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let opcionAleatoria = opcionesPc[indiceAleatorio];
    const respuesta = document.querySelector(".respuesta");
    if(usuario === opcionAleatoria){
         respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="empate">Empate!</p></div>`
    }else if(usuario === "Piedra" && opcionAleatoria === "Papel" || usuario === "Papel" && opcionAleatoria === "Tijera" || usuario === "Tijera" && opcionAleatoria === "Piedra"){
         respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="perder">Perdiste!</p></div>`
    }else if(usuario === "Papel" && opcionAleatoria === "Piedra" || usuario === "Tijera" && opcionAleatoria === "Papel" || usuario === "Piedra" && opcionAleatoria === "Tijera"){
         respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="ganar">Ganaste!</p></div>`
    }
}

piedra.addEventListener("click", () => opcionPc("Piedra"));
papel.addEventListener("click", () => opcionPc("Papel"));
tijera.addEventListener("click", () => opcionPc("Tijera"));





