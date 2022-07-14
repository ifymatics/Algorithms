function repeatedString(s, n) {
  
    let num = Math.floor(n / s.length);
  
    let remainder = n % s.length;
    let subLen = remainder === 0 ? 0 : remainder;
   
    let aCount = num * getStringLength(s, s.length) + getStringLength(s, subLen)
    return aCount
}
    
function getStringLength(str, strLength) {
    let count = 0;
        for(let i=0;i<strLength;i++){
            if(str[i]==='a'){
                count++
            }
        }
       return count
   }

console.log(repeatedString('abcac', 10))
console.log(repeatedString('aba', 10))
