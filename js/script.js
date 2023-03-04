let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja4 = document.getElementById("caja4");

let btn1 = document.getElementById("boton1");
let btn2 = document.getElementById("boton2");
let btn3 = document.getElementById("boton3");
let btn4 = document.getElementById("boton4");



function mostrar(boton){
    if(boton.id=="boton1"){
        animar(caja1);
    }else if(boton.id=="boton2"){
        animar(caja2);
    }else if(boton.id=="boton3"){
      animar(caja3);
    }else if(boton.id=="boton4"){
      animar(caja4);
    }
}

function ocultar(){
    caja1.classList.add('hidden');
    caja1.classList.add('visuallyhidden');

    caja2.classList.add('hidden');
    caja2.classList.add('visuallyhidden');

    caja3.classList.add('hidden');
    caja3.classList.add('visuallyhidden');

    caja4.classList.add('hidden');
    caja4.classList.add('visuallyhidden');
}

function animar(elemento){
    ocultar()
    if (elemento.classList.contains('hidden')) {
        elemento.classList.remove('hidden');
        setTimeout(function () {
          elemento.classList.remove('visuallyhidden');
        }, 20);
      } else {
        ocultar()
         elemento.classList.add('visuallyhidden');    
        elemento.addEventListener('transitionend', function(e) {
          elemento.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        }); 
       } 
}
