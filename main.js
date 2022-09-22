addEventListener(`DOMContentLoaded`, ()=>{
    //   Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de  descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total  de la compra

    let cp =Number(prompt(`VALOR DE LA COMPRA 1 :  `, 5000));
    let c2 =Number(prompt(`VALOR DE LA COMPRA 2 : `, 5200));
    let c3 =Number(prompt(`VALOR DE LA COMPRA 3 :`, 2500));
    let c4 =Number(prompt(`VALOR DE LA COMPRA 4 :  `, 200));
    let x5 =Number(prompt(`VALOR DE LA COMPRA 5 :` , 600 ))
    let des = (cp+c2) * 0.5
    let des2 = (c3+c4) * 0.2
    let suma = (des+des2+X5)

    console.log(`COMPPRAS  : ${cp} ${c2} ${c3} ${c4} ${x5}`)
    console.log(`TOTAL DE COMPRAS CON EL 5 % DE DESCUENTO : $ ${des}`)
    console.log(`TOTAL DE COMPRAS CON EL 2 % DE DESCUENTO : $ ${des2}`)
    console.log(`PRODUCTO SIN DECUENTO  : $ ${x5}`)
    console.log(`TOTAL : ${suma}`)

})