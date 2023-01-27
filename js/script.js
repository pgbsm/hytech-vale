let btnDrop = document.getElementById("btn-drop")
let oculto = document.getElementById("drop")

btnDrop.onclick = function () {
    btnDrop.value = 'VER MENOS'
    btnDrop.classList.remove(".oculto")
}

function myFunction() {
    document.getElementById('myTopnav').classList.toggle('responsive')
}

function toogle() {
    document.getElementById('burger').classList.toggle('active')
}
