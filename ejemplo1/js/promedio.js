//declaracion de ñas variables a utilizar 
var i, num, nota, notaactual, promedio;
//captura de cantidad de notas que se ingresaran
num = parceInt(prompt("¿cuantas notas va a ingresar?",""));

//definiendo un valor de la inicializacion para la variable que almacenara el promedio
nota = 0;
header = "<headers class=\"masked\">";
header += "<h1>selectable text </h1>";
header += "</header>";
document.write(header);

//ciclo o lazo que permitira ingresar cada nota
document.write("<section>");
document.write("<article>");
for (i=1; i<=num; i++){
    notaactual=parceFloat (prompt("ingrese la nota"+ i + ": ", ""));
    document.write("<h3> la nota "+ i + ": " + Math.round(notactual * Math.pow(10,2))/Math.pow(10,2) + "</h3>");
    nota += notaactual;
}

// obteniendo el calculo del promedio
promedio = nota / (i-1);

//imprimir el valor redondeado a dos decimales del promedio 
document.write("<h3> El promedio de las notas es: "+ Math.round(promedio*Math.pow(10,2))/Math.pow(10,2)+"</h3>");
document.write("</artitcle>");
document.write("</section>");