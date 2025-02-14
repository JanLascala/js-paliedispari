// ask name
const userName = prompt("write your name")
console.log(userName)

//reverse name


//check if same



function checkifpalindrome(userName) {

    const reverse = userName.split('').reverse().join('');
    console.log(reverse)
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

const palindorme = checkifpalindrome(userName)


//result