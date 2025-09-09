interface Alumno{ //con mayuscula el nombre de la interfaz
 nombre: string;
 edad: number;
 curso: string;
 email?: string; //propiedad opcional (signo para que no de error si no lo pones en el arreglo)
 nota: number | string; //puede ser number o string
}



//concepto de arreglo
const alumno: Alumno = { //agregar el nmbre de la interfaz
    edad: 23,
    nombre: "Juan",
    curso: "TypeScript",
   
    nota: 7.5 //importante definir el tipo de dato : uso de interfaz donde estan los tipos de datos
}
console.log(`El alumno ${alumno.nombre} tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

let mascotas: string []= ['Perro', 'Gato', 'Hamster'];
mascotas[1]= 'Pajaro'; //Agregar en la posicion 1 
mascotas.push('Tortuga'); //agregar al ultimo
console.log(mascotas);

let notas: (number|string)[]= [7,8,9, 'Aprobado']; // se pueden poner varios tipos de datos en un arreglo 
notas.push(10);
notas.push('Sobresaliente');
console.log(notas);
