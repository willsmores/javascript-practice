const fizzBuzz = (n) => {
  let output = []
  
  for (let i = 1; i <= n; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   output.push('FizzBuzz');
    // } else if (i % 3 === 0) {
    //   output.push('Fizz');
    // } else if (i % 5 === 0) {
    //   output.push('Buzz');
    // } else {
    //   output.push(i.toString());
    // }
    
    (i % 3 === 0 && i % 5 === 0) ? output.push('FizzBuzz') :
    (i % 3 === 0) ? output.push('Fizz') : 
    (i % 5 === 0) ? output.push('Buzz') : output.push(i.toString())    
  }
  
  return output;
};

fizzBuzz(50);