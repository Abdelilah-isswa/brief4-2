let worldlist = 'leorem sdfedfzezfbbb';
let typingspeed = document.querySelector("#typingspeed");

let input = document.querySelector('#input');
let wordElem = document.querySelector("#word");
let folt = 0;
let plus = 0;
let elementfolt = document.getElementById("folt");
let timer = document.getElementById("timer");


let time = 0;
let started = false;
let timerid;
let score = document.getElementsByClassName("score")[0];


let restart = document.querySelector(".restartbtn");
let yourscore = document.getElementsByClassName("yourscore")[0];


let prevTyped = '';
let scoredFlags = new Array(worldlist.length).fill(false);


function renderWord() {
       wordElem.innerHTML = '';
    for (let i = 0; i < worldlist.length; i++) {
        const span = document.createElement('span');
          span.textContent = worldlist[i];
           wordElem.appendChild(span);
    }
}

function startgame() {
    input.classList.remove('notmeme', 'meme');
       input.value = '';
    time = 0;
    timer.innerHTML = `<p>Time : ${time}</p>`;
 score.classList.remove("done");
    folt = 0;
    plus = 0;
  prevTyped = '';
  scoredFlags.fill(false);
    elementfolt.innerHTML = `<p>Error : ${folt}</p>`;
 yourscore.innerHTML = `<p>Score : ${plus}</p>`;
    started = false;
  clearInterval(timerid);
    restart.style.display = 'none';
    typingspeed.style.display = 'none';
  input.disabled = false;

   
    renderWord();
}


startgame();

input.addEventListener("input", function () {
    const typed = input.value;
    const spans = wordElem.querySelectorAll('span');


    if (!started) {
        started = true;
        timerid = setInterval(() => {
            timer.innerHTML = `<p>Time : ${time}</p>`;
            time++;
            if (time > 10) {
         restart.style.display = 'inline';
         typingspeed.style.display = 'inline';
                clearInterval(timerid);
              
           timer.innerHTML = `<p>Time done</p>`;
                score.classList.add("done");
               
            }
        }, 1000);
    }

    const deleted = typed.length < prevTyped.length;

    // change colors
    for (let i = 0; i < spans.length; i++) {
        const typedChar = typed[i];
        const correctChar = worldlist[i];

        if (!typedChar) {
               spans[i].style.color = 'azure'; 
        } else if (typedChar === correctChar) {
     spans[i].style.color = 'limegreen'; 
              if (!scoredFlags[i]) {
                   scoredFlags[i] = true;
                plus++;
            }
        } else {
            spans[i].style.color = 'red'; 
            if (!deleted) {
                folt++; 
            }
        }
    }

    yourscore.innerHTML = `<p>Score : ${plus}</p>`;
      elementfolt.innerHTML = `<p>Error : ${folt}</p>`;

    prevTyped = typed;
});


restart.addEventListener("click", startgame);
