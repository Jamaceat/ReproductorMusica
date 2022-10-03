const btn_subir = document.querySelector("#subirAudio")
const formulario = document.querySelector("#subiendo")
const cerrar = document.querySelector("#cancelar")

btn_subir.addEventListener("click", () => {
	formulario.style.display = "flex"
	console.log(formulario.firstChild)
})

cerrar.addEventListener("click", (event) => {
	event.preventDefault()
	formulario.style.display = "none"
})

console.log(formulario)
