var palabras = ['mesa','casa','radio','luna','HTML'];
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
}seleccionarPalabra()

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