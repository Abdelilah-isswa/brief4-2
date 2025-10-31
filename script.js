 let worldlist ='leorem sdfedfzezf'
let typingspeed = document.querySelector("#typingspeed")

let input = document.querySelector('#input');
let world = document.querySelector("#word")
let elementfolt = document.getElementById("folt");
let timer = document.getElementById("timer");
let index =0
let typed =0
let folt =0
let plus =0
let time =0
let x =0;
let started= false;
let taux_de_précision= 0;
let timerid;
let score = document.getElementsByClassName("score")[0]
let restart = document.querySelector(".restartbtn")
 restart.style.display = 'none';
 typingspeed.style.display ='none';
 let yourscore=document.getElementsByClassName("yourscore")[0];

 input.addEventListener("input",function(
){
   
console.log(x)


typed++;
if (!started) {
    started= true
 timerid = setInterval(()=>{
    timer.innerHTML=`<p>time :${time}</p>`;
    console.log(time)
     time++
    if (time>60) {
         restart.style.display = 'inline';
         typingspeed.style.display ='inline';
        clearInterval(timerid)
        input.desabled = true;
       timer.innerHTML=`<p>time done</p>`;
       world.classList.add("fadout")
       score.classList.add("don")
      
             typingspeed.innerHTML=`<p>speed :${time}</p>`;
    }
   
},1000);
}

x++;

   

     for (index; index < worldlist.length; index++) {
        //  console.log(input.value.length)
        if (input.value.length<typed) {
            
            typed = input.value.length
            console.log("you deleted")
            input.classList.remove("notmeme")
    input.classList.add("meme")
             console.log(index)
            index = index -2;
            console.log(index)
        }else{

              console.log(input.value.slice(-1))
  console.log(worldlist[index])
         
   if (input.value.slice(-1) === worldlist[index]) {
    input.classList.remove("notmeme")
    input.classList.add("meme")
    plus = plus+1;
    yourscore.innerHTML=`<p>Score :${plus}</p>`
         console.log("meme")
        //  console.log(index)
     }else{
        console.log("not the sme")
          input.classList.add("notmeme")
          input.classList.remove("meme")
          folt =folt+1;
          elementfolt.innerHTML=`<p>error :${folt}</p>`;

     }
    
        }
    index++;      
   break; 
    }
//    console.log(index)
 


    }

)