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
  document.documentElement.setAttribute("data-theme", "night")
}
