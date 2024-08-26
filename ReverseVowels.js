function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  const chars = str.split("");
  let vowelPositions = [];
  let vowelChars = [];

  chars.forEach((char, index) => {
    if (vowels.includes(char)) {
      vowelPositions.push(index);
      vowelChars.push(char);
    }
  });
  vowelChars.reverse();
  vowelPositions.forEach((position, index) => {
    chars[position] = vowelChars[index];
  });

  return chars.join("");
}
console.log(reverseVowels("Hello!"));

