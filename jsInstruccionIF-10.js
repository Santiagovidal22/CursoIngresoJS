	/*
Santiago Vidal DIV E 
IF ej10
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/


function mostrar()
{
	var numeroAleatorio;

	numeroAleatorio = Math.floor(Math.random() *(10-1) +1);

	console.log(numeroAleatorio);


	if(numeroAleatorio>8)

	{ 


		alert("excelente");

}

else if (numeroAleatorio< 4)

{ 


		alert("vamos la proxima se puede");

}

else 

{ 


		alert("aprobo");


}
}//FIN DE LA FUNCIÓN

