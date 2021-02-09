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
  // ask user how many characters they want for the password
  // be sure to let them know min 8 chars, 128 max
prompt("How many characters would you like your password to be?"
      + "\nMinimum of 8 characters; Maximum of 128 characters.");

  if (password.length < 8) {
    
  } else if (password.length > 128) {

  } else {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
