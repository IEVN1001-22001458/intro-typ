import {calcularIVADos, type Producto} from "./05-desestructuracion-funciones";

const carrito:Producto[] = [
{
    nombre: 'Iphone 10',
    precio: 1000
},
{
nombre: 'Ipad Air',
precio: 9500
},
{
nombre: 'MacBook',
precio: 6000
}
];
 const[total, iva]= calcularIVADos(carrito);
 console.log(`El total es: $[total]`);
 console.log(`El IVA es: $[iva]`);