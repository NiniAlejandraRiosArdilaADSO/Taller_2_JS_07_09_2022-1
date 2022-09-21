addEventListener(`DOMContentLoaded`, ()=>{
    //   Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se compone de los siguientes porcentajes:  

    let trabajoFinal=Number(prompt(`Ingrese nota del trabajo final :  `,4));
    let p1 = Number(prompt(`INGRESE NOTA DEL PARCIAL 1 : `,3 ))
    let p2 = Number(prompt(`INGRESE NOTA DEL PARCIAL 2 :` ,1 ))
    let p3 = Number(prompt(`INGRESE NOTA DEL PARCIAL 3 : `,5 ))
    let examenFinal = Number(prompt(`ÌNNGRESE NOTA DEL EXAMEN FINAL : `,4.5))
    let ex = 0.55
    let t = 0.15
    let e = 0.3
    let promedio = (p1+ p2 +p3)/3
    let cfinal = (promedio*ex) + (trabajoFinal*e) +(examenFinal*t)
    
    console.log (`promedio : ${promedio} `)
    console.log (`calificacion : ${cfinal}`)
})