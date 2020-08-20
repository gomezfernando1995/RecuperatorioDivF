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
  let NombreMujerMayorTemperatura; 

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

				acumuladorEdad =edad;

			if(sexo == "m"){
				contadorSexoM++;

			}else {
				 contadorSexoF++;
			}	

			if(sexo == "f"){
				  if (flagMujer == 0 || temperatura>mujerMayorTemperatura){
					NombreMujerMayorTemperatura = nombre;
					mujerMayorTemperatura = temperatura;
					flagMujer = 1;
				  }

			}
			

		 	promedio = acumuladorEdad/5;
			  
		 		console.log("A-Hay "+contadorSexoM+" hombres ingresados y "+contadorSexoF+" mujeres ingresadas");
			 
			
			 console.log("B-El promedio total de las edades ingresadas es de "+promedio);
			
			}if (!(sexo=="f")) {
				console.log ("C- No se ingresaron mujeres");
			}else{
				console.log("C-La mujer con mayor temperatura  es "+NombreMujerMayorTemperatura+ " con "+mujerMayorTemperatura);
			}		

}
