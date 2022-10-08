const btn_subir = document.querySelector("#subirAudio")
const formulario = document.querySelector("#subiendo")
const cerrar = document.querySelector("#cancelar")
const enviar = document.querySelector("#enviar")
const newMusic = document.querySelector("#newMusic")
const mediaTags = window.jsmediatags

// -------------------------------------------------------- URL musica

var blob = window.URL || window.webkitURL
if (!blob) {
	console.log("Your browser does not support Blob URLs :(")
}

newMusic.addEventListener("change", (event) => {
	const file = event.target.files[0]
	const reproductor = document.querySelector("#reproductor")
	const url = blob.createObjectURL(file)
	reproductor.src = url
	mediaTags.read(file, {
		onSuccess: function (tag) {
			{
				console.log(tag)
			}
		},
		onError: function (error) {
			console.log(error)
		},
	})
})

// ----------------------------------------------------------------

let canciones = window.localStorage.getItem("canciones")
let listaLocal = []

if (canciones) {
	listaLocal = JSON.parse(canciones).canciones
}

const crearStorage = (primerElemento) => {
	if (!canciones)
		canciones = window.localStorage.setItem(
			"canciones",
			JSON.stringify([primerElemento])
		)
}

let nuevacancion = {}

console.log(newMusic)

btn_subir.addEventListener("click", () => {
	formulario.style.display = "flex"
})

cerrar.addEventListener("click", (event) => {
	event.preventDefault()
	formulario.style.display = "none"
})

enviar.addEventListener("click", (event) => {
	event.preventDefault()
})
