var grados = parseInt(prompt("Ingresa los grados: "));

function celsius(g){
    alert("Los grados en Celsius son " + g + " °C") 
}

function farenheit(g){
    alert("Los grados en Farenheit son " + ((g*1.8)+32) + " °F") 
}

function kelvin(g){
    alert("Los grados en Kelvin son " + (g + 273.15) + " °K") 
}

celsius(grados);
farenheit(grados);
kelvin(grados);