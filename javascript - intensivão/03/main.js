let number = prompt(`Olá, digite um número a seguir: `)

number = Number(number)

if (typeof number === "number" && !isNaN(number)) {
  alert(`É um número`)
} else {
  alert(`Não é um número`)
}