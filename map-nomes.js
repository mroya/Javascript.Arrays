const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => {
    return  nome.toUpperCase();
});

console.log(nomesPadronizados);

// ou desta forma: 

const nomesPadronizados2 = nomes.map((nome) =>  nome.toUpperCase());

console.log(nomesPadronizados2);