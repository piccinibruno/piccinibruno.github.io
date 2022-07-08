var Nombres = [];
var Descripciones = [];
var Importes = [];
var Suma = 0;
var Promedio = 0;
var Total = 0;
var calcularPago = 0;
var Pagar = [];







function Enviar(){

    // Nombre
 
    var Nombre = document.getElementById("Nombre").value;
    Nombres.push(Nombre);
    console.log(Nombres);
    document.getElementById("Nombre").value = "";
    
    const liNombres = document.getElementById("liNombres");
    const liNom = document.createElement('li');
    liNom.textContent = Nombre;
    liNombres.appendChild(liNom);


    // Descripcion

    var Descripcion = document.getElementById("Descripcion").value;
    Descripciones.push(Descripcion);
    console.log("Descripciones:", Descripciones); 
    document.getElementById("Descripcion").value = "";

    const liDescripciones = document.getElementById("liDescripciones");
    const liDes = document.createElement('li');
    liDes.textContent = Descripcion;
    liDescripciones.appendChild(liDes);


    // Importe
    
    var Importe = document.getElementById("Importe").value;
    Importes.push(parseFloat(Importe));
    console.log(Importes);
    document.getElementById("Importe").value = "";

    const liImportes = document.getElementById("liImportes");
    const liImp = document.createElement('li');
    liImp.textContent = Importe;
    liImportes.appendChild(liImp);
    
    // Cálculo
    
    Total = Nombres.length;
    Suma = Suma + parseFloat(Importe);
    Promedio = Suma / Total;

    const liPagar = document.getElementById("liPagar");
    const liPag = document.createElement('li');

    // for (var i = 0; i < Total; i++) {
    //     Pagar[i] = Promedio - Importes[i];
    //     liPag.textContent = Pagar[i];
    //     liPagar.appendChild(liPag);
    // }

    // for (var i = 0; i < Total; i++) {
    //     Pagar[i] = 0;
    // }

    // for (var i = 0; i < Total; i++) {
    //     Pagar[i] = Promedio - Importes[i];
    // }
    // for (var i = 0; i < Total; i++) {
    //     liPag.textContent = Pagar[i];
    // }
    // for (var i = 0; i < Total; i++) {
    //     liPagar.appendChild(liPag);
    // }
    Pagar = []
    for (var i = 0; i < Total; i++) {

        Pagar[i] = Promedio - Importes[i];
        liPag.textContent = Pagar[i];
        liPagar.appendChild(liPag);
     }

    document.getElementById("total").innerText = "El total es: $" + Suma;
    document.getElementById("cu").innerText = "A cada uno le toca aportar: $" + Promedio;






    
    console.log(Total);
    console.log(Suma);
    console.log(Promedio);
    console.log(Pagar)



}