/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
    
 let marca;
 let precio;
 let peso;
 let tipo;
 let seguir;
 
 let acumuladorPeso = 0;
 let precioLiquidoCaro;
 let marcaLiquidoCaro;
 let flagLiquido = 0;

 let pesoSolido;
 let marcaSolidoLiviano;
 let flagSolido = 0;

 do{
        marca = prompt("Ingrese marca del producto");
        while (!(isNaN(marca))){
                marca = prompt("Erro,reingrese marca del producto");
        }

        precio = parseFloat (prompt("Ingrese precio del producto"));
        while(precio<0 || isNaN(precio)){
                precio = parseFloat (prompt("Error,reingrese precio del producto"));
        }        
        
        peso = parseFloat (prompt("Ingrese peso del producto"));
        while(peso<0 || isNaN(peso)){
                peso = parseFloat (prompt("Reingrese peso del producto"));
        }   

        tipo= prompt("Ingrese el tipo de producto : solido o liquido").toLowerCase();
        while (!(tipo == "solido" || tipo == "liquido")){
                tipo = prompt("Reingrese tipo del producto, solido o liquido").toLowerCase();
        }

       

                if(tipo=="liquido"){
                        if(flagLiquido == 0 || precioLiquidoCaro<precio){
                                marcaLiquidoCaro = marca;
                                precioLiquidoCaro = precio;
                                flagLiquido = 1;
                        }
                }
               
                else if(tipo=="solido"){
                        if(flagSolido == 0 || peso<pesoSolido){
                                marcaSolidoLiviano = marca;
                                pesoSolido = peso;
                                flagSolido=1;
                        }
                }
                 acumuladorPeso += peso;

        seguir = prompt ("desea seguir ingresando productos? responda si para seguir. ").toLowerCase();
 }while(seguir == "si");
 
        console.log("a -El peso total de la compra es de "+acumuladorPeso+" kg");
       
     
        if (tipo == "liquido") {
           console.log("b-La marca del liquido mas caro es "+marcaLiquidoCaro+" con un precio de $"+precioLiquidoCaro);
        }else{
            console.log("No se ingresaron liquidos")
        }
        
        if(!(tipo == "solido")){
              console.log("c-No se ingresaron productos solidos");
        }else{
              console.log("c-La marca del solido mas liviano es "+marcaSolidoLiviano+" con peso de "+pesoSolido+" kg");
        }
   
}

