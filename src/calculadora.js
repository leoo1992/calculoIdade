function calcIdade(data) {
  return moment().diff(moment(data), "years", false);
}

function calcular() {
  let result = document.getElementById("result");
  result.parentElement.classList.remove("hidden");

  let nascimento = document.getElementById("nascimento").value;
  if (nascimento !== null && nascimento !== "") {
    let dataAtual = moment();
    let dataNascimento = moment(nascimento);

    if (dataNascimento.isAfter(dataAtual)) {
      result.innerText = "Data de nascimento inválida";
    } else {
      let idade = calcIdade(nascimento);
      result.innerText = `${idade} anos`;
    }
  } else {
    result.innerText = "Data de nascimento inválida";
  }
}
