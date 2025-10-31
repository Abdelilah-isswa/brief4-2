let worldlist = 'leorem sdfedfzezf';
let typingspeed = document.querySelector("#typingspeed");

let input = document.querySelector('#input');
let world = document.querySelector("#word");
let elementfolt = document.getElementById("folt");
let timer = document.getElementById("timer");
let score = document.getElementsByClassName("score")[0];
let restart = document.querySelector(".restartbtn");
let yourscore = document.getElementsByClassName("yourscore")[0];

let folt = 0; // errors
let plus = 0; // score
let time = 0;
let started = false;
let timerid;

// Track previous typed value
let prevTyped = '';
let scoredFlags = new Array(worldlist.length).fill(false); // for score tracking

restart.style.display = 'none';
typingspeed.style.display = 'none';

function startgame() {
  input.classList.remove('notmeme', 'meme');
  input.value = '';
  time = 0;
  timer.innerHTML = `<p>Time : ${time}</p>`;
  score.classList.remove("don");
  folt = 0;
  plus = 0;
  prevTyped = '';
  scoredFlags.fill(false);
  elementfolt.innerHTML = `<p>Error : ${folt}</p>`;
  started = false;
  clearInterval(timerid);
  restart.style.display = 'none';
  typingspeed.style.display = 'none';
  yourscore.innerHTML = `<p>Score : ${plus}</p>`;
  input.disabled = false;
}

input.addEventListener("input", function () {
  const typed = input.value;

  // Start timer once typing begins
  if (!started) {
    started = true;
    timerid = setInterval(() => {
      timer.innerHTML = `<p>Time : ${time}</p>`;
      time++;
      if (time > 30) {
        restart.style.display = 'inline';
        typingspeed.style.display = 'inline';
        clearInterval(timerid);
        input.disabled = true;
        timer.innerHTML = `<p>Time done</p>`;
        world.classList.add("fadeout");
        score.classList.add("done");
        typingspeed.innerHTML = `<p>Speed : ${plus}</p>`;
      }
    }, 1000);
  }

  // Detect if user deleted something
  const deleted = typed.length < prevTyped.length;

  if (!deleted) {
    // New character typed
    let i = typed.length - 1;
    const typedChar = typed[i];
    const correctChar = worldlist[i];

    if (typedChar === undefined) return;

    // Correct letter (count once per position)
    if (typedChar === correctChar && !scoredFlags[i]) {
      scoredFlags[i] = true;
      plus++;
    } 
    // Wrong letter → always increment error when typing wrong (even if previous wrong)
    else if (typedChar !== correctChar) {
      folt++;
    }
  }

  // Update display
  yourscore.innerHTML = `<p>Score : ${plus}</p>`;
  elementfolt.innerHTML = `<p>Error : ${folt}</p>`;

  prevTyped = typed;
});

// Restart button
restart.addEventListener("click", function () {
  startgame();
});