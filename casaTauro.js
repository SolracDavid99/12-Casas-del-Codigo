var carreritas = ["Lucia","Roberto","Maria","Jesus","Andrea","Jose"];

console.log(carreritas);

//Andrea adelanta a Maria
carreritas.splice(2);
carreritas.push("Andrea","Maria","Jesus","Jose")
console.log(carreritas);

//Jose es descalificado de la carrera
carreritas.pop();
console.log(carreritas);

//Detra de Lucia y antes de Roberto se clasifican tres nuevos corredores: Cristobal,Fernanda y Armando.
carreritas.splice(1);
carreritas.push("Cristobal","Fernanda","Armando","Roberto","Andrea","Maria","Jesus");
console.log(carreritas);

//Hay un nuevo concursante que toma el primer puesto: Federico
carreritas.unshift("Federico");
console.log(carreritas);