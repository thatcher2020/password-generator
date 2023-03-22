const generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)];
}

function generatePassword() {
  const userInput = window.prompt("Please choose a number between 8 and 128 for your password length.");
  const passwordLength = parseInt(userInput);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Enter a number between 8 and 128");
    return null;
  }

  const lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
  const upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const special = [...'@%+\\/!#$^?:,~-_.'];
  const numeric = [...'0123456789'];

  const userLowerCase = window.confirm("Would you like to include lowercase letters?");
  const userUpperCase = window.confirm("Would you like to include uppercase letters?");
  const userSpecial = window.confirm("Would you like to include special characters?");
  const userNumeric = window.confirm("Would you like to include numbers?");

  const passwordOptions = [];

  userNumeric ? passwordOptions.push(numeric) : null;
  userSpecial ? passwordOptions.push(special) : null;
  userLowerCase ? passwordOptions.push(lowerCase) : null;
  userUpperCase ? passwordOptions.push(upperCase) : null;

  if (passwordOptions.length === 0) {
    alert("You must select at least one choice.");
    return null;
  }

  let generatedPassword = "";

  passwordOptions.forEach(option => {
    generatedPassword += getRandomItem(option);
  });

  for (let i = generatedPassword.length; i < passwordLength; i++) {
    const randomList = getRandomItem(passwordOptions);
    const randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }
  return generatedPassword;
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);