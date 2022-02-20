/* 
Santiago Vidal DIV E 
SW ej4
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/

function mostrar()
{
	var mes;
	var mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje= "este mes tiene 31 dias";
			break;

		case "Febrero":
			mensaje= "este mes tiene 28 dias ";
			break;

		default: 
			mensaje="este mes tiene 30 dias";	

	}

alert(mensaje);

}//FIN DE LA FUNCIÓN