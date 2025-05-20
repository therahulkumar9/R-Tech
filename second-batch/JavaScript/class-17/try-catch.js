let button = "green"
try {
//   let x = 10
  console.log(x)
} catch (error) {
  console.log("Error", "error name", error)
  button = "red"
} finally {
  console.log("finally")
  if (button == "green") {
    console.log("Green message")
  } else {
    console.log("Red message")
  }
}
