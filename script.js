function calcularKit() {
  // recupera dados do formulário
  let nro1 = document.getElementById("nro1").value
  // processamento
  let calculo
  if (nro1 > 80) {
    resultado = 5000 + (nro1 - 80) * 50
  }
  if (nro1 == 80) {
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

function trocaSwitch() {
  // vamos obter a página ou documento HTML
  // na verdade, obteremos o elemento html (root)
  const html = document.documentElement
  // vamos verificar se no documento tem a classe claro
  // if é o comando se
  if (html.classList.contains("light")) {
    // como o documento tem a classe claro, vamos remover
    html.classList.remove("light")
    html.classList.add("night")
  } else {
    // como o documento não tem a classe claro, vamos adicionar
    html.classList.add("light")
    html.classList.remove("night")
  }
}