/*
Santiago Vidal DIV E 
While ej4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;


	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	numeroIngresado=parseInt(numeroIngresado);

	while ( ! (numeroIngresado >= 0 && numeroIngresado <= 9) )

	{

		numeroIngresado=prompt("error, reingrese el numero entre 0 y 10 ");

	}

	document.getElementById("txtIdNumero").value=numeroIngresado;

	
	
}//FIN DE LA FUNCIÓN


/*
operadores relacionales 
//==  >=  <=  != 
//operador logico
// ! &&  ||
*/