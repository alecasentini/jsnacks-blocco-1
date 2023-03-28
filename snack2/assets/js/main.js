const parola1 = prompt ("Scrivi una parola")
const parola2 = prompt ("Scrivi una parola")

if(parola1.length === parola2.length){
    console.log(`${parola1} è lunga come ${parola2}`)
}
else if(parola1.length > parola2.length){
console.log(`${parola1} è lunga più di ${parola2}`)
}
else{
    console.log(`${parola1} è più corta di ${parola2}`)
}
