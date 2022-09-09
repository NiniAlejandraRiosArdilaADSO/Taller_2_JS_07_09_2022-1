addEventListener("DOMContentLoaded", ()=>{
    //   Escribir un programa que evalúe la siguiente expresión: ")
    //   (a+7*c)/(b+2-a)+2*b")
  
    let a,b,c,d,z

    a=Number(prompt("Ingrese un numero" , 5))
    b=Number(prompt("Ingrese un numero" , 8))
    c=Number(prompt("Ingrese un numero" , 2))

    z= (a+7*c)/(b+2)
  
    console.group();
        alert(`calcule la expresion : ${z}`)
    console.groupEnd();
    
  })
  
  