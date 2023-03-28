let numbers = []

for (let i = 0; i < 6; i++){
    const numero = parseFloat (prompt ("Inserisci un numero"))
    if (numero % 2 !=0){
        numbers.push(numero)
    }  
}
console.log(`i numeri dispari inseriti sono ${numbers}`)