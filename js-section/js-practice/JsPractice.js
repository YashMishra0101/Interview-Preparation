console.log("Working");
// 'use strict'

function generateSecureOTP() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return (array[0] % 1000000).toString().padStart(4, "0");
}

console.log(generateSecureOTP());

// function generateSixDigitOTP() {
//   const array = new Uint32Array(1); // 32-bit means it can generate numbers from 0 to ~4.2 billion, Digit length can go up 0 to 10 digits.

//   window.crypto.getRandomValues(array); // Generates a cryptographically secure random 32-bit value based on system-level entropy like hardware interactions with the OS, timing, mouse movement, keyboard input, etc.

//   return (array[0] % 1000000) .toString().padStart(6, "0"); // If the result is below 100000, it will have fewer than 6 digits, because modulo operation can produce any number in the range 0–999,999, and numbers under 100000 naturally contain fewer than 6 digits, padStart adds leading zeros to make it exactly 6 digits.
// }

// console.log(generateSixDigitOTP());


function generateSixDigitOTP() {
    const array = new Uint32Array(1); // 32-bit means it can generate numbers from 0 to ~4.2 billion, Digit length can go up 0 to 10 digits.
    window.crypto.getRandomValues(array); // Generates a cryptographically secure random 32-bit value based on system-level entropy like hardware interactions with the OS, timing, mouse movement, keyboard input, etc.
    return (array[0] % 1000000) .toString().padStart(6, "0"); // Modulo 1000000 produces numbers 0-999999. Numbers below 100000 have fewer than 6 digits when converted to string, so padStart adds leading zeros to ensure exactly 6 digits.
}

console.log(generateSixDigitOTP());