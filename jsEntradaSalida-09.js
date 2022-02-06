/*
Santiago Vidal DIV E 
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

se debe pedir el % por prompt
*/
function mostrarAumento()
{
   // declarar variables

   var sueldo ;
   var resultado; 
   var aumento;
   var porcentaje;
	

	sueldo=document.getElementById("txtIdSueldo").value;
	porcentaje=prompt("ingrese aumento ");
//parsear el valor 

	sueldo=parseFloat(sueldo);
	porcentaje=parseFloat(porcentaje);

// agrego calculos 
 
  aumento = sueldo * porcentaje/100;
  resultado= sueldo + aumento; 




    // devuelvo resultado 

    document.getElementById("txtIdResultado").value=resultado
}



