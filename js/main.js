
//Mostar, variable que muestra los numeros pulsados y los resultados
let mostrar = ""
//Flag, variable para saber si se debe limpiar mostrar, para añadir a mostrar un numero nuevo
let flag = true
//Acumulador, variable auxiliar para guardarnos una copia de la variable mostar y operar con ambas
let acumulador = 0
//Operacion, variable que almacena la ultima operacion seleccionada
let operacion = "igual"

//Funciones para añadir numeros del 0 al 9
function añadirUno(){
  comprobarFlag()
  mostrar = mostrar + 1
  mostrarPantalla()
}

function añadirDos(){
  comprobarFlag()
  mostrar = mostrar  + 2
  mostrarPantalla()
}

function añadirTres(){
  comprobarFlag()
  mostrar = mostrar  + 3
  mostrarPantalla()
}

function añadirCuatro(){
  comprobarFlag()
  mostrar = mostrar  + 4
  mostrarPantalla()
}

function añadirCinco(){
  comprobarFlag()
  mostrar = mostrar  + 5
  mostrarPantalla()
}

function añadirSeis(){
  comprobarFlag()
  mostrar = mostrar  + 6
  mostrarPantalla()
}

function añadirSiete(){
  comprobarFlag()
  mostrar = mostrar  + 7
  mostrarPantalla()
}

function añadirOcho(){
  comprobarFlag()
  mostrar = mostrar  + 8
  mostrarPantalla()
}

function añadirNueve(){
  comprobarFlag()
  mostrar = mostrar  + 9
  mostrarPantalla()
}

function añadirCero(){
  comprobarFlag()
  mostrar = mostrar  + 0
  mostrarPantalla()
}

function añadirDecimales(){
  comprobarFlag()
  mostrar = mostrar  + "."
  mostrarPantalla()
}

function comprobarFlag(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
}

function mostrarPantalla(){
  document.getElementById("mensaje").innerHTML = mostrar
}

function realizarOperacion() {
  if (operacion == "suma"){
    acumulador += Number(mostrar)
  }else if (operacion == "resta"){
    acumulador -= Number(mostrar)
  }else if (operacion == "multiplicacion"){
    acumulador *= Number(mostrar)
  }else if (operacion == "division"){
    acumulador /= Number(mostrar)
  }else if (operacion == "porcentaje"){
    acumulador = (Number(mostrar) * acumulador) / 100
  }else if (operacion == "igual"){
    acumulador = Number(mostrar)
  }
  mostrar = String(acumulador)
  flag=false
}

function suma(){
  realizarOperacion()
  operacion = "suma"
  mostrarPantalla()
}

function resta(){
  realizarOperacion()
  operacion = "resta"
  mostrarPantalla()
}

function multiplicacion(){
  realizarOperacion()
  operacion = "multiplicacion"
  mostrarPantalla()
}

function division(){
  realizarOperacion()
  operacion = "division"
  mostrarPantalla()
}

function porcentaje(){
  realizarOperacion()
  operacion = "porcentaje"
  mostrarPantalla()
}

//Funcion del boton "="
function total(){
  realizarOperacion()
  operacion = "igual"
  mostrarPantalla()
}

//Funcion de boton "C"
function limpiar(){
  flag = false
  acumulador = 0
  mostrar = "0"
  mostrarPantalla()
}

document.getElementById("uno").addEventListener("click", añadirUno)
document.getElementById("dos").addEventListener("click", añadirDos)
document.getElementById("tres").addEventListener("click", añadirTres)
document.getElementById("cuatro").addEventListener("click", añadirCuatro)
document.getElementById("cinco").addEventListener("click", añadirCinco)
document.getElementById("seis").addEventListener("click", añadirSeis)
document.getElementById("siete").addEventListener("click", añadirSiete)
document.getElementById("ocho").addEventListener("click", añadirOcho)
document.getElementById("nueve").addEventListener("click", añadirNueve)
document.getElementById("cero").addEventListener("click", añadirCero)
document.getElementById("decimal").addEventListener("click", añadirDecimales)

document.getElementById("suma").addEventListener("click", suma)
document.getElementById("resta").addEventListener("click", resta)
document.getElementById("multiplicacion").addEventListener("click", multiplicacion)
document.getElementById("division").addEventListener("click", division)
document.getElementById("porcentaje").addEventListener("click", porcentaje)

document.getElementById("C").addEventListener("click", limpiar)

document.getElementById("total").addEventListener("click", total)

limpiar()
