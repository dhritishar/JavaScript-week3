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
    window.alert('Please input a number!')
  } else {
    window.alert('Thank you, this is a valid number.')
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
