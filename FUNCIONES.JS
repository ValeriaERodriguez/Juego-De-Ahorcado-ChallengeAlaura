

document.addEventListener('keydown',function(event){ 

    let regla=new RegExp('[A-Za-z]')
    if(regla.test(event.key)){
        if (letras.includes(event.key)){

        }else{
            letras.push(event.key)
            console.log(event.key)
            if(gameOver==false){
                jugar(event.key)
            }
           
        
        
        }
   
    }
        
   
})

function agregarPalabra(){
   
    let input=document.getElementById('inputNuevaPalabra');
    input.style.visibility="";
    gameOver=true;

   
}
function guardar(){
    let input=document.getElementById('inputNuevaPalabra');
    let palabra=input.value;
    sessionStorage.setItem('newPalabra',palabra);
    gameOver=false;
    location.reload();
    newGame();
    iniciar();
   
}



function rendirte(){
    location.href="index.html"
}

function nuevaPalabra(){
    location.href="palabra.html"
}


function cargarPalabra(){
   // let input=document.getElementById("input-letra")
   // input.addEventListener('input',function(){alert(this.value)})
    console.log(palabras)
    //let palabra=document.querySelector(".palabra")
    //let divInput=document.querySelector("#input-letra")
    let tabla=document.getElementById("tablero")
    let tr=document.createElement("tr")
    let trbase=document.createElement("tr")
   // palabra.textContent=palabras[aleatorio()]
    let frase=palabras[aleatorio()]
    
    //divInput.textContent=frase
    let palabraElejida=frase.split('')
    for(let i=0; i<palabraElejida.length; i++){
        let nodo=document.createElement("td")
        nodo.classList.add(palabraElejida[i])
        nodo.style.visibility="hidden"
        nodo.textContent=palabraElejida[i]
        tr.appendChild(nodo)
        let nodo2=document.createElement("td")
        nodo2.textContent="__"
        trbase.appendChild(nodo2)
    }
    tr.classList.add("tr-palabra")
    tabla.appendChild(tr)
    trbase.classList.add("tr-base")
    tabla.appendChild(trbase)
    console.log(tabla)
}

