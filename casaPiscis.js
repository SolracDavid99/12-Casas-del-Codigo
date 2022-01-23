var maximo =10000;
var billetes = 500;
function retiro(){
    var cajero = document.getElementById("retiro").value;
    if(cajero<=maximo && cajero%20==0){
        maximo = maximo-cajero;
        billetes= billetes -(cajero/20);
        var x = document.createElement("LI"); 
        var t = document.createTextNode("Retiro : " + cajero + " Saldo : " + maximo + " Billetes : " + billetes); 
        x.appendChild(t); 
        document.querySelector("#container ol").appendChild(x); 

    }
    else{
        alert("La cantidad excede el limite o no es multiplo de 20");
    }
}