	/*
Santiago Vidal DIV E 
IF ej6
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edad

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	if(edad>= 18)

	{
	   alert("usted es mayor de edad")

     }

	if(edad>12 && edad <18)

	{
	   alert("usted es adolescente")

     }

     else

     	if(edad<= 12)

	{
	   alert("usted es menor de edad")

     }

}//FIN DE LA FUNCIÓN


/*
operadores relacionales 
//==  >=  <=  !=
//operador logico
// ! &&  ||
*/