	/*
Santiago Vidal DIV E 
IF ej6
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

function mostrar()
{
	var edad;
	var mensaje;


	edad=parseInt(edad);
	edad=prompt("ingrese su edad");
		


		if (edad > 69 )
		{
			mensaje= "es anciano";	
		}
		
		else 
		{
			if (edad < 70  && edad > 17)
			{
				mensaje="mayor de edad";
			}	
			
			else 
			{
				 if(edad > 12 && edad < 18)

				{
					mensaje="usted es adolescente";
				} 
			
				else
				{
					if (edad < 13 &&  edad > 3)
					{
						mensaje="niño";
					}		
					 else  
			  			{
			 				mensaje= "bebe"
						}	
				}	
			} 
		}	 
		 
		    
       	edad=document.getElementById("txtIdEdad").value=mensaje;
		  

		 alert(mensaje);	

  }

//FIN DE LA FUNCIÓN


/*
operadores relacionales 
//==  >=  <=  !=
//operador logico
// ! &&  ||
*/