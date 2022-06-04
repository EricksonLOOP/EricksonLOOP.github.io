const question = document.querySelector(".continuar-question")
const projetos = document.querySelector(".projetos")

const continuarquestion = () => question.classList.toggle("continuar")
projetos.addEventListener("click", continuarquestion)
