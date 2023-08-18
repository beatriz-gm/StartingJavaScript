const checkIfIsABoolean = [
  "banana",
  false,
  123,
  "true",
]

for(check of checkIfIsABoolean) {
  if (typeof check === "boolean") {
    alert(`Você digitou um booleano!`)
  } else {
    alert(`Você não digitou um booleano.`)
}
}