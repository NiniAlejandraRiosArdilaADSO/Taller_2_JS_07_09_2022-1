addEventListener(`DOMContentLoaded`, ()=>{
    //   Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago en hora.

    let nombre=prompt(`INGRESE SU NOMBRE :  `);
    let horas = Number(prompt(`CUANTAS HORAS TRABAJO A LA SEMANA : `, 7))
    let pago = 15300

    let pagos = (horas * pago)
    
    
    console.log (`Buenos dias sr@  : ${nombre} `)
    console.log (`tu sueldo es : ${pagos}`)

})