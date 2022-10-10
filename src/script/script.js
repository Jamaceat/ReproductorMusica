// -------------------------------------------- Variables y constantes
const btn_subir = document.querySelector("#subirAudio")
const formulario = document.querySelector("#subiendo")
const cerrar = document.querySelector("#cancelar")
const enviar = document.querySelector("#enviar")
const newMusic = document.querySelector("#newMusic")
const mediaTags = window.jsmediatags
const reproductor = document.querySelector("#reproductor")
const lista = document.querySelector("#listaCanciones")
var file = []
// -----------------------------------------------------blob

var blob = window.URL || window.webkitURL
if (!blob) {
	console.log("Your browser does not support Blob URLs :(")
}

// ------------------------------------------------------------Storage
let listaLocal = []

const agregarLista = () => {
	var agregando

	mediaTags.read(file[file.length - 1], {
		onSuccess: function (tag) {
			{
				const {title, artist} = tag.tags
				agregando = item(title, artist, timerization(reproductor.duration))
				const ti = document.querySelector("#titleh4")
				ti.textContent = title
				lista.innerHTML += agregando
				playbuttons = document.querySelectorAll("#playButton")
				deletebuttons = document.querySelectorAll("#deleteButton")

				Array.from(playbuttons).forEach((x, i) => {
					console.log("Play index: ", i)

					const title =
						x.parentElement.parentElement.children[0].textContent.trim()
					const author =
						x.parentElement.parentElement.children[1].textContent.trim()

					x.addEventListener("click", () => {
						document.querySelector("#titleh4").textContent = title
						reproductor.src = blob.createObjectURL(file[i])
						reproductor.play()
					})
				})
			}
		},
		onError: function (error) {
			console.log(error)
		},
	})
}

// -------------------------------------------------------- URL musica

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
	file.push(event.target.files[0])
	agregarMusica(file[file.length - 1])
})

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
	listaLocal.push({id: listaLocal.length, url})
	agregarLista()
	formulario.style.display = "none"
})
