// Assignment Code
var generateBtn = document.querySelector("#generate");

//define function generatePassword
function generatePassword () {

//createe value for generatePassword
//prompt when you click the red generate password button
  var input = window.prompt ('How long do you want your password to be?')

//determnine password length using a number input
  var pswdLength = parseInt(input)

//parseInt will determine if it is a number, following statements show what the response will be for a true number or not
  if (isNaN(pswdLength)) {
    window.alert('Oops! That is not a number, please input a number!')
  } else {
    window.alert('Thank you, this is a valid number.')
  }
//need to determine if password length is withing 8-128 character condition
  if (pswdLength <8 || pswdLength >128) {
    window.alert('Reminder! Password length must be between 8 and 128 characters!')
    return
  }
 
//confirm if user wants to use numbers in the password
var userConfirmNumbers = window.confirm('Would you like to use numbers in your password?')


//confirm if user wants to use lower case or upper case in the password
var userConfirmLowercase = window.confirm('Would you like to use lowercase letters in your password?')
var userConfirmUppercase = window.confirm('Would you like to use uppercase letters in your password?')

//confirm if user wants to use symbols in the password
var userConfirmSymbols = window.confirm('Would you like to use symbols in your password?')

//list of numbers to use for the password
var userNumb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//list of common symbols to use for the password
var userSymb = ['!', '@', '#', '$', '%', '&', '*', '_', '-', '{', '}', '(', ')']

//list of lowercase letters to use for the password
var userLowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//list of uppercase letters to use for password, for function to be used to automatically convert lowercase letters list
var userUpCase = []

//all characters list
var characters = []

//convert to uppercase letters to use for the password
for (var i = 0; i <userLowCase.length; i++) {
  userUpCase[i] = userLowCase[i].toUpperCase();
}

//if user confirms to use numbers
if (userConfirmNumbers === true) {
  characters.push(userNumb)
}

//if user confirms to use symbols
if (userConfirmSymbols === true) {
  characters.push(userSymb)
}

//if user confirms to use lowercase letters
if (userConfirmLowercase === true) {
  characters.push(userLowCase)
}

//if user confirms to use uppercase letters
if (userConfirmUppercase === true) {
  characters.push(userUpCase)
}

//if user chooses nothing
if (characters.length === 0) {
  return
}

var generatePassword = ""
//random pull of data 
for (var i = 0; i< passwordLength; i++) {
  var randomSelect = getRandomInt(characters)
  var randomSymb = getRandomInt(randomSelect)
  generatePassword +=randomSymb
  
}


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



