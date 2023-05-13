// const duplicados = [];

// const iterador = (arr,funct) => {
//     for(const numero of arr){
//         funct(numero)
//     };
// };

// iterador([1,2,3,4,5], (param) => {
//     duplicados.push(param * 2);
// });

// console.log(duplicados);

//METODOS AVANZADOS DE ARRAYS

//ForEach recorre un array // find
// const productos = [
//     {id: 1, nombre:"camisa", precio: 500},
//     {id: 2, nombre:"pantalon", precio: 700},
//     {id: 3, nombre:"medias", precio: 600},
//     {id: 4, nombre:"gorra", precio: 900}
// ];

// productos.forEach(item => {
//     console.log(item);
// })

// const mensaje = prompt("Ingrese el nombre del producto a buscar:")

// const encontrado = productos.find((item) => item.nombre === nombre);
// console.log(encontrado);

// if(encontrado){
//     const mensaje = `
//     Id: ${encontrado.id}
//     Nombre: ${encontrado.nombre}
//     Precio: ${encontrado.precio}
//     `
//     alert(mensaje)
//     } else{
//     alert("No se encontro el producto")
// };


//some verifica que al menos un elemento del array cumpla la condicion

// console.log(productos.some(item => item.precio === "700"));

//map transforma los elementos del array

// const nombres = productos.map(item => item.nombre);
// console.log(nombres);

// const precio = productos.map(item => item.precio);
// console.log(precio);

// const precioNavidad = productos.map(item => {
//     return{
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio - item.precio * 0.21
//     };
// });

// console.log(precioNavidad);

// reduce reduce un array a un unico valor

//EJEMPLO 1

// const numeros = [1,2,3,4,5,6];
// const total = numeros.reduce((acum,item) => acum + item, 0)
// console.log(total);

//EJEMPLO 2

// const productos = [
//     {id: 1, nombre:"camisa", precio: 500},
//     {id: 2, nombre:"pantalon", precio: 700},
//     {id: 3, nombre:"medias", precio: 600},
//     {id: 4, nombre:"gorra", precio: 900}
// ];

// const total = productos.reduce((acum,item) => acum + item.precio, 0)
// console.log(total);

//SORT ordena un arreglo

