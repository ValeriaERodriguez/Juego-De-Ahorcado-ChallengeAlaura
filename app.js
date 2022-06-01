var palabras = ['mesa','casa','radio','luna','HTML'];
var tablero = document.getElementById('horca').getContext('2d');
var letras = [];
var intentos = 7
var palabraCorrecta = "";
var fallos = 9;

function seleccionarPalabra (palabras){
    var totalPalabras = palabras.length - 1;
    var aleatoria = (Math.random() * totalPalabras).toFixed(0);
    palabras = palabras[aleatoria].toLowerCase();
    pintarPalabra(palabras);
}

function probar(event){
    comprobarLetra(event.target.textContent);
}

function pintarPalabra(){
    var str = "";
    var letras = palabras.split("");

    letras.forEach(l,1) => {
        if (concordacia.includes(l)){
            str +=
        }else{
            concordacia[i] = ´_´;

        };
    };
    document.getElementById(palabras).innerHTML = str;
}

function abc(){
    var a = 97;
    var z = 123;
    var letra = document.getElementById("letras");

    for(var l = a; 1 < z; l ++){
        const char = String.fromCharCode(l);
    }
}