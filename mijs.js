/*2.	Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo 
donde sus dimensiones base y altura se deben pedir al usuario que las digite.*/

/*
var b= prompt("digite la base del triangulo");
var h= prompt("digite la altura del triangulo");
var a=parseInt (b*h)/2;
document.write("el area del triangulo es: "+a);
*/
//------------------------------------------------------------------------------------

/*3.	Realiza las operaciones de suma, resta, multiplicación, división,
 y módulo pidiéndole solo 2 números al usuario */

/*
var num1= prompt("digite el primer numero");
var num2= prompt("digite el segundo numero");
var suma= parseInt (num1)+parseInt (num2);
var resta= num1- num2;
var multi= num1* num2;
var divi=  num1/ num2;
var porce=  num1 % num2;
document.write("<br>  la suma es: "+suma) ; 
document.write("<br>  la resta es: "+resta);
document.write("<br>  la multiplicacion es: "+multi);
document.write("<br>  la divicion es: "+divi);
document.write("<br>  el porcentaje es: "+porce);
*/
//------------------------------------------------------------------------------------------------

/*4.	Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en el mes
 y el valor tanto como de las horas normales de trabajo y las horas extras. */

/*
var hrstrabaj= prompt("digite la cantidad de horas trabajadas");
var valhortrab= prompt("digite el valor de la hora normal");
var valhorextra= prompt("digite el valor de la hora extra");
if(hrstrabaj>192){
    var valrhorextras= (hrstrabaj-192)*valhorextra;
    var valrhorasnor= 192*valhortrab;
    document.write("<br> el valor de las horas normales trabajadas son: "+valrhorasnor);
    document.write(" <br> el valor de las horas extras trabajadas son: "+valrhorextras);
}
else{
    var valrhorasnor= hrstrabaj*valhortrab;  
    document.write("<br> el valor de las horas normales trabajadas son: "+valrhorasnor);
    document.write("<br> el trabajador no hizo horas extras");
}
*/
//----------------------------------------------------------------------------------------------------

/*5. Digita el ingreso del precio de un producto y se debe calcular el IVA,
mostrar cuanto es el IVA que se agrega, mostrar el precio del producto
sin IVA y el total a pagar. */

/*
var precioprod= prompt("Digite el precio del producto");
var iva= precioprod * 0.19;
var totalpagar=parseInt (precioprod)+ parseInt (iva);
document.write("<br> El valor del producto si iva es de: "+precioprod);
document.write("<br> el valor del iva es de: "+iva);
document.write("<br> El total a pagar es de: "+totalpagar);
*/
//-------------------------------------------------------------------------------------------------------

/*6. Calcule el porcentaje de alumnos y alumnas de un salón de clase,
digitando el total de alumnos hombres y mujeres.*/

/*
var hombres=prompt("Digite la cantidad de alumnos hombres");
var mujeres=prompt("Digite la cantidad de alumnas mujeres");
var totalalumnos= parseInt(hombres) + parseInt(mujeres);
var porcehombres=(hombres*100)/totalalumnos;
var porcemujeres=(mujeres*100)/totalalumnos;
document.write("<br> El porcentaje de los alumnos hombres del salon es de: "+porcehombres+"%");
document.write("<br> El porcentaje de alumnas mujeres del salon es de: "+porcemujeres+"%");
*/
//----------------------------------------------------------------------------------------------------------

/*7. Calcule el promedio de 5 notas de un alumno, el rango de cada nota es
del 1 al 5. */

/*
var not1=prompt("Digite la primera nota rango de 1-5");
var not2=prompt("Digite la segunda nota rango de 1-5");
var not3=prompt("Digite la tercera nota rango de 1-5");
var not4=prompt("Digite la cuarta nota rango de 1-5");
var not5=prompt("Digite la quinta nota rango de 1-5");
var totalnotas= parseInt(not1) + parseInt(not2) + parseInt(not3) + parseInt(not4) + parseInt(not5);
var promnotas= totalnotas/5;
document.write("El promedio de las notas es de: "+promnotas);
*/
//-------------------------------------------------------------------------------------------------------------
/*8. Pide al usuario un número y determina si es par o impar y si es positivo o
negativo.*/

/*
var num=prompt("Ingrese un numero");
if(num >= 0){
    var par= num % 2;
    if(par == 0){
        document.write("El numero "+num+" es par y positivo");
    }
else{
    document.write("El numero "+num+" es impar y positivo");
}
}
else if(num < 0){
    var negativo= Math.abs(num);
    var par=negativo % 2;
    if(par == 0){
        document.write("El numero "+num+" es par y negativo");
     }
        else{
                document.write("El numero "+num+" es impar y negativo");
             }   
}
*/
//-------------------------------------------------------------------------------------------------------------------

/*9. Pide al usuario dos números y determina cual es el número mayor y cual
es el menor. */

/*
var num1=prompt("Digite el primer numero");
var num2=prompt("Digite el segundo numero");
if(num1 > num2){
    document.write("<br> el numero mayor es: "+num1);
    document.write("<br> el numero menor es: "+num2);
}
else if(num2 > num1){
    document.write("<br> el numero mayor es: "+num2);
    document.write("<br> el numero menor es: "+num1);
}
else if(num1 == num2){
    document.write("Los dos numeros son iguales");
}
*/
//---------------------------------------------------------------------------------------------------------------------

/*10. Pide al usuario que digite un numero del 1 al 7 y Realiza el código
correspondiente para saber cuál es el dia de la semana correspondiente
al número digitado; */

/*
var dia= prompt("digite opcion del 1 a 7");
switch(parseInt(dia) ){
    case 1 :document.write("lunes");
    break;
    case 2  : document.write("martes");
    break;
    case 3 : document.write("miercoles");
    break;
    case 4  : document.write("jueves");
    break;
    case 5  : document.write("viernes");
    break;
    case 6  : document.write("sabado");
    break;
    case 7  : document.write("domingo");
    break;
    default :document.write("Dia ingresado es incorrecto");
    break;
}
*/
//----------------------------------------------------------------------------------------------------------------------

/*11. Se necesita clasificar la etapa de una persona solo pidiéndole como dato
su edad. (Si la edad es menor de 18 es adolente), (si la edad está en el
rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es
adulto), (si la edad está entre 50 en adelante es adulto mayor). */

/*
var edad= prompt("digite la edad");
switch(true){
    case edad < 18 :document.write("usted es menor de edad");
    break;
    case edad >= 18 && edad <=28 : document.write("usted es joven");
    break;
    case edad >=29 && edad <= 49 : document.write("usted es adulto");
    break;
    default : document.write("adulto mayor");
    break;
}
*/
//-----------------------------------------------------------------------------------------------------------------------

/*12. Realice una factura de venta, ingrese el valor de 3 productos y calcule lo
siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total. */

/*
var producto1= prompt("Ingrese el valor del primer producto");
var producto2= prompt("Ingrese el valor del segundo producto");
var producto3= prompt("Ingrese el valor del tercer producto");
var opcion= prompt("ingrese 1 para pago en efectivo- ingrese 2 para pago con cupon- ingrese 3 para pago a credito");
switch(parseInt(opcion)){
    case 1 : 
        var totalproductos= parseInt(producto1) + parseInt(producto2) + parseInt(producto3); 
        document.write("el total a pagar es de: "+totalproductos);
    break
    case 2 :
        var totalproductos= parseInt(producto1) + parseInt(producto2) + parseInt(producto3);
        var totalpagar= totalproductos-(totalproductos*0.03);
        document.write("el total a pagar con el 3% de descuento es de: "+totalpagar); 
    break
    case 3 :
        var totalproductos= parseInt(producto1) + parseInt(producto2) + parseInt(producto3);
        var totalpagar= totalproductos+(totalproductos*0.05);
        document.write("el total a pagar con el aumento del 5% es de: "+totalpagar); 
        break
}
*/

//--------------------------------------------------------------------------------------------------------------------------

/*13. Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el
nivel del alumnos según su promedio:
* 00 – 10 = Malo.
* 11 – 13 = Regular.
* 14 – 16 = Bueno.
* 17 – 20 = Muy bueno. */

/*
var nota1=prompt("Ingrese la primera nota");
var nota2=prompt("Ingrese la segunda nota");
var nota3=prompt("Ingrese la tercera nota");
var promnotas=(parseFloat (nota1) + parseFloat(nota2) + parseFloat(nota3))/3;

if(promnotas >= parseFloat (0) && promnotas <= parseFloat (2.9) || promnotas >= parseFloat (0) && promnotas <= parseFloat (2,9) ){
   var nivel= "malo"; 
}
else if( promnotas>= parseFloat (3) && promnotas <= parseFloat(3.5) || promnotas>= parseFloat (3) && promnotas <= parseFloat(3,5)){
    var nivel= "regular";
}

else if( promnotas>= parseFloat (3.6) && promnotas <= parseFloat(4.5) || promnotas>= parseFloat (3,6) && promnotas <= parseFloat(4,5)){
    var nivel= "bueno";
}
else if( promnotas>= parseFloat (4.6) || promnotas>= parseFloat (4,6)){
    var nivel= "muy bueno";
}
document.write(nivel); */
/*
switch(true){
case promnotas >= parseFloat (0) && promnotas <= parseFloat (2.9) : document.write("MALO");  
break;
case promnotas>= parseFloat (3) && promnotas <= parseFloat(3.5) : document.write("REGULAR");
break;
case promnotas>= parseFloat (3.6) && promnotas <= parseFloat(4.5) : document.write("BUENO");
break;
case promnotas>= parseFloat (4.6) : document.write("MUY BUENO");
break;
}*/

//------------------------------------------------------------------------------------------------------------

/*14.	 Calcula la edad actual de una persona a partir de su fecha de nacimiento.
Los datos a pedir son: día, mes y año de nacimiento.*/

/*
var dia=prompt("Ingrese su dia de nacimiento");
var mes=prompt("Ingrese el numero de su mes de naciomiento");
var ano=prompt("ingrese su año de nacimiento");

var diaactual=prompt("Ingrese el dia actual");
var mesactual=prompt("Ingrese el numero del mes actual");
var anoactual=prompt("ingrese el año actual");
var edad= anoactual-ano;
if(mesactual<mes){
    edad=edad-1;
}
else if(mesactual == mes && diaactual< dia){
    edad=edad-1;
}
document.write("su edad es: "+edad);
*/

//-------------------------------------------------------------------------------------------------------------

/*Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero según los siguientes datos:
* Mostrar en pantalla días de hospitalización del paciente

*Valor dia según su edad
*Valor del recargo y total a pagar

*/
/*
var edad=prompt("Ingrese la edad del paciente");
var diashospitaliza= prompt("Ingrese los dias de hosoitalizacion");
if(edad >=0 && edad <=10){
    if(diashospitaliza <= 1){
        var costodia=20000;
       var totalpagar= diashospitaliza*costodia;
       document.write("<br> dias de horpitalizacion: "+diashospitaliza);
       document.write("<br> valor del dia "+costodia);
       document.write("<br> total a pagar :"+totalpagar);
    }
    else if(diashospitaliza >=2 && diashospitaliza <= 4){
        var costodia=30000;
        var totalpagar= diashospitaliza * costodia;
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> total a pagar :"+totalpagar);  
    }
    else if(diashospitaliza >=5 && diashospitaliza <= 7){
        var costodia=25000;
        var totalpagar= diashospitaliza*costodia;
        var valorrecargo=totalpagar * 0.05;
        var pagaraumento=parseInt(totalpagar)+parseInt(valorrecargo);
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write.write("<br> valor del recargo: "+valorrecargo);
        document.write("<br> total a pagar :"+pagaraumento); 
    }
    else if(diashospitaliza >=8){
        var costodia=15000;
        var totalpagar= diashospitaliza*costodia;
        var valorrecargo=totalpagar * 0.10;
        var pagaraumento=parseInt(totalpagar)+parseInt(valorrecargo);
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write.write("<br> valor del recargo: "+valorrecargo);
        document.write("<br> total a pagar :"+pagaraumento); 
    }
    
}


else if(edad >=11 && edad <=17){
    if(diashospitaliza <= 1){
        var costodia=20000;
       var totalpagar= diashospitaliza*costodia;
       document.write("<br> dias de horpitalizacion: "+diashospitaliza);
       document.write("<br> valor del dia "+costodia);
       document.write("<br> total a pagar :"+totalpagar);
    }
    else if(diashospitaliza >=2 && diashospitaliza <= 4){
        var costodia=30000;
        var totalpagar= diashospitaliza * costodia;
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> total a pagar :"+totalpagar);  
    }
    else if(diashospitaliza >=5 && diashospitaliza <= 7){
        var costodia=25000;
        var totalpagar= diashospitaliza * costodia;
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> total a pagar :"+totalpagar); 
    }
    else if(diashospitaliza >=8){
        var costodia=15000;
        var totalpagar= diashospitaliza*costodia;
        var valorrecargo=totalpagar * 0.10;
        var pagaraumento=parseInt(totalpagar)+parseInt(valorrecargo);
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write.write("<br> valor del recargo: "+valorrecargo);
        document.write("<br> total a pagar :"+pagaraumento); 
    }
    
}

else if(edad >=18 && edad <=49){
    if(diashospitaliza <= 1){
        var costodia=20000;
       var totalpagar= diashospitaliza*costodia;
       document.write("<br> dias de horpitalizacion: "+diashospitaliza);
       document.write("<br> valor del dia "+costodia);
       document.write("<br> total a pagar :"+totalpagar);
    }
    else if(diashospitaliza >=2 && diashospitaliza <= 4){
        var costodia=30000;
        var totalpagar= diashospitaliza * costodia;
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> total a pagar :"+totalpagar);  
    }
    else if(diashospitaliza >=4 && diashospitaliza <= 7){
        var costodia=25000;
        var totalpagar= diashospitaliza * costodia;
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> total a pagar :"+totalpagar); 
    }
    else if(diashospitaliza >=8){
        var costodia=15000;
        var totalpagar= diashospitaliza*costodia;
        var valorrecargo=totalpagar * 0.15;
        var pagaraumento=parseInt(totalpagar)+parseInt(valorrecargo);
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write.write("<br> valor del recargo: "+valorrecargo);
        document.write("<br> total a pagar :"+pagaraumento); 
    }
    
}

else if(edad >=50){
    if(diashospitaliza <= 1){
        var costodia=20000;
       var totalpagar= diashospitaliza*costodia;
       document.write("<br> dias de horpitalizacion: "+diashospitaliza);
       document.write("<br> valor del dia "+costodia);
       document.write("<br> total a pagar :"+totalpagar);
    }
    else if(diashospitaliza >=2 && diashospitaliza <= 4){
        var costodia=30000;
        var totalpagar= diashospitaliza * costodia;
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> total a pagar :"+totalpagar);  
    }
    else if(diashospitaliza >=5 && diashospitaliza <= 7){
        var costodia=25000;
        var totalpagar= diashospitaliza*costodia;
        var valorrecargo=totalpagar * 0.15;
        var pagaraumento=parseInt(totalpagar)+parseInt(valorrecargo);
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write("<br> valor del recargo: "+valorrecargo);
        document.write("<br> total a pagar :"+pagaraumento); 
    }
    else if(diashospitaliza >=8){
        var costodia=20000;
        var totalpagar= diashospitaliza*costodia;
        var valorrecargo=totalpagar * 0.10;
        var pagaraumento=parseInt(totalpagar)+parseInt(valorrecargo);
        document.write("<br> dias de horpitalizacion: "+diashospitaliza);
        document.write("<br> valor del dia "+costodia);
        document.write.write("<br> valor del recargo: "+valorrecargo);
        document.write("<br> total a pagar :"+pagaraumento); 
    }
    
}

*/


 









