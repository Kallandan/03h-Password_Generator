// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare character arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ".", ">", "/", "[", "]", "{", "}", ";", ":", "'"];

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
  var password = '';

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
  }
    console.log("test case main");
    alert(`Your password is going to have ${passLength} character(s).`);
    // ask if user wants lowercase/uppercase/nums/special chars
    var lowerChoice = wantLowers();
    var upperChoice = wantUppers();
    var numChoice = wantNums();
    var specChoice = wantChars();

    var necessaryChars = [];
    
    if (!lowerChoice && !upperChoice && !numChoice && !specChoice) {
      //var upperChars = '';
      alert("You cannot seriously not want anything. It would not be secure, you know, being all spaces and all.");
      generatePassword();
    }
    // checking for lowercase letters
    if(lowerChoice) {
      necessaryChars = necessaryChars.concat(lowerLetters);
    }
    // checking for uppercase letters
    if(upperChoice) {
      necessaryChars = necessaryChars.concat(upperLetters);
    }
    // checking for numericals
    if(numChoice) {
      necessaryChars = necessaryChars.concat(numbers);
    }
    // checking for specials
    if(specChoice) {
      necessaryChars = necessaryChars.concat(specials);
    }
    // generating the full password with all of our options
    for(var i = 0; i < passLength; i++) {
      password += necessaryChars[Math.floor(Math.random() * necessaryChars.length)];
      //console.log(Math.floor(Math.random() * necessaryChars.length));
    }
    console.log(password);
    return password;
}

function wantLowers() {
  var lowerChars = confirm("Would you like to use lowercase characters for the password?");
  var lowerChoice = lowerChars;
  console.log(lowerChoice);
  return lowerChoice;
}

function wantUppers() {
  var upperChars = confirm("Would you like to use uppercase characters for the password?");
  var upperChoice = upperChars;
  console.log(upperChoice);
  return upperChoice;
}

function wantNums() {
  var numChars = confirm("Would you like to use number characters for the password?");
  var numChoice = numChars;
  console.log(numChoice);
  return numChoice;
}

function wantChars() {
  var specChars = confirm("Would you like to use special characters for the password?");
  var specChoice = specChars;
  console.log(specChoice);
  return specChoice;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


