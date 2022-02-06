/*Santiago Vidal DIV E 
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
   var importe ;
   var resultado; 
   var descuento;
	

	importe=document.getElementById("txtIdImporte").value;
	
//parsear el valor 
	importe=parseInt(importe);

// calculamos el descuento 

	descuento= importe * 25 / 100; 

	resultado= importe - descuento;

    document.getElementById("txtIdResultado").value= resultado ;
}
