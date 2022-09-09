addEventListener("DOMContentLoaded", ()=>{
    //   Escribir un programa que calcule el área y el volumen de un cilindro:  ");


    let radio=Number(prompt("Ingrese un numero del radio" , 5))

    let altura=Number(prompt("Ingrese un numero de la altura" , 3))

    let volumen= Math.PI * Math.pow(radio,2 * altura) 

    let area= (2 * (Math.PI * Math.pow(radio,2))) + ((2 * Math.PI * radio) * altura )

    console.group();
        console.log(`el volumen es  : ${volumen}`)
        console.log(`el area es: ${area}`)
    console.groupEnd();

})
  