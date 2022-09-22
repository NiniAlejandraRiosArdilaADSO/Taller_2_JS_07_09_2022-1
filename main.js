addEventListener(`DOMContentLoaded`, ()=>{
    //   Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le sobran $91000. ¿cuánto dinero tenía?
    let juegos= 11500*5
    let bomba= 1168000
    let pernos= 87000*3
    let sobran= 91000
    let suma= juegos+bomba+pernos+sobran
    

    console.log(`EL TOTAL DEL DINERO ES  :  ${suma}`)


})