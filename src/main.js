
let n=0
const string=`21314`

demo.innerHTML = string.substring(0,n)

let id = setInterval(()=>{
  n+=1
  if (n>string.length){
    window.clearInterval(id)
    return
  }
  console.log(n)
  demo.innerHTML=string.substring(0,n)
},200)