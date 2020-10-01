let div = document.querySelector('.demo')

let string='大家好，我叫隋鑫，目前正在寻找前端开发岗位！'

let n=0

div.innerHTML = string.substring(0,n)

const step = ()=>{
  setTimeout(()=>{

 if (n<string.length){
   n+=1
   div.innerHTML = string.substring(0,n)
   step()
   console.log(n)
 }
  },100)
}
step()
