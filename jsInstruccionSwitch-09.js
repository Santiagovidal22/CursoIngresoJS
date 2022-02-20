/* 
Santiago Vidal DIV E 
SW ej9
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{	
	var estacionDelAnio;
	var destinoIngresado;
	var precioBase= 15000;
	var cambio;

	precioBase=parseInt(precioBase);

	estacionDelAnio=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(estacionDelAnio)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					cambio= precioBase + (precioBase * 20/100);
					break;
				case "Cordoba":
					cambio= precioBase - (precioBase * 10/100);
					break;
				case "Mar del plata":
					cambio= precioBase - (precioBase *20/100);
					break;		
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					cambio=precioBase - (precioBase *20/100);
					break;
				case "Cordoba":
					cambio=precioBase + (precioBase*10/100);
					break;
				case "Mar del plata":
					cambio=precioBase + (precioBase*20/100);
					break;
			}	
			break;				

		 case "Otoño":
			switch (destinoIngresado)
			{
				case "Bariloche":
					cambio=precioBase + (precioBase *10/100);
					break;
				case "Cataratas":
					cambio=precioBase + (precioBase *10/100);
					break; 	
				case "Mar del plata":
					cambio=precioBase + (precioBase *10/100);
					break; 		
				default:
					cambio=precioBase;	
					break;

			}
			break;
		 case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					cambio=precioBase + (precioBase *10/100);
					break;
				case "Cataratas":
					cambio=precioBase + (precioBase *10/100);
					break; 	
				case "Mar del plata":
					cambio=precioBase + (precioBase *10/100);
					break; 		
				default:
					cambio=precioBase;
					break;	


			}
			
	}

	
	

	alert(cambio);






	}//FIN DE LA FUNCIÓN