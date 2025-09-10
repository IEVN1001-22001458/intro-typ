
export interface Producto{
    nombre:string;
    precio:number;

}
const telefono:Producto={
    nombre:'Iphone 14',
    precio: 1500

};
const tablet:Producto={
    nombre:'Ipad Air',
    precio:900
}
function calcularIva(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return total*0.21;
}
const articulos=[telefono, tablet];
const iva= calcularIva(articulos);
console.log(`El iva es: ${iva}`);

//desestructuración: sirve para que me regrese dos valores
//una funcion solo puede regresar un valor

export function calcularIVADos(productos:Producto[]):[number,number]{
    let total=0;
    for (let producto of productos){
        total+=producto.precio;

    }
    return[total, total*0.21];
}
const [total, ivaDos] = calcularIVADos(articulos);
console.log(`EL total es: ${total}`);
console.log(`El iva es ${ivaDos}`);