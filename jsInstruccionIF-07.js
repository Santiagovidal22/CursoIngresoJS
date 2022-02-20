/*

ATENCIÓN
El siguiente ejercicio debe tener un solo alert escrito en el
código , SI SI , uno solo. la palabra alert escrita una sola vez. si si nuevamente , una sola vez en todo su código

Ejercicio 07 BIS V1 
Santiago Vidal DIV E 
(Realizar en los archivos del ejercicio 07 del IF)
  a. si es menor de 13 , mostrar el mensaje “feliz día”.
  b. Si es adolescente el mensaje es “usted es adolescente”
  i. si tiene 17 años además mostrar el mensaje “último año!!!”
  c. Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
  i. si tiene 33 años , además mostrar el mensaje “como cristo”
  ii. si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
  iii. si tiene 88, además mostrar el mensaje “lindo número''
    d. si la edad es par , además mostrar , “sos par!!”



*/


function mostrar()
{

var edad;
var estadoCivil;
var nombre;
var mensaje;

edad=parseInt(edad);
edad= document.getElementById("txtIdEdad").value;
estadoCivil= document.getElementById("estadoCivil").value;
nombre=prompt(nombre);
nombre = nombre.toLowerCase();
estadoCivil = estadoCivil.toLowerCase();



// a. si es menor de 13 , mostrar el mensaje “feliz día”. 

if (edad < 13)

  {
    mensaje="feliz dia";
    if (nombre == "ricardo")
    {
      mensaje= mensaje + " " + "muy chiquito para ese nombre";
    }

  
  }

  else if (edad > 12 && edad <= 17 )

    {
      mensaje= "usted es adolescente";

      if (edad==17)
        {
          mensaje= mensaje + " " + "ultimo año";
        }
       if (nombre=="violeta")
          {
            mensaje = mensaje + " " + "como el color ";
          }        

    }

    else if (edad >= 18) 
    {
        mensaje= "tenes edad de laburar";

           if(edad==33)
          {
            mensaje= mensaje+ " " + "como cristo"
          }  
        
        
          else if (edad > 59)

        { 
          mensaje= "a jubilarse";
          if ( edad == 88)
            {
             mensaje= mensaje + " " + "lindo numero";
            }
            if (nombre == "alfredo")
            {
              mensaje= mensaje + " " + "como el de QUEEN";
            }
        } 
      }  

      


      if(edad%2 == 0)
       {
         mensaje = mensaje + ", " + "sos par";
       }

  //Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa
 if (estadoCivil=="casado" && edad > 12)

    {
      mensaje= mensaje + " " + "quiere casa";
    }
  // Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
  else if (estadoCivil=="soltero" && edad  > 17 && edad < 60)

    {
      mensaje = mensaje + " " + "a salir ";
    } 

   // Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante 
  else if (estadoCivil=="divorciado" && edad > 12 && edad < 18)
    {
      mensaje= mensaje + " " + "toda una vida por delante";
    }


  
  alert(mensaje);
 


}
