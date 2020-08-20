/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
let nombre;
let lugar;
let temporada;
let cantidadDePersonas;
let seguir;

let contadorBariloche = 0;
let contadorCataratas = 0;
let contadorSalta = 0;
let acumuladorBariloche = 0;
let acumuladorCataratas = 0;
let acumuladorSalta = 0;

let lugarMasElegido;
let nombreDelTitularConMasPasajeros;
let MaxPersonas;
let flagTitular = 0;

let promedioEnInvierno = 0;
let AcumuladorDeinvierno = 0;
let ContadorEnInvierno = 0;

				
		do{

			nombre = prompt("ingrese nombre del titular");
			while(!(isNaN(nombre))){
											nombre=  prompt("Error,reingrese nombre");
			}
			lugar = prompt ("ingrese un lugar bariloche, cataratas, o salta").toLowerCase();
			while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){
												lugar=  prompt("error,reingrese lugar bariloche, cataratas, o salta").toLowerCase();	
			}
			temporada = prompt ("ingrese temporada otoño,invierno, verano, primavera").toLowerCase();
			while(!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")){
												temporada=  prompt("error,reingrese temporada: otoño,invierno, verano, primavera").toLowerCase();
			}
				
			cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de pasajeros que viajan "));
			while(cantidadDePersonas <0 || isNaN(cantidadDePersonas)){
				cantidadDePersonas = parseInt(prompt("La cantidad ingresada no es valida. Ingrese la cantidad de pasajeros que viajan "));
			}
					// ACUMULADOR Y CONTADOR DE CADA LUGAR;

		if(lugar == "bariloche"){
			acumuladorBariloche += cantidadDePersonas;
			contadorBariloche++;
		}else if (lugar == "cataratas"){
			acumuladorCataratas += cantidadDePersonas;
			contadorCataratas++;
		}else {
			acumuladorSalta += cantidadDePersonas;
			contadorSalta++;
		}
				// EL NOMBRE DE LA PERSONA QUE LLEVE MAS PASAJEROS.

		if (flagTitular == 0 || MaxPersonas<cantidadDePersonas){
			nombreDelTitularConMasPasajeros = nombre;
			MaxPersonas = cantidadDePersonas;
		}					
			//CONTADOR Y ACUMULADOR DE PERSONAS QUE VIAJAN EN INVIERNO;

		if(temporada == "invierno"){
				AcumuladorDeinvierno += cantidadDePersonas;
				ContadorEnInvierno++;
		}


			//SE PREGUNTA SI SE QUIERE SEGUIR O SALIR DEL BUCLE;

			seguir = prompt ("desea continuar?(para continuar escriba si)");

		}while(seguir =="si" );	
				//PROMEDIO DE PERSONAS QUE VIAJAN EN INVIERNO
				
			promedioEnInvierno = AcumuladorDeinvierno / ContadorEnInvierno;
			
				//COMPARACION DE LUGAR MAS ELEGIDO;

		if (contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta){
		lugarMasElegido = "bariloche";
		}
		else if (contadorCataratas >contadorSalta && contadorCataratas>=contadorBariloche){
		lugarMasElegido = "cataratas";
		}else {
		lugarMasElegido= "salta";
		}

						console.log ("a-El lugar mas elegido es "+ lugarMasElegido );
						console.log ("b-El nombre del titular con mas pasajero es  "+nombreDelTitularConMasPasajeros+"  ");
						if(!(temporada == "invierno")){
							console.log ("c- Nadie viajo en temporada de invierno");
						}else{
						console.log ("c-Promedio de las personas que viajan en invierno es de : "+  promedioEnInvierno  );
						}
		}
