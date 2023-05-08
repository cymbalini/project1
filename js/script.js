'use strict'
console.log(1)
const btn=document.querySelector('header a')
const h1=document.querySelector('header h1')
const h1text=h1.innerText
let counter=0
btn.addEventListener('click',function(){
    counter++
    // if(counter%2==0)
    //     h1.innerText=h1text
    // else
    //     h1.innerText='Bedzie pan zadowolony'
    counter%2==0 ? h1.innerText=h1text : h1.innerText='Bedzie pan zadowolony'

})
console.log(2)