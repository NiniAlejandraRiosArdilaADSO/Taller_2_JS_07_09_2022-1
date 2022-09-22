addEventListener(`DOMContentLoaded`, ()=>{
    //   Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código que representen el algoritmo para solucionar este problema.Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula sostenida y la edad del entrevistado.
                                                    
    let n = (prompt(`ESCRIBE TU NOMBRE  : `))
    let a = Number(prompt(`ESCRIBE EL AÑO ACTUAL : `,2022)) 
    let c = Number(prompt(`ESCRIBE TU FECHA DE NACIMIENTO  : `,2005))
    
    let rta = a-c
    
    console.log(`VIENVENID@ :  ${a}`)
    console.log(`VIENVENID@ :  ${rta}`)



})