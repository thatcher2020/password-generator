const generateBtn = document.getElementById('#generateBtn');

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(list) {
  return list[randomNum(0, list.length - 1)];
}

function getPasswordLength() {
  const userInput = window.prompt("Please choose a number between 8 and 128 for your password length.");
  const passwordLength = parseInt(userInput);
}

if (isNaN(passwordLength)) {
  window.alert("Please enter a number between 1-128.");
  return getPasswordLength();
}

  getPasswordLength() {
      const userInput = window.prompt("Please choose a number between 8 and 128 for your password length.");
      const passwordLength = parseInt(userInput);
    }

  {
    return passwordLength; 
  }

  function getPasswordOptions() {
    const lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
    const upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const special = ['@%\\!#$?:,-_.'];
    const numeric = ['0123456789'];

    const options = {
      lowerCase: window.confirm("Would you like to include lowercase letters?"),
      upperCase: window.confirm("Would you like to include uppercase letters?"),
      special: window.confirm("Would you like to include special characters?"),
      numeric: window.confirm("Would you like to include numbers?")
    };

    if (!options.lowerCase && !options.upperCase && !options.special && !options.numeric) {
      window.alert("Please select at least one character type to continue.");
      return getPasswordOptions();
    }

    return options;
  }