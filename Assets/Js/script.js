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
  var passLength = 0;
  var lowerChoice;
  var upperChoice;
  var numChoice;
  var specChoice;

  // confirming length of generated password
  passLength = parseInt(prompt("How many characters would you like your password to be?"
                + "\nMinimum of 8 characters; Maximum of 128 characters."));


  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("WARNING: Please choose a numerical value between 8 and 128.");
    passLength = 0;
    password = '';
    generatePassword();
  } else if (passLength > 7 && passLength < 129) {

  /* the original, unoptimized loop that I went with
    remembered that while loops were a thing after I had already committed

   if (passLength < 8) {
    //console.log("test case 1");
    alert("WARNING: Not enough characters! What are you thinking?");
    generatePassword();
  } else if (passLength > 128) {
    //console.log("test case 2");
    alert("WARNING: Too many characters! What are you thinking?");
    generatePassword();
  } else if (passLength == undefined || passLength == NaN) {
    //console.log("test case 3");
    alert("WARNING: Seriously? Use a number dude, come on.");
    generatePassword();
  } */

    //console.log("test case main");
    alert(`Your password is going to have ${passLength} character(s).`);
    
    // ask if user wants lowercase/uppercase/nums/special chars
    lowerChoice = wantLowers();
    upperChoice = wantUppers();
    numChoice = wantNums();
    specChoice = wantChars();

    var necessaryChars = [];
    
    // catch for selecting none of the options, like a dummy
    if (!lowerChoice && !upperChoice && !numChoice && !specChoice) {
      alert("You cannot seriously not want anything. It would not be secure, you know, being all spaces and all.");
      generatePassword();
    }
    // checking for lowercase letters and then adding if true
    if(lowerChoice) {
      necessaryChars = necessaryChars.concat(lowerLetters);
    }
    // checking for uppercase letters, ditto
    if(upperChoice) {
      necessaryChars = necessaryChars.concat(upperLetters);
    }
    // checking for numericals, ditto
    if(numChoice) {
      necessaryChars = necessaryChars.concat(numbers);
    }
    // checking for specials, ditto
    if(specChoice) {
      necessaryChars = necessaryChars.concat(specials);
    }
    // generating the full password with all of our options
    for(var i = 0; i < passLength; i++) {
      password += necessaryChars[Math.floor(Math.random() * necessaryChars.length)];
    }
  }
    //console.log(password);

    return password;
}

// function to call to ask for lowers and then assigning our choice
// helpful to not overcomplicate our main function
function wantLowers() {
  var lowerChars = confirm("Would you like to use lowercase characters for the password?");
  var lowerChoice = lowerChars;
  console.log(lowerChoice);
  return lowerChoice;
}

// function to call to ask for uppers and then assigning our choice
function wantUppers() {
  var upperChars = confirm("Would you like to use uppercase characters for the password?");
  var upperChoice = upperChars;
  console.log(upperChoice);
  return upperChoice;
}

// function to call to ask for numbers and then assigning our choice
function wantNums() {
  var numChars = confirm("Would you like to use number characters for the password?");
  var numChoice = numChars;
  console.log(numChoice);
  return numChoice;
}

// function to call to ask for special characters and then assigning our choice
function wantChars() {
  var specChars = confirm("Would you like to use special characters for the password?");
  var specChoice = specChars;
  console.log(specChoice);
  return specChoice;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


