/* 
Santiago Vidal DIV E 
SW ej8
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/


function mostrar()
{
	var mensaje;
	var destinoIngresado;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{

		case "Bariloche":
		case "Ushuaia":
			mensaje="Hace FRIO"
			break;

		default:
			mensaje= "Hace CALOR"
			break;	

	}
	
alert(mensaje);			



	}
