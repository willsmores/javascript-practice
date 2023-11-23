const isPalindrome = (x) => {
  const string = x.toString();
  const array = [];
  
  for (let i = 0; i < string.length; i++) {
    array.push(string[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      return false;
    }
  }
  
  return true;
};

isPalindrome(12321);
isPalindrome(12345);