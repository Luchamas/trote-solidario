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
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute("data-theme")
  let newTheme
 //caso o novo tema seja luz trocar para noite, caso contrario deixar no luz
  newTheme = dataTheme === "light" ? "night" : "light"

  rootElem.setAttribute("data-theme", newTheme)
 // local storage é onde fica armazenado as informações de qual tema está
  localStorage.setItem("theme", newTheme)
}
//pega a informação do local storage
let localS = localStorage.getItem("theme")
//caso o night esteja no local storage ele define a pagina para o tema noturno
if (localS === "night") {
  document.documentElement.setAttribute("data-theme", "night" )
}
