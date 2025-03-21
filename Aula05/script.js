function verificarLogin(){
  let usuario = document.getElementById("txtUsuario").value.trim();
  let senha = document.getElementById("txtSenha").value.trim();
  let mensagemErro = document.getElementById("mensagemErro");

  if(usuario == "admin" && senha == "admin123"){
    alert("Login realizado com sucesso!");
    window.location.href = "index.html"
  } else {
    alert("Usuário ou senha incorreto!!!");
    mensagemErro.textContent = "Usuário ou senha incorretos!!!"
    mensagemErro.style.color = "red";
  }
}

function validarCadastro(){
  let usuario = document.getElementById("txtNome").value.trim();
  let senha = document.getElementById("txtSenha").value.trim();
  let dataNascimento = document.getElementById("txtNascimento").value;
  let tipoConta = document.getElementById("selTipoConta").value;
  let mensagemErro = document.getElementById("mensagemErro");

  if(usuario == "" || senha == "" || dataNascimento == "" || tipoConta == ""){
    alert("Todos os campos devem ser preenchido!!!");
    mensagemErro.textContent = "Todos os campos devem ser preenchido!!!"
    mensagemErro.style.color = "red";
    return;
  }

  alert("Cadastro realizado com sucesso!")
}

function validarIdade(dataNascimento){
  let dataAtual = new Date();
  let dataNasc = new Date(dataNascimento);
  let idade = dataAtual.getFullYear() - dataNasc.getFullYear;

  if(idade < 18){
    alert('Você é menor de idade!');
    return;
  } else {
    alert('Seja bem-vindo!');
  }
}