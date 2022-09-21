addEventListener(`DOMContentLoaded`, ()=>{
    //   Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el tiempo y de un producto a otro, este dato se lee por teclado.  

    let valor=Number(prompt(`INGRESE EL VALOR INICIAL DEL PRODUCTO:  `,5000));
    let iva = 0.20
    let precio = valor / (1-iva)
    let des = (precio * iva) / 100
    let precio2 = (valor)
    
    console.log (`valor del producto sin iva : ${precio2} `)
    console.log (`valor del producto con iva : ${des}`)
    console.log (`Coste : $ ${precio}`)
})