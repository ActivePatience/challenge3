// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";

// Functions
function toggleDisplay() {
  var x = document.getElementById("passwordViewer");
  var y = document.getElementById("options");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    document.querySelector("#generate").innerHTML = "Retry?";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    document.querySelector("#generate").innerHTML = "Generate Password";
  }
}

// Write password to the #password input
function writePassword() {

  console.log("test");

  // setting password length
  var passLength = document.querySelector('#passLength').value;
  if(passLength < 8){passLength = 8;}
  if(passLength > 128){passLength = 128;}

  var chars = "";
  
  // adding character groups to the useable pool based on the checkboxes
  var specialBool = document.querySelector('#specialBool').checked;
  if(specialBool){chars = chars + specialChars;}
  var numbersBool = document.querySelector('#numbersBool').checked;
  if(numbersBool){chars = chars + numberChars;}
  var upperBool = document.querySelector('#upperBool').checked;
  if(upperBool){chars = chars + upperChars;}
  var lowerBool = document.querySelector('#lowerBool').checked;
  if(lowerBool){chars = chars + lowerChars;}

  console.log(chars);

  // mandating a useable character pool
  if(chars === ""){
    chars = chars + lowerChars;
  }

  chars = chars.split("");
  var password = "";

  // concatenating random members of chars to password passLength times
  for (let i = 0; i < passLength; i++) {
    password = password + chars[Math.floor(Math.random() * chars.length)];
  }

  console.log(password);

  toggleDisplay();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);