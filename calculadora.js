function calcularKit() {
  // recupera dados do formulário
  let nro1 = document.getElementById("nro1").value
  // processamento
  let calculo
  if (nro1 >= 80) {
    resultado = "5000"
  }
  if ((nro1 >= 64, nro1 < 80)) {
    resultado = "4000"
  }
  if ((nro1 >= 40, nro1 < 64)) {
    resultado = "2500"
  }
  if ((nro1 >= 16, nro1 < 40)) {
    resultado = "1000"
  }
  if ((nro1 >= 0, nro1 < 16)) {
    resultado = "0"
  }
  // saída dos dados
  document.getElementById("calculo").innerHTML =
    "Seu time pontuou " + resultado + " pontos"
}

function calcularSangue() {
  // recupera dados do formulário
  let nro2 = document.getElementById("nro2").value
  // processamento
  let calculo

  resultado = nro2 * 15

  // saída dos dados
  document.getElementById("calculo2").innerHTML =
    "Seu time pontuou " + resultado + " pontos"
}

function verificaChecagem(texto) {
  if (texto == "padrao") {
    document.getElementById("qtdePadrao").disabled =
      !document.getElementById("qtdePadrao").disabled
  }
  if (texto == "kit") {
    document.getElementById("qtdeKit").disabled =
      !document.getElementById("qtdeKit").disabled
  }
  if (texto == "suplemento") {
    document.getElementById("qtdeSuplemento").disabled =
      !document.getElementById("qtdeSuplemento").disabled
  }
  if (texto == "arroz") {
    document.getElementById("qtdeArroz").disabled =
      !document.getElementById("qtdeArroz").disabled
  }
}

function calcularAdicional() {
  let total = 0
  // está checado?
  if (document.getElementById("padrao").checked) {
    total = total + 50 * document.getElementById("qtdePadrao").value
  }
  // está checado ?
  if (document.getElementById("kit").checked) {
    total = total + 25 * document.getElementById("qtdeKit").value
  }
  // está checado ?
  if (document.getElementById("suplemento").checked) {
    total = total + 10 * document.getElementById("qtdeSuplemento").value
  }
  // está checado ?
  if (document.getElementById("arroz").checked) {
    total = total + 5 * document.getElementById("qtdeArroz").value
  }
  document.getElementById("total").innerHTML = "O total é " + total
}
