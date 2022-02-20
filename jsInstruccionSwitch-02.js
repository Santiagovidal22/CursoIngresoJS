/* 
Santiago Vidal DIV E 
SW ej2
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

*/
//julio y agosto si estamos en Invierno: "Abrigate que hace frio."
// septiembre a febrero si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
// marzo a junio si aún no llego el Invierno: "Falta para el invierno."

function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
		{
			case "Septiembre":
			case "Octubre":
			case "Noviembre":
			case "Diciembre":
			case "Enero":
			case "Febrero":
				mensaje= "Ya pasamos el frio, ahora calor!!!.";
				break;

			case "Julio":
			case "Agosto":
				mensaje= "Abrigate que hace frio.";
				break;


			default:
				mensaje= "Falta para el invierno." 	

			
		}

		alert(mensaje);


}//FIN DE LA FUNCIÓN