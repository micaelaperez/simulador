do {
    let monto = parseInt(prompt("¿Cuando dinero queres invertir en tu plazo fijo?"));
    let plazo = parseInt(prompt("Ingresa el plazo"));

    const sumar = (a, b) => { return a + b };

    function calculadorInteres(tasaInteres) {
        return monto * ((tasaInteres / 100) * plazo / 365);
    }

    function montoFinal(interes) {
        return sumar(monto, interes);
    }

    if (plazo > 0) {
        let interes = calculadorInteres(43.50);
        let montoACobrar = montoFinal(interes);
        console.log("El interes ganado es de : $ " + interes);
        alert("El monto a cobrar dentro de " + plazo + " dias es de $ " + montoACobrar);
    } else {
        alert("Error en el plazo, por favor ingresar un plazo mayor a 0");
    }

    pregunta = prompt("¿Desea calcular otro plazo fijo?\nIngrese no para salir")

} while (pregunta != "no");