// solution_1
function nbDig(n, d) {
  let arr=[]
  let countTheDigit=0
  for(let k=0; k<=n;k++){arr.push(k**2)}
  console.log(arr)
  let arrDigit =[]
  arr.forEach(el => {
    arrDigit = el.toString().split('')
    console.log(arrDigit)
    for(let i=0; i<=arrDigit.length;i++){
      if(arrDigit[i]==d){
         countTheDigit=countTheDigit+1
      }
    }

})
return countTheDigit 
}
// solution_2
function nbDig(n, d) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
      arr.push(Math.pow(i, 2));
  }

  
  return arr.join('').split('').map(x => x.includes(d)).reduce((a, b) => a + b, 0);

}


  // solution_3

  let nbDig = (n,d) => [...Array(++n)].reduce((Σ,_,i)=> (`${i*i}`.match(RegExp(d,'g')) || []).length + Σ, 0)

  // solution_4

  function nbDig(n, d) {
    // your code
  let arr = Array(n+1).fill(1).map((el,i) => i**2).join('').split('').filter(el=> el == d);

  return arr.length;
}

  // solution_5
  console.log(`countTheDigit= ${nbDig(25,1)}`)