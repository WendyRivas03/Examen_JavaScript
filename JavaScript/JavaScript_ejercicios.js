// EJERCICIO CON ALERTA
let nomb = prompt("Ingrese su Nombre") ;
let edad = parseInt(prompt("Ingrese su Edad"));

edad >= 18 ? alert(` ${nomb} usted es mayor de edad y su edad es ${edad}`):alert(`${nomb} usted es menor de edad y su edad es ${edad}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

if(num1 === num2){

    alert (`Ambos números son iguales, ingrese diferentes`);

}else if (num1>num2){

    alert(`El número ${num1} es mayor`);

}else{

    alert(`El número ${num2} es mayor`);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
let encus = 0;
let contadorfem = 0;
let contadormas = 0;
let contadorcas = 0;
let contadorsol = 0;

do{
    let nombre = prompt("Ingrese su nombre");
    let sex = parseInt (prompt("Ingrese su sexo 1: Femenino, 2: Masculino"));
    let esta = parseInt (prompt("Ingrese su estado civil 1:Casado, 2: Soltero"));
    
    sex===1?contadorfem ++ : contadormas ++;
    esta===1?contadorcas ++ : contadorsol ++;
   
    encu = parseInt(prompt("Desea seguir la encuesta, 1: si, 2: no")); //con esta opci

} while(encus === 1);

alert(`El número de encuestados femeninos es ${contadorfem}`);
alert(`El número de encuestados masculinos es ${contadormas}`);
contadorcas > contadorsol?alert(`El número de solteros es menor`):alert(`El número de casados es menor`);

//-----------------------------------------------------------------------------------------------------------------------------------------------

let encu = 0;

do{
    let nomb = prompt("Ingrese su nombre");
    let edad = parseInt(prompt("Ingrese su edad"));

    if(edad >=0 && edad <=10 ){

        alert(`${nomb} usted es un Niño`);

    }else if (edad >=11 && edad <=18){

        alert(`${nomb} usted es Adolecentes`);

    }else if (edad >=19 && edad <=35){

        alert(`${nomb} usted es Adulto`);

    }else if (edad >=36 && edad <=60){

        alert(`${nomb} usted es una persona Madura`);

    }else{

        alert(`${nomb} usted es una persona Mayor`);
    }
        
    encu = parseInt(prompt("Desea seguir la encuesta, 1: si, 2: no")); 

} while (encu===1);

 







