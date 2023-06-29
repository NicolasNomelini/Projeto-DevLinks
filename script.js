function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Agente da Divison,portando um fuzil e vestindo um casaco escuro com o relogio SHD brilhando"
    )
    document.getElementById("perfil").innerHTML = "@AGENTEDIVISION"
    document.getElementById("historiagame").innerHTML = "The Divison"
    document.getElementById("consequenciasgame").innerHTML = "The Divison 2"

    historiagame.href =
      "https://pt.wikipedia.org/wiki/Tom_Clancy%27s_The_Division#:~:text=The%20Division%20ocorre%20em%20Nova,com%20outros%20agentes%20da%20Division."
    consequenciasgame.href =
      "https://pt.wikipedia.org/wiki/Tom_Clancy%27s_The_Division_2"
    futurogame.href =
      "https://www.ubisoft.com/pt-br/game/the-division/the-division-2/news-updates/6VafF8uQZXc9tYGNSIInGi/o-futuro-de-the-division"

    toinstagram.href = "https://www.instagram.com/ubisoftbrasil/"
    toyoutube.href = "https://www.youtube.com/@Ubisoftbrasil"
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Geralt de Rivia,manuseando sua espada")
    document.getElementById("perfil").innerHTML = "@LOBOBRANCO"
    document.getElementById("historiagame").innerHTML = "The Witcher"
    document.getElementById("consequenciasgame").innerHTML = "The Witcher 3"

    historiagame.href = "https://pt.wikipedia.org/wiki/The_Witcher"
    consequenciasgame.href =
      "https://pt.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt"
    futurogame.href =
      "https://meups.com.br/noticias/cd-projekt-red-recursos-para-the-witcher-4/"

    toinstagram.href = "https://www.instagram.com/cdpr_br/"
    toyoutube.href = "https://www.youtube.com/@CDPRED"
  }
}
