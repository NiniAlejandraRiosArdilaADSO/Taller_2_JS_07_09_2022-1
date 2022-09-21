addEventListener(`DOMContentLoaded`, ()=>{
    //   Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución, por favor utilizar funciones matemáticas de Python para ello 

    let x1 =Number(prompt(`x1 :  `, 4));
    let x2 =Number(prompt(`x2 :  `, 5));
    let y1 =Number(prompt(`y1 :  `, 6));
    let y2 =Number(prompt(`y2 :  `, 7));
    let distancia = ((x2 - x1) * (x2-x1) + (y2-y1) * (y2-y1))
 
    console.log (`VALOR DE DISTANCIA  : ${distancia} `)

})