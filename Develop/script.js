// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // on button click take event, generate 
  passwordText.value = password;

}

function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
