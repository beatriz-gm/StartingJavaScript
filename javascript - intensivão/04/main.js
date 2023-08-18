const checkIfIsAString = [
  true,
  11.50,
  "Hello",
]

for(check of checkIfIsAString) {
  if (typeof check === "string") {
    alert(`Você digitou uma string!`)
  } else {
    alert(`Você não digitou uma string.`)
}
}