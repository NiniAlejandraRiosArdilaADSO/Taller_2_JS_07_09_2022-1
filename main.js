addEventListener(`DOMContentLoaded`, ()=>{
    //   Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes cualquiera hace tres ventas por valores:

    let v1 =Number(prompt(`VALOR DE LA VENTA 1 :  `, 4000));
    let v2 =Number(prompt(`VALOR DE LA VENTA 2 :  `, 3000));
    let v3 =Number(prompt(`VALOR DE LA VENTA 3 :  `, 2000));
    let sueldo =Number(prompt(`INGRESA TU SUELDO BASE  :  `, 50000));
    let comision = (v1 + v2 + v3 ) * .10
    let total =(sueldo + comision)
    
    
    console.log (`SU SUELDO BASE ES  : ${sueldo} `)
    console.log (`SU COMISION DEL MES ES  : ${comision}`)
    console.log (`SU SUELDO TOTAL DEL MES ES  : ${total}`)

})