function activeBtn(){
  let txtNome = document.getElementById("nome").value;
  let txtEmail = document.getElementById("email").value;
  let txtArea = document.getElementById("txtMensagem").value;
  if(txtNome == ""){
    alert("Preencha o campo nome!!")
  } else if(txtEmail == ""){
    alert("Preencha o campo email!!")
  } else if(txtArea == ""){
    alert("Preencha o campo de mensagem!!")
  } else {
    if(txtNome == "Arthur" && txtEmail == "arthur@email.com"){
      window.location.href = "teste.html";
      return;
    } else {
      alert("Nome ou E-mail incorreto!")
    }
  }
}