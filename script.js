//EXERCÍCIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário pode digitar o CEP e ao submeter o formulário, exiba as informaçõee do endereço completo.

const inputCep = document.querySelector('.cep');
const cepDigitado = document.querySelector('.cepDigitado');
const logradouro = document.querySelector('.logradouro')
const complemento = document.querySelector('.complemento');
const bairro = document.querySelector('.bairro');
const localidade = document.querySelector('.localidade');
const uf = document.querySelector('.uf');
const ibge = document.querySelector('.ibge');
const gia = document.querySelector('.gia');
const ddd = document.querySelector('.ddd');
const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');

btn.addEventListener('click', handleClick); 

function handleClick(event){
event.preventDefault();
const cep  = inputCep.value;
verEndereco(cep)
}
function verEndereco(cep){
fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(r => r.json())
.then(body =>{
  console.log(body)
  cepDigitado.innerHTML = '<span>'+ 'CEP: '+ '<span/>'+ body.cep;
  logradouro.innerHTML = 'Logradouro: ' +body.logradouro;
  complemento.innerHTML = 'Complemento: ' +body.complemento;
  bairro.innerHTML = 'Bairro: ' +body.bairro;
  localidade.innerHTML = 'Localidade: ' +body.localidade;
  uf.innerHTML =  'UF: '  +body.uf;
  ibge.innerHTML = 'IBGE: ' +body.ibge;
  gia.innerHTML = 'GIA: ' +body.gia;
  ddd.innerHTML = 'DDD: ' +body.ddd;
})
}

// Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais atualize este valor a cada 30s;


// const bitcoin = ;
// const reais =;

function fetchBitcoin(){
  fetch(`https://blockchain.info/ticker`)
  .then(r => r.json())
  .then(body =>{
    console.log(body)
  })
}

function atualizarValor(){
  setInterval({},30000)
}

//Utilizando a API https://api.chucknorris.io/jokes/random, exiba uma piada aleatória toda vez que o usuário clicar em um botão escrito 'próximo';  