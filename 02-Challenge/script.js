// Assignment Code
var generateBtn = document.querySelector("#generate");

//have a random int range for math function, math.floor drops the decimal in any number
function someRandomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var randomChar = Math.random()
  return Math.floor(min * (1- randomChar) + randomChar * max);
}

function getRandomInt (set) {
  return set[someRandomInt(set.length)];
}

//define function generatePassword
function generatePassword () {

//prompt when you click the red generate password button
  var input = window.prompt ('How long do you want your password to be?')

//determnine and convert password length using a number input
  var passwordLength = parseInt(input)

//parseInt will determine if it is a number, following statements show what the response will be for a true number or not
  if (isNaN(passwordLength)) {
    window.alert('Oops! That is not a number, please input a number!')
  } else {
    window.alert('Thank you, this is a valid number.')
  }
//need to determine if password length is withing 8-128 character condition
  if (passwordLength <8 || passwordLength >128) {
    window.alert('Reminder! Password length must be between 8 and 128 characters!')
    return;
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
var charactersSet = []

//convert to uppercase letters to use for the password
for (var i = 0; i <userLowCase.length; i++) {
  userUpCase[i] = userLowCase[i].toUpperCase();
}

//if user confirms to use numbers
if (userConfirmNumbers === true) {
  charactersSet.push(userNumb);
}

//if user confirms to use symbols
if (userConfirmSymbols === true) {
  charactersSet.push(userSymb);
}

//if user confirms to use lowercase letters
if (userConfirmLowercase === true) {
  charactersSet.push(userLowCase);
}

//if user confirms to use uppercase letters
if (userConfirmUppercase === true) {
  charactersSet.push(userUpCase);
}

//if user chooses nothing
if (charactersSet.length === 0) {
  return
}

var generatedPassword = ""

//random pull of data 
for (var i = 0; i< passwordLength; i++) {
  var randomSelect = getRandomInt(charactersSet)
  var randomSymb = getRandomInt(randomSelect)
  generatedPassword += randomSymb
}

//return the password that was generated
return generatedPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



