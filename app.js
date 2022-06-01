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

function verificarLetraCliceada(key){
    if (letras.length<1 || letras.indexOf(key)<0){
        letras.push(key)
        return false
    }else{
        letras.push(key)
        return true
    }

}

function adicionarLetracorrecta(){
    palabraCorrecta += palabrasSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter){
    if (palabrasSecreta.indexOf(letter)<=0){
        fallos -= 1
    }
}



document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if(!verificarLetraCliceada(e.key)){
        if(palabrasSecreta.includes(letra)){
            console.log(letra)
            adicionarLetracorrecta(palabrasSecreta.indexOf(letra))
            for (let i=0;i<palabrasSecreta.length;i++){
                if(palabrasSecreta[i]===letra){
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