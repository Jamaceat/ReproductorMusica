const btn_subir = document.querySelector("#subirAudio")
const formulario = document.querySelector("#subiendo")
const cerrar = document.querySelector("#cancelar")
const enviar = document.querySelector("#enviar")
const newMusic = document.querySelector("#newMusic")
const mediaTags = window.jsmediatags
const reproductor = document.querySelector("#reproductor")
// -------------------------------------------------------- URL musica

var blob = window.URL || window.webkitURL
if (!blob) {
	console.log("Your browser does not support Blob URLs :(")
}

const timerization = (seconds) => {
	return `${Math.floor(seconds / 60)}:${
		`${Math.floor(seconds % 60)}`.length > 1
			? Math.floor(seconds % 60)
			: `0${Math.floor(seconds % 60)}`
	}`
}

const agregarMusica = (file) => {
	const url = blob.createObjectURL(file)
	reproductor.src = url
}

reproductor.addEventListener("canplay", (event) => {
	console.log(reproductor.duration % 60)
	console.log(timerization(reproductor.duration))
})

newMusic.addEventListener("change", (event) => {
	const file = event.target.files[0]
	const reproductor = agregarMusica(file)

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
