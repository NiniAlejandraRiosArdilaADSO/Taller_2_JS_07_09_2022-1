addEventListener("DOMContentLoaded", ()=>{
    //  Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar el resultado en metros/segundo: ")
  
  
    let distancia = Number(prompt("ingrese el vaor de la distancia ", 5));
  
    let tiempo = Number(prompt("ingrese el tiempo ", 10));
  
  
    console.group(`%cFormula (${5} * ${1000}) / (${tiempo} * ${60})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
  
        console.log(`la velocidad del proyectil : "${5 * 1000 / tiempo * 60}"`);
    
  
  })
  
  