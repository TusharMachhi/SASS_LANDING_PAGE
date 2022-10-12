
let menus =document.querySelectorAll(".mymenu");
console.log(menus)
let allcards =document.querySelectorAll(".portcard");
console.log(allcards)
let myact =document.querySelectorAll('.myact');

menus.forEach((val,index)=>{

    val.addEventListener('click',()=>{


       allcards.forEach((va,ind)=>{

           if(index==ind){
              va.style.display="grid";
              
              
           }
           else{
           
            va.style.display="none";
           
           

           }
       })
    })
});


let ham =document.getElementById('ham');
let nvaul =document.getElementById('navul');
console.log(ham,nvaul)


ham.addEventListener('click',()=>{

    nvaul.classList.toggle("ulact");

    nvaul.classList.replace('newact','ulact')
   
    

   

    
})

console.log(myact);

myact.forEach((val)=>{

    val.addEventListener('click',()=>{

        nvaul.classList.add('newact')
    })
})