function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5 )

	{
		numeroIngresado=promt( "ingrese 5 numeros ");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador + numeroIngresado;

		contador= contador + 1 
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN

/*
operadores relacionales 
//==  >=  <=  != 
//operador logico
// ! &&  ||
*/