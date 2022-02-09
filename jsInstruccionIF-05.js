	/*
Santiago Vidal DIV E 
IF ej5
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/


	function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	if(edad<12 || edad>17)

	{ 

		alert("Usted no es adolescente");


		}

}//FIN DE LA FUNCIÓN