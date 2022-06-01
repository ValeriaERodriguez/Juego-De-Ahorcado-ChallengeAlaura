var palabras = ['MESA','CASA','RADIO','LUNA','HTML'];
var tablero = document.getElementById('horca').getContext('2d');
var letras = [];
var intentos = 7
var palabraCorrecta = "";
var fallos = 9;

function seleccionarPalabra(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabrasSecreta = palabra
    console.log(palabra)
    return palabra
}

function dibujarLineas(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()

    var ancho = 600/palabrasSecreta.length
    for(let i = 0; i < palabrasSecreta.length; i++){
        tablero.moveTo(500+(ancho*i),640)
        tablero.lineTo(500+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(seleccionarPalabra());


function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    var ancho = 600/palabrasSecreta.length
    tablero.fillText(palabrasSecreta[index], 505+(ancho*index),620)
}

function escribirLetraIncorrecta(letra, fallos){
    tablero.font = 'bold 40px';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    tablero.fillText(letra, 535+(40*(10-fallos)), 710,40)

}
function probar(event){
    comprobarLetra(event.target.textContent);
}



function abc(){
    var a = 97;
    var z = 123;
    var letra = document.getElementById("letras");

    for(var l = a; 1 < z; l ++){
        const char = String.fromCharCode(l);
    }
}