// Declare function names averageInArray, initialize with one parameter named arr
const averageInArray = arr => {
  // Initialize total variable to hold sum of numbers
  let total = 0;
  // Loop through everything in array 
  // for (let i = 0; i < arr.length; i++) or 
  for (let I of arr) {
    // Push sum into total
    total += I; {
    }
  } 
  // return sum / numbers (length)  
  return total / arr.length;
};

console.log(averageInArray([2, 2, 2, 2]));
