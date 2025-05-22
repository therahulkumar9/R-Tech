console.log("A")

setTimeout(function handle() {
  console.log("B")
}, 5000)

setTimeout(function handle() {
  console.log("C")
}, 6000)

console.log("D")
