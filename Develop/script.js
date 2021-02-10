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
var passLength = parseInt(prompt("How many characters would you like your password to be?"
                + "\nMinimum of 8 characters; Maximum of 128 characters."));
  if (passLength < 8) {
    console.log("test case 1");
    alert("WARNING: Not enough characters! What are you thinking?");
    generatePassword();
  } else if (passLength > 128) {
    console.log("test case 2");
    alert("WARNING: Too many characters! What are you thinking?");
    generatePassword();
  } else if (passLength == undefined || passLength == NaN) {
    console.log("test case 3");
    alert("WARNING: Seriously? Use a number dude, come on.");
    generatePassword();
  } else {
    console.log("test case main");
    // ask if user wants lowercase/uppercase/nums/special chars
    var lowerChars = confirm("Would you like to use lowercase characters for the password?");
    if (!lowerChars) {
      //var upperChars = '';
      var lowerChoice = lowerChars;
      console.log(lowerChoice);
      wantUppers();
    } else {
      var lowerChoice = lowerChars;
      console.log(lowerChoice);
      wantUppers();
    }
    
  }
}

function wantUppers() {
  var upperChars = confirm("Would you like to use uppercase characters for the password?");
  var upperChoice = upperChars;
  console.log(upperChoice);
  wantNums();
}

function wantNums() {
  var numChars = confirm("Would you like to use number characters for the password?");
  var numChoice = numChars;
  console.log(numChoice);
  wantChars();
}

function wantChars() {
  var specChars = confirm("Would you like to use special characters for the password?");
  var specChoice = specChars;
  console.log(specChoice);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
