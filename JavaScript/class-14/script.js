const displayCount = document.getElementById("count")

let count = 0

function increaseCount() {
  count++
  displayCount.textContent = count
}

function decreaseCount() {
  count--
  displayCount.textContent = count
}

function resetCount() {
  count = 0
  displayCount.textContent = count
}
