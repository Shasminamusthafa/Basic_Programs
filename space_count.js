const str = "My name is shasmina";
let space= 0;
for (const char of str) {
  if (char === ' ') {
    space++;
  }
}
console.log("The number of space in the string :",space)
