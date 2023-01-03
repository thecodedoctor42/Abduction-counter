// storing the count-el element in the html document as a variable "THE DOM"
//D-ocument: Interacting with a HTML document
//O-bject: The datatype for a HTML document in Javascript (See below ...document.get...)
//M-odel: Representation of the HTML element being used in Javascript (See below ...getElementById("count-el"))
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//always check the code works with console.log()
console.log(countEl)

//create variable "count" to store the passenger count value
let count = 0

//create function to make 'increment' button operable
function increment() {
    //increment the count variable
    count +=  1
    //change the value within #countEl of the html file to the count incremented value
    countEl.textContent = count
}

let saveCount = 0

function save() {
    saveCount = count
    //string used to display saveCount with string as a concatenated string
    //saveEl.innerText = saveEl.innerText + saveCount
    //even more simply written as:
    saveEl.textContent += " " + saveCount + " -"
    //reset the counter to 0 when the save button is pressed
    count = 0
    countEl.textContent = count
}

// // increment the count variable when the button is clicked
// increment()
  