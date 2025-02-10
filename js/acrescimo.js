let valor = parseInt(Math.random()*1001);
let acrescimo = valor * 0.21
console.log(`Valor Sorteado = ${valor}`);
console.log(`Acrescimo = ${acrescimo}`);
valor = acrescimo + valor;
console.log(`Valor com acrescimo = ${valor.toFixed(2)}`);


