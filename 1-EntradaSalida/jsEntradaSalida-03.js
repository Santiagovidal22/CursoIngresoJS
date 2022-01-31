/*Santiago Vidal DIV E 
E/S ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{   //declaramos variable
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	

	//guardamos el nombre
	nombreIngresado= document.getElementById("txtIdNombre").value;

	//mostrarlo por alert
	alert("su nombre es " + nombreIngresado);


}

//txtIdnombre

/*

entrada 
-prompt
-id

procesos:

salida
-alert

*/