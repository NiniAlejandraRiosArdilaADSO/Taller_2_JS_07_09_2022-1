addEventListener("DOMContentLoaded", ()=>{
    //   Escribir un programa que calcule el volumen de una esfera: ")
  
  
    let radio = Number(prompt("ingrese el radio de la esfera ", 3));
  
  
    console.group();
        alert(`calcule el volumen de la esfera : "${(4/3) * Math.PI * Math.pow(radio,3)}`)
    console.groupEnd();
    
  })
  
  