// seleccionamos los elemento del DOM
let num1= document.querySelector("#num1");
let num2= document.querySelector("#num2");
let respuesta_usuario= document.querySelector("#respuesta_usuario");
let msj_correccion= document.querySelector("#msj_correccion")
console.log(msj_correccion);
let operacion= document.querySelector("#operacion");
let operacion_actual;
//en n1 y n2 voy a guardar los numeros aletarios de cada operacion
let n1 , n2;

// Esta funcion la creamos luego, cuando tengamos listo los estilos
function activarBoton(idBoton){
    document.getElementById("suma").className="";
    document.getElementById("resta").className="";
    document.getElementById("producto").className="";
    document.getElementById("division").className="";
    document.getElementById(idBoton).className="activado";
}
// funcion Sumar
function btnSumar() {
    // limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = " ";
    //agregamos la clase activa al boton Suma y la quitamos del resto
    activarBoton("suma");
    operacion_actual="+";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML= "+";
    //generamos los números aleatorios de la suma
    nuevaSuma();
}
function nuevaSuma() {
    //generamos dos número aleatorios entre 0 y 99
    n1= parseInt(Math.random()*100);
    n2= parseInt(Math.random()*100);
    //asignamos los número a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el cursor en el input
    respuesta_usuario.focus();
}

//Funcion producto
function btnProducto() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = " ";
    //agregamos la clase activa al boton Producto y la quitamos del resto
    activarBoton("producto");
    operacion_actual="*";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML= "x";
    //generamos los números aleatorios del producto
    nuevoProducto();
}
function nuevoProducto() {
    //generamos dos número aleatorios entre 0 y 9
    n1= parseInt(Math.random()*10);
    n2= parseInt(Math.random()*10);
    //asignamos los número a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el cursor en el input
    respuesta_usuario.focus();
}

// funcion Resta
function btnResta(){
    // limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton Resta y la quitamos del resto
    activarBoton("resta");
    operacion_actual="-";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML= "-";
    //generamos los números aleatorios de la suma
    nuevaResta();
}
function nuevaResta() {
    //generamos dos número aleatorios entre 0 y 99
    n1= parseInt(Math.random()*100);
    n2= parseInt(Math.random()*100);
    let nn1;
    if (n1 <= n2){
        nn1= n2+2*n1
    }else nn1= n1;
    //asignamos los número a las etiquetas
    num1.innerHTML = nn1;
    num2.innerHTML = n2;
    //colocamos el cursor en el input
    respuesta_usuario.focus();
    // console.log(n1)
    // console.log(n2)
    // console.log(nn1)
}

// funcion División
function btnDivision(){
    // limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton Resta y la quitamos del resto
    activarBoton("division");
    operacion_actual="/";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML= "/";
    //generamos los números aleatorios de la suma
    nuevaDivision();
}
function nuevaDivision() {
    //generamos dos número aleatorios entre 0 y 99
    n2= parseInt(Math.random()*10);
    n1= n2 * (parseInt(Math.random()*10)+1);
    console.log(n1)
    console.log(n2) 
    if(n1===0){
        n1=1;
    }
    if(n2===0){
        n2=n1;
    }
    //asignamos los número a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el cursor en el input
    respuesta_usuario.focus();
    console.log(n1)
    console.log(n2)
    console.log (n1/n2)
}

//funcion  que controla si la respuesta es correcta
function corregir(){
    // si el usuario no ha ingresado nada, no continúa
    if(respuesta_usuario.value==""){
        return;
    }
    let solucion;
    //armo la operacion que se genero en una variable y veo cual es le resutaldo
    //usamos el + para contatenar las cadenas
    let operacion= n1+" "+ operacion_actual+" "+n2;
    solucion= eval(operacion);

    //creo una elemento i para agregar el icono de correcto o incorrecto
    var i = document.createElement("i");
    //controlo si coincide lo que el usuario respondio con la solucion
    if(respuesta_usuario.value == solucion){
        i.className = "fa-regular fa-face-grin";
    }else{
        i.className = "fa-regular fa-face-frown";
    }
    msj_correccion.appendChild(i);

    //controlo en que tipo de operacion estoy para generar una nueva operacion
    if(operacion_actual == "+"){
        nuevaSuma();
    }else if(operacion_actual == "-"){
        nuevaResta();
    }else if(operacion_actual == "*"){
        nuevoProducto();
    }else if(operacion_actual == "/"){
        nuevaDivision();
    }
    // limpio el input 
    respuesta_usuario.value= " ";
}

// llamar agrego al input el evento onkeydown para detectar cuando se presiona el Enter y
//directamente la fucion corregir()
respuesta_usuario.onkeydown = function(e){
    let ev = document.all ? window.event :e;
    if (ev.keyCode ==13){
        corregir();
    }
}
