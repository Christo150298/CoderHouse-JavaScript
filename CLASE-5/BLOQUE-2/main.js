
//getElementById
// const div = document.getElementById("aplicacion");
// console.log(div.innerHTML);

// const parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);

//getElementByClassName
// const mascota = document.getElementsByClassName("mascota");
// console.log(mascota[0].innerHTML);
// console.log(mascota[1].innerHTML);
// console.log(mascota[2].innerHTML);

// const saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola muchachos</h1>"

const saludo = document.getElementById("section")
const section = prompt("Por favor indica a que seccion quieres ingresar:");

if(section === "panaderia"){
    saludo.innerHTML = "<h1>Bienvenido a la panaderia</h1>"
    saludo.className = "rojo"
} else if(section === "perfumeria"){
    saludo.className = "azul"
    saludo.innerHTML = "<h1>Bienvenido a la perfumeria</h1>"
} else {
    saludo.className = "verde"
    saludo.innerHTML = "<h1>Bienvenido a mi pagina prrrrro</h1>"
}
