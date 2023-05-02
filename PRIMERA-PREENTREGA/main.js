// Simulador de préstamo y pago en cuotas con un maximo de 24 y un ínteres del 5%.

for(let i = 1; i<=100;i++){
    const prestamo = parseInt(prompt("Por favor ingrese la cantidad deseada: "))
    const numeroCuotas = parseInt(prompt("Por favor ingrese la cantidad de cuotas (Máx.24): "))

    const calculadorDePagos = (prestamo, numeroCuotas) => {
        const importeConInteres = (prestamo * 0.5) + prestamo
        return importeConInteres/numeroCuotas
    }

    if(prestamo > 0 && numeroCuotas <= 24){
        alert(`La cantidad a pagar es de ${calculadorDePagos(prestamo,numeroCuotas)}$ en ${numeroCuotas} meses (Interes:${prestamo * 0.5}$)`)
    }
    else{
        alert("No se puede hacer el prestamo(Num. Max. de cuotas 24)")
    };
    }



