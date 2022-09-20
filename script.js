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
  console.log(input);
//determnine and convert password length using a number input
  var passwordLength = parseInt(input)

//parseInt will determine if it is a number, following statements show what the response will be for a true number or not
  if (isNaN(passwordLength)) {
    window.alert('Oops! That is not a number, please input a number!')
    return;
    //will end the alert if anything but a number is entered
  } else {
    window.alert('Thank you, this is a number.')
  }
//need to determine if password length is withing 8-128 character condition
  if (passwordLength <8 || passwordLength >128) {
    window.alert('Reminder! Password length must be between 8 and 128 characters!')
    return;
    //will end the alert if password length entered is less than 8 and more than 128
  }
 
//confirm if user wants to use numbers in the password
var userConfirmNumbers = window.confirm('Would you like to use numbers in your password?')
  console.log(userConfirmNumbers);

//confirm if user wants to use lower case or upper case in the password
var userConfirmLowercase = window.confirm('Would you like to use lowercase letters in your password?')
  console.log(userConfirmLowercase);

var userConfirmUppercase = window.confirm('Would you like to use uppercase letters in your password?')
  console.log(userConfirmUppercase);

//confirm if user wants to use symbols in the password
var userConfirmSymbols = window.confirm('Would you like to use symbols in your password?')
  console.log(userConfirmSymbols);

//list of numbers to use for the password
var userNumb = ('0123456789')

//list of common symbols to use for the password
var userSymb = ('~!@#$%&*_-{}()')

//list of lowercase letters to use for the password
var userLowCase = ('abcdefghjklmnopqrstuvwxyz')

//list of uppercase letters to use for password, for function to be used to automatically convert lowercase letters list, empty list so that it can pickup from lowercase list
var userUpCase = []

//all possible characters list
var charactersSet = []

//convert to uppercase letters to use for the password
for (var i = 0; i <userLowCase.length; i++) {
  userUpCase[i] = userLowCase[i].toUpperCase();
}

//if user confirms to use numbers
if (userConfirmNumbers === true) {
  charactersSet.push(userNumb);
  console.log('User confirmed numbers are needed in the password');
}

//if user confirms to use symbols
if (userConfirmSymbols === true) {
  charactersSet.push(userSymb);
  console.log('User confirmed symbols are needed in the password');
}

//if user confirms to use lowercase letters
if (userConfirmLowercase === true) {
  charactersSet.push(userLowCase);
  console.log('User confirmed lowercase letters are needed in the password');
}

//if user confirms to use uppercase letters
if (userConfirmUppercase === true) {
  charactersSet.push(userUpCase);
  console.log('User confirmed uppercase letters are needed in the password');
}

//if user chooses nothing
if (charactersSet.length === 0) {
  return
}

var generatedPassword = ("")

//random pull of data 
for (var i = 0; i< passwordLength; i++) {
  var randomSelect = getRandomInt(charactersSet)
  var randomSymb = getRandomInt(randomSelect)
  generatedPassword += randomSymb
}
console.log('This is the password: ' + generatedPassword);

//return the password that was randomly generated
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



