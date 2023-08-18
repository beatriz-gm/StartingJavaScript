let isAOddNumber = prompt(`Olá, escolha um número e digite aqui! `)

isAOddNumber = Number(isAOddNumber)

if (isAOddNumber % 2 != 0) {
  alert(`Você escolheu um número ímpar!`)
} else {
  alert(`O número que você escolheu não é ímpar!`)
}