	/*
Santiago Vidal DIV E 
IF ej9
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/


function mostrar()
{
	var aleatorio;

	var enteroAleatorio;

	aleatorio = Math.random();

	enteroAleatorio = Math.floor(aleatorio *( 10 -1 + 1) + 1);

	alert(enteroAleatorio);


}//FIN DE LA FUNCIÓN