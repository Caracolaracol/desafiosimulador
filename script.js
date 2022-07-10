// incorporar arrays al simulador
// centro pokemon privatizado, calculadora de costo del servicio de curación

alert("Se privatizó el centro pokemon, ahora curar a tus pokemón tiene un costo! (10 dolares por pokemon, 2 dolares por HP recuperado)") // Actualmente el valor está a 2 dólares el HP, más un costo base de 10 dólares por pokemón.
let repetir = true
while(repetir) { // ciclo para ingresar un número válido de pokemon
    numero = parseFloat(prompt("Ingrese cuántos pokemones tienes"))
    if (numero > 6 || numero < 1 || isNaN(numero)) {
        alert("Número invalido! recuerda que debieras portar entre 1 a 6 pokemones.")
    } else {
        break
    }
}

//variables vacias creadas
let hp1
let hp2
let hp3
let hp4
let hp5
let hp6

let nombre1
let nivel1
let posicion1
let nombre2
let nivel2
let posicion2
let nombre3
let nivel3
let posicion3
let nombre4
let nivel4
let posicion4
let nombre5
let nivel5
let posicion5
let nombre6
let nivel6
let posicion6

//switch para ingresar los datos de cada pokemon
switch(numero) {
    case 1:
        nombre1 = prompt("Ingrese cual es tu primer pokemon(tal vez un Pikachu? un Eevee? o cualquier otro 🥰 )")
        nivel1 = prompt("ingrese el nivel del pokemon")
        posicion1 = 1
        break
    case 2:
        nombre1 = prompt("Ingrese cual es tu primer pokemon (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 )")
        nivel1 = prompt("ingrese el nivel del pokemon")
        posicion1 = 1
        nombre2 = prompt("Ingrese cual es tu segundo pokemon")
        nivel2 = prompt("ingrese el nivel del pokemon")
        posicion2 = 2
        break
    case 3:
        nombre1 = prompt("Ingrese cual es tu primer pokemon (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 )")
        nivel1 = prompt("ingrese el nivel del pokemon")
        posicion1 = 1
        nombre2 = prompt("Ingrese cual es tu segundo pokemon")
        nivel2 = prompt("ingrese el nivel del pokemon")
        posicion2 = 2
        nombre3 = prompt("Ingrese cual es tu tercer pokemon")
        nivel3 = prompt("ingrese el nivel del pokemon")
        posicion3 = 3
        break
    case 4:
        nombre1 = prompt("Ingrese cual es tu primer pokemon (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 )")
        nivel1 = prompt("ingrese el nivel del pokemon")
        posicion1 = 1
        nombre2 = prompt("Ingrese cual es tu segundo pokemon")
        nivel2 = prompt("ingrese el nivel del pokemon")
        posicion2 = 2
        nombre3 = prompt("Ingrese cual es tu tercer pokemon")
        nivel3 = prompt("ingrese el nivel del pokemon")
        posicion3 = 3
        nombre4 = prompt("Ingrese cual es tu cuarto pokemon")
        nivel4 = prompt("ingrese el nivel del pokemon")
        posicion3 = 4
        break
    case 5:
        nombre1 = prompt("Ingrese cual es tu primer pokemon (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 )")
        nivel1 = prompt("ingrese el nivel del pokemon")
        posicion1 = 1
        nombre2 = prompt("Ingrese cual es tu segundo pokemon")
        nivel2 = prompt("ingrese el nivel del pokemon")
        posicion2 = 2
        nombre3 = prompt("Ingrese cual es tu tercer pokemon")
        nivel3 = prompt("ingrese el nivel del pokemon")
        posicion3 = 3
        nombre4 = prompt("Ingrese cual es tu cuarto pokemon")
        nivel4 = prompt("ingrese el nivel del pokemon")
        posicion4 = 4
        nombre5 = prompt("Ingrese cual es tu quinto pokemon")
        nivel5 = prompt("ingrese el nivel del pokemon")
        posicion3 = 5
        break
    case 6:
        nombre1 = prompt("Ingrese cual es tu primer pokemon (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 )")
        nivel1 = prompt("ingrese el nivel del pokemon")
        posicion1 = 1
        nombre2 = prompt("Ingrese cual es tu segundo pokemon")
        nivel2 = prompt("ingrese el nivel del pokemon")
        posicion2 = 2
        nombre3 = prompt("Ingrese cual es tu tercer pokemon")
        nivel3 = prompt("ingrese el nivel del pokemon")
        posicion3 = 3
        nombre4 = prompt("Ingrese cual es tu cuarto pokemon")
        nivel4 = prompt("ingrese el nivel del pokemon")
        posicion4 = 4
        nombre5 = prompt("Ingrese cual es tu quinto pokemon")
        nivel5 = prompt("ingrese el nivel del pokemon")
        posicion3 = 5
        nombre6 = prompt("Ingrese cual es tu ultimo pokemon")
        nivel6 = prompt("ingrese el nivel del pokemon")
        posicion6 = 6
        break
}

// clase pokemon, tres elementos
class Pokemon {
    constructor(nombre, nivel, posicion){
        this.nombre = nombre
        this.nivel = nivel
        this.posicion = posicion
    }
}

const pokemon1 = new Pokemon(nombre1, nivel1, posicion1)
const pokemon2 = new Pokemon(nombre2, nivel2, posicion2)
const pokemon3 = new Pokemon(nombre3, nivel3, posicion3)
const pokemon4 = new Pokemon(nombre4, nivel4, posicion4)
const pokemon5 = new Pokemon(nombre5, nivel5, posicion5)
const pokemon6 = new Pokemon(nombre6, nivel6, posicion6)

const pokemones = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]


alert("Ahora ingrese cuánto HP le falta a cada pokemón") 

switch (numero) { // switch para cada caso de: cantidad de pokemon del usuario/entrenador.
    case 6:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        hp5 = prompt(`A tu ${pokemones[4].nombre} le falta:`)
        hp6 = prompt(`A tu ${pokemones[5].nombre} le falta:`)
        // ciclo while para validar que se ingresen numeros y que a la vez no pregunte denuevo por los datos que sí se ingresaron correctamente.
        while (isNaN(hp1)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[0].posicion} `)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[1].posicion} `)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[2].posicion} `)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        while (isNaN(hp4)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[3].posicion} `)
            hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        }
        while (isNaN(hp5)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[4].posicion} `)
            hp5 = prompt(`A tu ${pokemones[4].nombre} le falta:`)
        }
        while (isNaN(hp6)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[5].posicion} `)
            hp6 = prompt(`A tu ${pokemones[5].nombre} le falta:`)
        }
        break
    case 5:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        hp5 = prompt(`A tu ${pokemones[4].nombre} le falta:`)

        while (isNaN(hp1)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[0].posicion} `)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[1].posicion} `)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[2].posicion} `)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        while (isNaN(hp4)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[3].posicion} `)
            hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        }
        while (isNaN(hp5)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[4].posicion} `)
            hp5 = prompt(`A tu ${pokemones[4].nombre} le falta:`)
        }
        break
    case 4:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)

        while (isNaN(hp1)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[0].posicion} `)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[1].posicion} `)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[2].posicion} `)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        while (isNaN(hp4)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[3].posicion} `)
            hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        }
        break
    case 3:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)

        while (isNaN(hp1)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[0].posicion} `)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[1].posicion} `)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[2].posicion} `)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        break
    case 2:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        hp2 = prompt(`a tu ${pokemones[1].nombre} le falta:`)

        while (isNaN(hp1)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[0].posicion} `)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[1].posicion} `)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        break
    case 1:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)

        while (isNaN(hp1)) {
            alert(`ingresaste datos no validos a tu pokemon n°${pokemones[0].posicion} `)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        break
    default:
        alert("Numero no válido, sólo coloca el numero")
}


// calculadora de precio del servicio se sanacion pokemon
if (isNaN(numero) || numero > 6) {
    alert("Inténtalo denuevo")
} else {
    function calculadorPoke (pokeNumber = 1, dolar = 10) { // funcion para calcular costo base 
        return pokeNumber * dolar
    }
    let  costoBase = calculadorPoke(numero)
    
    function calculadorHp(hp1 = 0, hp2 = 0, hp3 = 0, hp4 = 0, hp5 = 0, hp6 = 0) { // funcion para calcular costo total por hp
        return 2 * hp1 + 2 * hp2 + 2 * hp3 + 2 * hp4 + 2 * hp4 + 2 * hp5 + 2 * hp6
    }
    const costoHp = calculadorHp(hp1, hp2, hp3, hp4, hp5, hp6)
    
    
    function sumarCosto(pokeNumber = 1, hpNumber = 0) { // funcion para sumar ambos costos.
        const costoCura = costoBase + costoHp
        return costoCura
    }
    let costoTotal = sumarCosto(costoBase, costoHp)
    
    alert(`Curar a tus pokemon cuesta ${costoTotal} dolares!`)
}









