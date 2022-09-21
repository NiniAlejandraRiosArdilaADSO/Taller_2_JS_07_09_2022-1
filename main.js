addEventListener(`DOMContentLoaded`, ()=>{
    //   Realizar el pseudocódigo que representen el algoritmo correspondiente para obtener el promedio de las calificaciones obtenidas 

    let n1=Number(prompt(`INGRESE NOTA 1 :  `, 4));
    let n2=Number(prompt(`INGRESE NOTA 2 :  `, 4));
    let n3=Number(prompt(`INGRESE NOTA 3 :  `, 4));
    let n4=Number(prompt(`INGRESE NOTA 4 :  `, 4));
    let suma= (n1+n2+n3+n4)/4
    
    if (suma <3 ) {
        console.log (`NO PASO!!`)
    }else{
        console.log (`Muchas felicidades pasaste!! `)
    }

    
    console.log (`SU PROMEDIO ES : ${suma} `)


})