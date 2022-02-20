/* 
Santiago Vidal DIV E 
SW ej5
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/

function mostrar()
{
	var hora;
	var mensaje;

	hora=parseInt(hora);
	hora=document.getElementById("txtIdHora").value;

	switch(hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		mensaje= "es de mañana" 
		break;

		default:
			mensaje= "no es de mañana";

	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN