const titleCase = (str) => {
  // Cleanse string to lowercase
  let strLower = str.toLowerCase();
  // Convert string to array
  let strArr = strLower.split("");
  // Set first char to uppercase
  let upperChar = strArr[0].toUpperCase(); 
  strArr.splice(0, 1, upperChar)

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      // Set each char following a space to uppercase
      upperChar = strArr[i + 1].toUpperCase();
      strArr.splice(i + 1, 1, upperChar);
    }
  }
  
  return strArr.join("");
}

titleCase("I'm a little tea pot");