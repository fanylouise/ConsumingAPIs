//ViaCep API 

//pegando class para criar variáveis
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

//adicionando evento de click ao botão 'enviar'
btn.addEventListener('click', handleClick); 

//pegando valor do input e adicionando a uma variavel
//chamando função de mostrar resultado colocando a variavel 
function handleClick(event){
event.preventDefault();
const cep  = inputCep.value;
verEndereco(cep)
}
//função de pegar dados da API
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
//fim utilização da API ViaCEP.




//BlockChain API

//variavel que recebera valor da API
const btc = document.querySelector('.btc');


//Buscando dado da API
function fetchBtc(){
  fetch('https://blockchain.info/ticker')
  .then(res => res.json())
  .then(btcJson =>{
    btc.innerHTML = ('R$ ' + btcJson.BRL.buy).replace('.', ',');//colocando dados recebidos no HTML
  })
}
// setInterval(fetchBtc, 30000);

fetchBtc();//chamando função 


//fim da utilização da API BlockChain


//ChuckNorris API



//Utilizando a API https://api.chucknorris.io/jokes/random, exiba uma piada aleatória toda vez que o usuário clicar em um botão escrito 'próximo';  

const piada = document.querySelector('.piada');
const nextBtn = document.querySelector('.nextBtn');

nextBtn.addEventListener('click', pegarPiada)


function pegarPiada(){
  fetch(`https://api.chucknorris.io/jokes/random`)
.then(r => r.json())
.then(body =>{
  console.log(body.value)
  piada.innerHTML = '"'+ body.value + '"';

})
}