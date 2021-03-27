//Arrays
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "@","#", "$","%","^","&","*","~","?","<",">",":",";","[","]","{","}"];
  
//Varaibles
let passwordLength = 8;
let choice = [];
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

//Button
generateBtn.addEventListener("click", writePassword);

//Functions
function writePassword() {
  passwordText.value =
    "Click 'Generate Password' to create password";

  var truePrompts = passwordCharacters();
  var falsePrompts = "Critera Not Met.";

  if (truePrompts) {
    var newPassword = generatePassword();

    passwordText.value = newPassword;
  } else {
    passwordText.value = falsePrompts;
  }
}

function generatePassword() {
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length);

    password = password + choice[randomCharacter];
  }

  return password;
}

function passwordCharacters() {
  choice = [];

  passwordLength = prompt(
    "Please choose a length for you password \nMinimum 8 characters \nMaximum 128 characters."
  );

  if (isNaN(passwordLength)) {
    alert("Please enter a number.");
    return false;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please input a valid password length.\nMin = 8\nMax = 128"
    );
    return false;
  } else {
    let hasLower = confirm(
      "Do you want your password to contain lower case characters?\nOk = Yes\nCancel = No"
    );

    if (hasLower) {
      choice = choice.concat(lower);
    }
    let hasUpper = confirm(
      "Do you want your password to contain upper case characters?\nOk = Yes\nCancel = No"
    );
    if (hasUpper) {
      choice = choice.concat(upper);
    }
    let hasNumber = confirm(
      "Do you want your password to contain numbers?\nOk = Yes\nCancel = No"
    );
    if (hasNumber) {
      choice = choice.concat(number);
    }
    let hasSpecial = confirm(
      "Do you want your password to contain special characters?\nOk = Yes\nCancel = No"
    );
    if (hasSpecial) {
      choice = choice.concat(special);
    } else if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      alert(
        "Special Characters not Chosen."
      );
      return false;
    }
    return true;
  }
}
