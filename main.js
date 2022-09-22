addEventListener(`DOMContentLoaded`, ()=>{
    //   Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un depósito

    let di =Number(prompt(`VALOR DEL DIAMETRO :  `, 10)) ;
    let al =Number(prompt(`VALOR DE LA ALTURA : `, 2)) ;
    let r = di/2 ;
    let rc = 3.14 * (r * 2) * (r * 2) * al;
    let vlitros = rc * 1000
    let miunutos = 60
    let q = rc / miunutos
    

    console.log(`VOLUMEN : ${rc} `)
    console.log(`TIEMPO :  ${q}`)


})