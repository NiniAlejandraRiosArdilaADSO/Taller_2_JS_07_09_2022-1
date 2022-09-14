addEventListener(`DOMContentLoaded`, ()=>{
    //   programa que muestre el pago de una llamada telefonica:  );
    let valor=Number(prompt(`Ingrese la altura `,355));
    let tiempo=Number(prompt(`Ingrese el largo`,60));
    let iva=Number(prompt(`Ingrese el ancho `,20));

    let gft=(valor * tiempo )*iva ;
    let total2=gft +(valor*tiempo) ;


    console.log(`el volumen del elipsoide : ${total2}`);
})
