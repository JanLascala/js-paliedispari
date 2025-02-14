console.log("it works")

//ask number ask if even or odd
const userchoice = prompt("choose odd or even")
const userNumber = Number(prompt("write a number between 1-5"));
console.log(userNumber + " " + " your number")

//generate number

const Pc_number = Math.ceil(Math.random() * 5);
console.log(Pc_number + " " + "Pc Number")
//add numberpc + user

let sum = Pc_number + userNumber;
console.log(sum)

let even = false

//check numb if odd or even 

if (sum % 2 === 0) {
    let sum = Even
    console.log("even")
} else {
    let sum = odd
    console.log("odd")
}

// declaring winner

if (userchoice == even) {
    even = true
    console.log("uwin")
} else if (userchoice == even) {
    console.log("oddwin")
} else {
    console.log("pc_wins")
}