/*

Santiago Vidal DIV E 
SW ej1
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."

*/

function mostrar()
{
	// declaro variable 

	var mes;
	var mensaje;

	//tomamos el dato 

	mes=document.getElementById("txtIdMes").value

	switch (mes) //enteros , cadenas de caracteres , caracteres
	{
		case "Enero": 

			mensaje="que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje="a clases!!!.";
			break;
		case "Julio":
			mensaje="se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje= "Felices fiesta!!!.";
			break;
		default:
			mensaje="no hay eventos este mes ";		





	}

	alert (mensaje);



}//FIN DE LA FUNCIÓN