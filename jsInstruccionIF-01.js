/* 
Santiago Vidal DIV E 
I/F ej1
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
  //declaramos variables

  var edad; 

  edad=document.getElementById("txtIdEdad").value;

  edad=parseInt(edad);

  if (edad==15)
  {

  alert("niña bonita");


  }



}//FIN DE LA FUNCIÓN


