/*
Santiago Vidal DIV E 
I/F ej3
*/

function mostrar()
{
	var edad; 

	edad=document.getElementById("txtIdEdad").value;

	edad=parseInt(edad);

	if(edad >= 18) 

	{


		alert(" usted es mayor de edad");
	}

    
    //else es igual a SINO 

        else 

    {


		alert("usted es menor de edad");



	}

}//FIN DE LA FUNCIÓN