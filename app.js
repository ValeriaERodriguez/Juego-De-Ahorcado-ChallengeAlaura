var palabras = ['MESA','CASA','RADIO','LUNA','HTML'];
var tablero = document.getElementById('horca').getContext('2d');
var letras = [];
var intentos = 7
var palabraCorrecta = "";
var fallos = 6;

function seleccionarPalabra(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabra
}

function dibujarLineas(){
    tablero.lineWidth = 10;
    tablero.lineCap = "square"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()

    var ancho = 600/palabraSecreta.length
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500+(ancho*i),640)
        tablero.lineTo(500+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(seleccionarPalabra());


function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px';
    tablero.lineWidth = 6;
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    var ancho = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505+(ancho*index),620)
}

function escribirLetraIncorrecta(letra, fallos){
    tablero.font = 'bold 40px';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    tablero.fillText(letra, 535+(40*(10-fallos)), 710,40)

}

function verificarLetraCliceada(key){
    if (letras.length<1 || letras.indexOf(key)<0){
        letras.push(key)
        return false
    }else{
        letras.push(key)
        return true
    }

}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function adicionarLetraIncorrecta(letter){
    if (palabraSecreta.indexOf(letter)<=0){
        fallos -= 1
        console.log("Perdiste la partida");
       /* const imagenDeErros = general;*/
    };
}



document.onkeydown = (e) => {
    let letra=e.key.toUpperCase();
    if(!verificarLetraCliceada(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra)
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for (let i=0;i<palabraSecreta.length;i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i)
                }
            }
        }
        else{
            if(!verificarLetraCliceada(e.key)) return
            adicionarLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra,fallos)
        }
    }
};

function mostrarImagen(fallos){
    switch (fallos) {
        case 0:
            document.getElementById("img7").style.visibility = "visible";
            break;
        case 1:
            document.getElementById("img6").style.visibility = "visible";
            break;
        case 2:
            document.getElementById("img5").style.visibility = "visible";
            break;
        case 3:
            document.getElementById("img4").style.visibility = "visible";
            break;
        case 4:
            document.getElementById("img3").style.visibility = "visible";
            break;
        case 5:
            document.getElementById("img2").style.visibility = "visible";
            break;
        case 6:
            document.getElementById("img1").style.visibility = "visible";
            break;
}
}
/*
Funcion winner(intentos):
Con esta funcion simplemente vuelvo a ocultar las partes del ahorcado
y muestro una con el mensaje de ganar
*/
function winner(){
    document.getElementById("img7").style.visibility = "hidden";
    document.getElementById("img6").style.visibility = "hidden";
    document.getElementById("img5").style.visibility = "hidden";
    document.getElementById("img4").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img1").style.visibility = "hidden";
    document.getElementById("img8").style.visibility = "visible";
}




function alertaGanado(estado){
    alert("Felicidades,ganaste!")
}
function alertaPerdido(palabra){
    alert("Lo siento, perdiste.. la palabra era... "  + palabra)
}
nuevoJuego()
const inicio =document.querySelector(".botones");
const agregar=document.querySelector("#adicionar");
const btnAgregar= document.querySelector(".agregar");


btnAgregar.addEventListener("click",function(event){
    event.preventDefault()
    agregar.style.display="";
    inicio.style.display="none";
});
window.addEventListener("load",()=>{
    agregar.style.display="none";
})
/*let adicionar=document.querySelector("#agrega")
adicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#palabra")
let adicional= form.value
   console.log(adicional)
})*/
const adicionar=document.querySelector("#agrega")
adicionar.addEventListener("click",function (capturar){
    capturar.preventDefault(); 
    var tx=document.getElementById("palabra").value;
    var tx=tx
if (tx.length===0 || /^\s+$/.test(tx)){
    alert("escribe una palabra")
}
else if(/[^A-Z ]/.test(tx)){
    alert("solo parabras mayúsculas y sin Tilde")
}else {
    alert("GUARDADO") 
    localStorage.setItem("daniel",tx);
}

})