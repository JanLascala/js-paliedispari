
console.log("it works")

//ask  user number ask if even or odd
const userchoice = prompt("choose odd or even")
console.log(userchoice)

const userNumber = Number(prompt("write a number between 1-5"));
console.log(userNumber + " " + " your number")

//pc generate number

const Pc_number = Math.ceil(Math.random() * 5);
console.log(Pc_number + " " + "Pc Number")

//add numberpc + user

let sum = Pc_number + userNumber;
console.log(sum)

// this is my function 


function oddoreven(sum) {
    let sum_type = ``

    if (sum % 2 === 0) {
        sum_type = `even`
    } else {
        sum_type = `odd`
    }
    console.log(sum_type)
    return sum_type
}

//check numb if odd or even 

const result = oddoreven(sum)

// declaring winner

if (userchoice == result) {
    console.log("u win")
} else {
    console.log("pc wins")
}