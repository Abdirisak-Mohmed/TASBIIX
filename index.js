let countEl = document.getElementById("increment-btn") // pass in arguments
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0

function increment() {
     count = count + 1
     countEl.innerText = count
}

function save() {
    let counStr = count + " - "
    saveEl.textContent += counStr
    countEl.textContent = 0
    count = 0
}
