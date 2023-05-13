// const nombres = ["Juan", "Camila", "Pepito", "Christopher"];

// .length recorre todo el array
// for(let i = 0; i < nombres.length; i++){
//     console.log(nombres[i])
// };

//.push agrega un elemento al array
// nombres.push("Javier");
// console.log(nombres);

// //.unshit agrega un elemento al inicio del array
// nombres.unshift("Leopoldo");
// console.log(nombres)

// //.pop saca el ultimo elemento del array
// nombres.pop();
// console.log(nombres);

// //.shift saca el primer elemento del array
// nombres.shift();
// console.log(nombres);

//.splice eliminar varios elementos, recibe 2 parametros el primero es la posicion y el segundo la cantidad de elementos a eliminar
const nombres = ["Juan", "Camila", "Pepito", "Christopher", "Javier"];
// nombres.splice(1,2);
// console.log(nombres);

//.join une en un solo string a todos los elementos separados por lo pasado como parametro
// console.log(nombres.join(" "));

//.concat une dos arreglos en uno solo
const mascotas = ["perro","gato"];
const varios = mascotas.concat(nombres);
console.log(varios);

//.indexOf devuelve la posicion del elemento que se esta buscando
console.log(nombres.indexOf("Pepito"));

//.includes verifica la existencia de un elemento en el array 
console.log(nombres.includes("Pepito"));
console.log(nombres.includes("Shakira"));

//EJEMPLO DE UNA TIENDA
const productos = ["camisa","media","calzoncillos","pantalon"]

const nombre = prompt("Ingrese el nombre de un producto:");
const encontrado = productos.includes(nombre);

if(encontrado){
    alert("Producto encontrado");
    }else{
    alert("Producto no encontrado");
};