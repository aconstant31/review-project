// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
let pwCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "}", "]", "|", ";", ":", "'", ",", "<", ".", ">", "?", "/", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// create a global variable called "pwLength" with a number between 10 and 18
let pwLength = 12;
// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
function addNewPassword() {
    let password = "";
    for (let i = 0; i < pwLength; i++) {
      let randomChar = Math.floor(Math.random() * pwCharacters.length);
      password += pwCharacters[randomChar];
    }
    return password;
}
// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
