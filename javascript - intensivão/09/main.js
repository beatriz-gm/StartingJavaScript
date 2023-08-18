let isAEvenNumbered = prompt(`Olá, digite a seguir um número aleatório: `)

isAEvenNumbered = Number(isAEvenNumbered)

if (isAEvenNumbered % 2 == 0) {
  alert(`O número que você digitou é um número par!`)
} else {
  alert(`O número que você digitou não é um número par!`)
}