let keys = Array.from(document.querySelectorAll(".key"));
let usedKeys = [];
for (let i = 0; i < keys.length; i++) {
    usedKeys.push(parseInt((keys[i].getAttribute('data-key'))));
}
let dataKey;

function playKey (num) {
    note = document.querySelector(`audio[data-key="${num}"]`);
    note.currentTime = 0;
    note.play();
    console.log(note);
}

window.addEventListener('keydown', function(e) {
    dataKey = e.keyCode

    if (usedKeys.includes(dataKey)) {
        thisKey = document.querySelector(`.key[data-key="${dataKey}"]`);
        thisKey.addEventListener('transitionend', function(e) {
            thisKey.classList.remove('playing');
            thisKey.classList.remove('sound');
          });
        thisKey.classList.add("playing");
        thisKey.classList.add("sound");
        playKey(dataKey);

    } else {
        console.log("That key isn't here.");
    }
  });


