
/*
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. */

alert("Vamos calcular alguns números")
let userNumber1 = prompt("Insira o primeiro número:")
let userNumber2 = prompt("Insira o segundo número:")

let sum = Number(userNumber1) + Number(userNumber2)
let sub = Number(userNumber1) - Number(userNumber2)
let multi = Number(userNumber1) * Number(userNumber2)
let div = Number(userNumber1) / Number(userNumber2)
let restDiv = Number(userNumber1) % Number(userNumber2)

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restDiv)


if(sum % 2 === 0) {
     alert("O número " + sum + " é par")
} else {
     alert("O número " + sum + " é impar")
}

if(userNumber1 === userNumber2) {
    alert("Os números inseridos são iguais.")
} else { 
    alert("Os números inseridos são diferentes.")
}
