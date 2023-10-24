//CREO QUE PUEDO SIMPLIFICAR TODO EN FUNCIONES PARA NO REPETIR CODIGO (PRUEBA PENDIENTE).

//Guardo los botones del html en variables.
const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");

//Dejo dos variables vacias para luega poner nuestra eleccion y la de la computadora.
let usuario = "";
let resultado = "";

//Le pongo al boton un vento de click junto con una función.
piedra.addEventListener("click", function eleccionPc(){
    //Guardo nuestra eleccion en la variable usuario.
    usuario = "Piedra";

    //FUNCION SEPARADA (PRUEBA PENDIENTE).
    //Pongo en un arreglo las opciones que tiene la computadora.
    const opcionesPc = ["Piedra", "Papel", "Tijera"];
    //Hacemos que la computadora elija una de esas 3 opciones de forma aleatoria.
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let opcionAleatoria = opcionesPc[indiceAleatorio];
    //Mediante condicionales determinamos si ganamos, perdimos o empatamos.
    if(usuario === opcionAleatoria){
        resultado = "Empate!";
    }else if(opcionAleatoria === "Papel"){
        resultado = "Perdiste!";
    }else if(opcionAleatoria === "Tijera"){
        resultado = "Ganaste!";
    }

    //FUNCION SEPARADA (PRUEBA PENDIENTE).
    //Guardo un div en una varaible para luego ponerle mas elementos adentro segun el resultado.
    const respuesta = document.querySelector(".respuesta");
    //Mediante condicionales hacemos que los elementos dentro de este div cambien.
    if(resultado === "Ganaste!"){
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="ganar">${resultado}</p></div>`
     }else if(resultado === "Perdiste!"){
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="perder">${resultado}</p></div>`
     }else{
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="empate">${resultado}</p></div>`
    }
})

//El proceso se repite en los otros botones.
papel.addEventListener("click", function eleccionPc(){
    usuario = "Papel";
    const opcionesPc = ["Piedra", "Papel", "Tijera"];
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let opcionAleatoria = opcionesPc[indiceAleatorio];
    if(usuario === opcionAleatoria){
        resultado = "Empate!";
    }else if(opcionAleatoria === "Tijera"){
        resultado = "Perdiste!";
    }else if(opcionAleatoria === "Piedra"){
        resultado = "Ganaste!";
    }
    const respuesta = document.querySelector(".respuesta");
    if(resultado === "Ganaste!"){
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="ganar">${resultado}</p></div>`
    }else if(resultado === "Perdiste!"){
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="perder">${resultado}</p></div>`
    }else{
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="empate">${resultado}</p></div>`
    }
})

tijera.addEventListener("click", function eleccionPc(){
    usuario = "Tijera";
    const opcionesPc = ["Piedra", "Papel", "Tijera"];
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let opcionAleatoria = opcionesPc[indiceAleatorio];
    if(usuario === opcionAleatoria){
        resultado = "Empate!";
    }else if(opcionAleatoria === "Piedra"){
        resultado = "Perdiste!";
    }else if(opcionAleatoria === "Papel"){
        resultado = "Ganaste!";
    }
    const respuesta = document.querySelector(".respuesta");
    if(resultado === "Ganaste!"){
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="ganar">${resultado}</p></div>`
    }else if(resultado === "Perdiste!"){
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="perder">${resultado}</p></div>`
    }else{
        respuesta.innerHTML = `<div class="usuario"><p>Tu elegiste: <span>${usuario}</span></p></div>
        <div class="pc"><p>La computadora eligió: <span>${opcionAleatoria}</span></p></div>
        <div class="resultado"><p class="empate">${resultado}</p></div>`
    }
})





