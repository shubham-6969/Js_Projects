const passwordBox = document.getElementById("password");
const length = 12;

// different character will be allow in password 

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number    =  "0123456789";
const symbol    = "@#%^&*()_+~|[]{}></-=";

const allChars = upperCase + lowerCase + number + symbol;


// creating a ramdom function that will genrate the ramdom password 

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

// creating function of copypassword 

function copyPassword() {
  // Ensure the password input is selected
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999); // For mobile devices
  
  // Use the Clipboard API to copy the password
  navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Error copying text: ", err);
    });
}