function equalizeArray(arr) {
    let freq = {}
for(let item of arr){
    if(item in freq){
        freq[item]++;
    }else{
        freq[item]=1;
    }
    }
    // console.log(Object.values(freq))
    // console.log(Object.values(freq).length)
  return   arr.length - Object.values(freq).sort((a,b)=>b-a)[0]
}
console.log(equalizeArray([3, 3, 2, 1, 3]))
// equalizeArray([3, 3, 2, 1, 3])