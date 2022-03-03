	/*4.	Santiago Vidal DIV E 
	Enunciado:Para el departamento de iluminación:
	Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
	A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
	B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
	C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
	D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
	 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

	 */
	function CalcularPrecio () 
	{
	 	var cantidadLamparas;
	 	var marca;
	 	var precioConDescuento;
	 	var precioFinal;
	 	var descuento;
	 	var valorLampara=35;
	 	var IIBB;

	    cantidadLamparas=document.getElementById("txtIdCantidad").value;
	    cantidadLamparas=parseInt(cantidadLamparas);
	    marca=document.getElementById("Marca").value;

	// A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

	 	if(cantidadLamparas >= 6)

	 	{	
	   		descuento= valorLampara * 0.50;
	 	}

	 // B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

	    else if (cantidadLamparas==5)

	    {	
	    		switch (marca)
	    		{
	    			case "ArgentinaLuz":
	    				descuento= valorLampara * 0.40;
	    				break;
	    			default:
	    			
	    			descuento=valorLampara * 0.30;	
	    		}	
	   
	    }
	         
	    //   C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
	    //   	“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.  

	       else if (cantidadLamparas==4)

	        {	
	           switch (marca)

	           {
               
                 case "FelipeLamparas":
                 case "ArgentinaLuz":
                 	descuento=valorLampara * 0.25;
	           		break;

	           	default:
	           		descuento=valorLampara * 0.20;
	           	 }

            }
	      //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
	      //    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	      

	 	 	else if(cantidadLamparas==3)

	 		{ 

	 			 switch (marca)
	 			 {
	 			 	case "ArgentinaLuz":
	 	 				descuento= valorLampara * 0.15;
	 	 				break;

	 	 			case "FelipeLamparas":
	 	 				descuento=valorLampara* 0.10;
	 	 				break;	

			 	   	default:
			 	   		descuento=valorLampara*0.05	

				 }
	 			 

	 		}	 


	 			 if (cantidadLamparas<=2)

	 			 {

	 			 	descuento= 0;
	 			 }

	 		
	 	

       
	        precioConDescuento= cantidadLamparas * (valorLampara - descuento) ; 

	   
	    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del 
	    //impuesto con el siguiente mensaje:  usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
        
          if (precioConDescuento > 120)

         	{	

                IIBB= precioConDescuento*10/100;
                precioConDescuento= IIBB + precioConDescuento;

               alert( "usted pago" + IIBB + " de IIBB" + precioConDescuento)
 
         	}

          	        

         	 document.getElementById("txtIdprecioDescuento").value=precioConDescuento;

