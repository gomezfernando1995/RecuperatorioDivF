/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
  let nombre;
  let temperatura;
  let sexo;
  let edad;

  let contadorSexoF  = 0;
  let contadorSexoM  = 0;
  let acumuladorEdad = 0;
  let promedio;
 
  let flagMujer = 0;
  let mujerMayorTemperatura; 
  let nombreMujerMayorTemperatura; 

  let mensajeA;
  let mensajeB;
  let mensajeC;

  for(i=0;i<5;i++){
			  
			nombre = prompt ("Ingrese nombre del paciente");
			while(!(isNaN(nombre))){
						nombre = prompt ("Error, reingrese el nombre del paciente porfavor");
			}
			
			temperatura = parseFloat(prompt("Ingrese temperatura del paciente, mayor a 0"));
				while (temperatura<0 || isNaN(temperatura)){
					temperatura = parseFloat(prompt("Error,reingrese temperatura porfavor"));
				}
			
	    	sexo = prompt("Ingrese sexo del paciente, m para masculino y f para femenino").toLowerCase();
				while(!(sexo == "f" || sexo == "m")){
					sexo = prompt("Error, reingrese sexo, m para masculino y f para femenino").toLowerCase();
				}
				
			edad = parseInt(prompt("Ingrese edad del paciente"));
				while (edad <0 || isNaN(edad)){
					edad = parseInt(prompt("Error, reingrese edad del paciente"));
				}	

				acumuladorEdad +=edad;

			if(sexo == "m"){
				contadorSexoM++;
			}else if(sexo == "f"){
				  if (flagMujer == 0 || temperatura>mujerMayorTemperatura){
					nombreMujerMayorTemperatura = nombre;
					mujerMayorTemperatura = temperatura;
					flagMujer = 1;
					contadorSexoF++;
				  }

			}
  		}	

		 	promedio = acumuladorEdad/5;
			  
			mensajeA="A-Hay "+contadorSexoM+" hombres ingresados y "+contadorSexoF+" mujeres ingresadas";
			mensajeB="B-El promedio total de las edades ingresadas es de "+promedio;
			
			if (flagMujer == 0) {
				mensajeC ="C- No se ingresaron mujeres";
			}else{
				mensajeC = "C-La mujer con mayor temperatura  es "+nombreMujerMayorTemperatura+ " con "+mujerMayorTemperatura;
			}		

			console.log (mensajeA+mensajeB+mensajeC);

}
