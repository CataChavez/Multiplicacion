function app(){
  let userNumber = parseInt(prompt('Que número dese factorizar', 0));
  if (userNumber > 20 || userNumber < 1 || isNaN(userNumber)){
    console.log('Número no válido');
    return 0
  }
  for (let index = 1; index <= userNumber; index++){
    console.log(`${index} x ${userNumber} = ${index * userNumber}`)

  // Esto es hace lo mismo que línea 8 pero en ECMA5
  //console.log(index + ' x ' + userNumber + ' = ' + index*userNumber)

  }

  let resultado = 1
  for(let i = 1; i <= userNumber; i ++) {
    resultado *= i;
    console.log(`Factorial de ${i} es: ${resultado}`);

    }
}
app()

