/* 
Santiago Vidal DIV E 
SW ej10
Enunciado:
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/

function mostrar()
{	
	var estacionDelAnio;
	var destinoIngresado;
	var mensaje;

	

	estacionDelAnio=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(estacionDelAnio)
		{
			case "Invierno":
				switch (destinoIngresado)

			{
				case "Bariloche":
					mensaje= "Se viaja";
					break;
				default: 
					mensaje= "No se viaja";	
					break;

			}

		break;
		
			case "Verano":
				switch(destinoIngresado)

			{
				case "Mar del plata":
				case "Cataratas":
					mensaje= "Se Viaja";
					break;
				default:
					mensaje="No se viaja";
					break;	

					
			}

		break;
		
			case "Primavera":
				switch(destinoIngresado)	
			

			{
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
					break;

				default:
					mensaje= "No se viaja";	
					break;
			}
		break;
		
			default:
					mensaje="Se viaja";
					break;



		}


alert(mensaje);

}		