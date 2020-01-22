// url: "https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript";

function encrypt(text, n) {
  if (!text) return text;
  let output = text;
  while (n > 0) {
    let left = "";
    let right = "";
    [...output].forEach((l, idx) => {
      if (idx % 2) {
        left += l;
      } else {
        right += l;
      }
    });
    output = left + right;
    n--;
  }
  return output;
}

function decrypt(encryptedText, n) {
  if (!encryptedText) return encryptedText;
  let eT = encryptedText;
  const len = eT.length;
  const halfLen = Math.floor(len / 2);
  while (n > 0) {
    let left = [...eT.slice(0, halfLen)];
    let right = [...eT.slice(halfLen)];
    let output = "";
    for (let i = 0; i < len; i++) {
      output += i % 2 ? left.shift() : right.shift();
    }
    eT = output;
    n--;
  }
  return eT;
}
