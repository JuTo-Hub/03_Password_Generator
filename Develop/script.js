// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*-_";


// Write password to the #password input
function writePassword() {
  var passLength = prompt("How long would you like the password to be? Choose between 8 - 128");
  passLength = parseInt(passLength);
  console.log(passLength);
  if (passLength < 8 || passLength > 128) {
    alert("You must choose between 8 and 128, please try again");
    return;
  }
 
  var hasLower = confirm("Would you like to use lowercase?");
  console.log(hasLower);

  var hasUpper = confirm("Would you like to use uppercase?");
  console.log(hasUpper);

  var hasNumber = confirm("Would you like to use numbers?");
  console.log(hasNumber);

  var hasSymbol = confirm("Would you like to use Symbol?");
  console.log(hasSymbol);

  var selected = ""
  if (!hasLower && !hasUpper && !hasNumber && !hasSymbol){
    alert("You must choose at least one parameter, please try again.");
    return; 
  }
  if (hasLower){
    selected = selected + lower;
  }
  if (hasUpper){
    selected = selected + upper;
  }
  if (hasNumber){
    selected = selected + number;
  }
  if (hasSymbol){
    selected = selected + symbol;
  }
  console.log(selected);


  var password = generatePassword(passLength, selected);
  var passwordText = document.querySelector("#password");


  console.log(generatePassword());
  passwordText.value = password;

}

function generatePassword(passLength, selected) {
  var random = "";
  for (i=0; i < passLength; i++) {
   selected[Math.floor(Math.random() * selected.length)];
   random = random + selected[Math.floor(Math.random() * selected.length)];
  }
  return random;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
