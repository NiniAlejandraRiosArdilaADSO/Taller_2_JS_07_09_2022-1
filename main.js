addEventListener(`DOMContentLoaded`, ()=>{
    //   Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que ingresando el costo de los medicamentos calcules el descuento y el precio final.

    let precio=Number(prompt(`Ingrese el valor del producto :  `,2500));
 
    let descuento= 10;

    let des= (precio * descuento) / 100

    let total =(precio-des)
    


    console.log(`total a  pagar  : ${total}`);
    
})
