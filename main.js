addEventListener(`DOMContentLoaded`, ()=>{
    //   Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada enkilómetros por hora, proporcione la velocidad en metros por segundos.  );

    let km=Number(prompt(`Ingrese la velocidad en km:  `,5));
 
    let velocidadms=(km * 1000 ) / 3600 ;
    


    console.log(`el volumen del elipsoide : ${velocidadms}`);
})
