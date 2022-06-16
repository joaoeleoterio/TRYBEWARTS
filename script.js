const email = document.getElementById('email');
// const emailValue = email.value;
const senha = document.getElementById('password');
// const apelido = document.getElementById('input-name');
// const lastName = document.getElementById('input-lastname');
// const nameValue = `${apelido.value} ${lastName.value}`;
const button1 = document.getElementById('button1');
const button2 = document.getElementById('submit-btn');
const info = document.getElementById('agreement');
const contador = 500;
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
// const form = document.getElementById('evaluation-form');
// const select = document.getElementById('house');
// const house = select.value;

button2.disabled = true;
counter.innerText = contador;

function alertTryber() {
  const valorEmail = email.value;
  const valorSenha = senha.value;
  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function validaBtn() {
  if (button2.disabled === true) {
    button2.disabled = false;
  } else {
    button2.disabled = true;
  }
}

button1.addEventListener('click', alertTryber);
info.addEventListener('click', validaBtn);

function decrementaContador() {
  const string = textArea.value;
  const caracteres = string.length;
  const resultado = contador - caracteres;
  counter.innerText = resultado;
}

// function criaP(string) {
//   const p = document.createElement('p');
//   p.innerText = string;
//   form.appendChild(p);
// }

// function recebeValores() {
//   form.innerHTML = '';
//   const nome;
//   const email;
//   const casa;
//   const familia;
//   const matery;
//   const avaliacao;
//   const observation;
//   criaP(nome);
//   criaP(email);
//   criaP(casa);
//   criaP(familia);
//   criaP(matery);
//   criaP(avaliacao);
//   criaP(observation);
// }

textArea.addEventListener('input', decrementaContador);
// button2.addEventListener('click', recebeValores);
