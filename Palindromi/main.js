// ask name
const userName = prompt("write your name")
console.log(userName)

//reverse name
const reverse = userName.split('').reverse().join('');
console.log(reverse)

//check if same
const sumnames = userName + reverse
console.log(sumnames)


function checkifpalindrome(sumnames) {
    let result = ``
    if (userName == reverse) {
        result = `palindrome`
        console.log("palindorme!")
    } else {
        result = `not palindrome`
        console.log("not palindrome!")
    }
    return result
}

const palindorme = checkifpalindrome(sumnames)


//result