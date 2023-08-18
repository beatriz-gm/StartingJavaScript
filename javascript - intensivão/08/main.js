let firstNumber = prompt("Digite aqui o primeiro número")
let secondNumber = prompt("Digite aqui o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const div = firstNumber / secondNumber

alert(`O resultado da divisão entre os números que você escolheu é: ${div.toFixed(2)}`)
