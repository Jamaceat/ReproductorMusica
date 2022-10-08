// -------------------------------------------- Variables y constantes
const btn_subir = document.querySelector("#subirAudio")
const formulario = document.querySelector("#subiendo")
const cerrar = document.querySelector("#cancelar")
const enviar = document.querySelector("#enviar")
const newMusic = document.querySelector("#newMusic")
const mediaTags = window.jsmediatags
const reproductor = document.querySelector("#reproductor")
const lista = document.querySelector("#listaCanciones")
var agregar = false
var file
// -----------------------------------------------------Storage

let canciones = window.localStorage.getItem("canciones")
let listaLocal = []

if (canciones) {
	listaLocal = JSON.parse(canciones)
}

const crearStorage = (primerElemento) => {
	if (!canciones)
		canciones = window.localStorage.setItem(
			"canciones",
			JSON.stringify([primerElemento])
		)
}

const songConstructor = (id, url, title, author, img) => {
	return {}
}
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
	const urlmusica = blob.createObjectURL(file)
	reproductor.src = urlmusica
}

reproductor.addEventListener("canplay", (event) => {})

newMusic.addEventListener("change", (event) => {
	file = event.target.files[0]
	agregarMusica(file)
})

let nuevacancion = {}

console.log(newMusic)

btn_subir.addEventListener("click", () => {
	formulario.style.display = "flex"
	agregar = true
})

cerrar.addEventListener("click", (event) => {
	event.preventDefault()
	formulario.style.display = "none"
	agregar = false
})

enviar.addEventListener("click", (event) => {
	event.preventDefault()

	const url = reproductor.src
	// listaLocal.push({id: listaLocal.length, url})
	// window.localStorage.setItem("canciones", JSON.stringify(listaLocal))
	var agregando
	mediaTags.read(file, {
		onSuccess: function (tag) {
			{
				console.log(tag)
				const {title, artist} = tag.tags
				agregando = item(title, artist, timerization(reproductor.duration))
				lista.innerHTML += agregando
			}
		},
		onError: function (error) {
			console.log(error)
		},
	})
	formulario.style.display = "none"
})
