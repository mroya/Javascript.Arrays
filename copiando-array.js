
const notas = [7, 7, 8, 9];

// Os três pontos é chamado de spread operator ou sintaxe de espalhamento especial para clonar arrays
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
