let div = document.querySelector('.demo')

let n=1

div.innerHTML = n

const step = ()=>{
  setTimeout(()=>{
    n+=1
    div.innerHTML = n
  },1000)
}

step()
step()