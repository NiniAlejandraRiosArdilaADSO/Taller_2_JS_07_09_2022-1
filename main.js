addEventListener("DOMContentLoaded", ()=>{
    //   Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: );


    let a=Number(prompt("Ingrese valor de a" , 7))

    let b=Number(prompt("Ingrese valor de a" , 4))

    let c=Number(prompt("Ingrese valor de c" , 1))

    let x=24

    let z= (a* Math.pow( x , 2)+ b * x + c)

    console.group();
        alert(`El resultado de la raiz es : ${z}`)
    console.groupEnd();

})