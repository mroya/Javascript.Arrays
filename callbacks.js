const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function(nome){
    console.log(nome);
});

// ou podemos fazer deste modo chamada "arrow Functions":

nomes.forEach((nome) => {
    console.log(nome);
});

// Funcção callback externa

function imprimeNome(nome) {
    console.log(nome);
};

nomes.forEach(imprimeNome);

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma)

