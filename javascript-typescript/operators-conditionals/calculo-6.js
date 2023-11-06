  
  
  const prompt = require("prompt-sync")();

  const milesPerHour = kmPerHour / 1.60934;
  console.log( milesPerHour);
// Usage Example
const kmSpeed = 100;
const milesSpeed = convertKmToMiles(kmSpeed);
console.log(`${kmSpeed} kilometers per hour is approximately ${milesSpeed.toFixed(2)} miles per hour.`);