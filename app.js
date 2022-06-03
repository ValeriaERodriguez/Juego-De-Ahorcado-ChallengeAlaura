var palabras = ['MESA','CASA','RADIO','LUNA','HTML'];
var tablero = document.getElementById('horca').getContext('2d');
var letras = [];
var intentos = 7
var palabraCorrecta = "";
var fallos = 9;

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
    tablero.lineWidth = 10;
    tablero.lineCap = "square"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    var ancho = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505+(ancho*index),620)
}

function escribirLetraIncorrecta(letra, fallos){
    tablero.font = 'bold 40px';
    tablero.lineWidth = 10
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

function mostrarImagen(numIntentos){
    switch (numIntentos) {
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
