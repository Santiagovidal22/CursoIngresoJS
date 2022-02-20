/*
Santiago Vidal DIV E 
While ej2
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador; // variable de control

	contador=11;

	while (contador>0)

	{

		document.write ( "El numero a mostrar es " + (contador-1) + "<br>" );


		//cada ves que itere 

		contador= contador - 1;

	}

}//FIN DE LA FUNCIÓN