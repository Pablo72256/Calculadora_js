//Declaracion de variables
let acumulador = 0
let flag = true
let mostrar = ""
let operacion = "igual"

//Funciones para añadir numeros del 0 al 9
function añadirUno(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar + 1
  mostrarPantalla()
}

function añadirDos(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 2
  mostrarPantalla()
}

function añadirTres(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 3

  mostrarPantalla()

}

function añadirCuatro(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 4
  mostrarPantalla()

}

function añadirCinco(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 5
  mostrarPantalla()

}

function añadirSeis(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 6
  mostrarPantalla()

}

function añadirSiete(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 7
  mostrarPantalla()

}

function añadirOcho(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 8
  mostrarPantalla()
}

function añadirNueve(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 9
  mostrarPantalla()
}

function añadirCero(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + 0
  mostrarPantalla()
}

function añadirDecimales(){
  if (flag==false){
    mostrar = ""
    flag = true
  }
  mostrar = mostrar  + "."
  mostrarPantalla()
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
