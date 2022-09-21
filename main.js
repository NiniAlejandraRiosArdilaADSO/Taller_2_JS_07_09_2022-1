addEventListener(`DOMContentLoaded`, ()=>{
    //   Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit. 

    let gradosc=Number(prompt(`Ingrese los grados centigrados :  `,42));
 
    let convertir = (gradosc * 1.8) + 32;


    console.log(`los grados Fahrenheit:   : ${convertir} °f`);

})
