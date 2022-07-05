// Desafio 1
// simulador interactivo
// pedir datos al usuario, hacer una pequeña modificación, mostrar el resultado en la consola mediante una SpeechRecognitionAlternative, cualquier cosa que pida al usuario, excepto una calculadora
// integrar variables, condicionales, ciclos y funciones

// Mi desafío es el siguiente: Se privatizó el centro pokemon, ahora curar a tus pokemón tiene un costo, se pedirá al usuario cuántos pokemones tiene, de que nivel son y se calculará el valor de la cura.

alert("Se privatizó el centro pokemon, ahora curar a tus pokemón tiene un costo! (10 dolares por pokemon, 2 dolares por HP recuperado)") // Actualmente el valor está a 2 dólares el HP, más un costo base de 10 dólares por pokemón.

let repetir = true

while(repetir) { // ciclo para ingresar un número válido de pokemon
    numero = parseFloat(prompt("Ingrese cuántos pokemones tienes"))
    if (numero > 6 || numero < 1) {
        alert("Número invalido! recuerda que debieras portar entre 1 a 6 pokemones.")
    } else {
        break
    }
}
console.log(numero)
alert("Ahora ingrese cuánto HP le falta a cada pokemón")

let hp1
let hp2
let hp3
let hp4
let hp5
let hp6

switch(numero) { // switch para cada caso de cantidad de pokemon del usuario/entrenador.
    case 6:
        hp1 = prompt("A tu pikachu le falta:")
        hp2 = prompt("a tu eevee le falta:")
        hp3 = prompt("a tu charmander le falta:")
        hp4 = prompt("a tu lugia le falta:")
        hp5 = prompt("a tu ditto le falta:")
        hp6 = prompt("a tu magikarp le falta:")
        break
    case 5:
        hp1 = prompt("A tu pikachu le falta:")
        hp2 = prompt("a tu eevee le falta:")
        hp3 = prompt("a tu charmander le falta:")
        hp4 = prompt("a tu lugia le falta:")
        hp5 = prompt("a tu ditto le falta:")
        break
    case 4:
        hp1 = prompt("A tu pikachu le falta:")
        hp2 = prompt("a tu eevee le falta:")
        hp3 = prompt("a tu charmander le falta:")
        hp4 = prompt("a tu lugia le falta:")
        break
    case 3:
        hp1 = prompt("A tu pikachu le falta:")
        hp2 = prompt("a tu eevee le falta:")
        hp3 = prompt("a tu charmander le falta:")
        break
    case 2:
        hp1 = prompt("A tu pikachu le falta:")
        hp2 = prompt("a tu eevee le falta:")
        break
    case 1:
        hp1 = prompt("A tu pikachu le falta:")
        break
    default:
        alert("Numero no válido, sólo coloca el numero")
}

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

