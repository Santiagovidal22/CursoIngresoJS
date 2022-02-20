/* 
Santiago Vidal DIV E 
SW ej7
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
*/


function mostrar()
{
	var mensaje;
	var destinoIngresado;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{	case "Bariloche":
			mensaje= "Oeste";
			break;
		case "Cataratas":
			mensaje= "Norte";
			break;
		case "Mar del plata":
			mensaje= "Este";
			break;

		default:
			mensaje="sur";			
	}	

alert(mensaje);



}//FIN DE LA FUNCIÓN