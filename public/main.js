//Get All Key Of Piano
const keys = document.querySelectorAll('.key')

// Play notes
function playNote(event){
    let audioKeyCode = getKeyCode(event) 
    const Typedkey = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    //Verify if the key exists in Piano
    const KeyNotExists = !Typedkey
    if(KeyNotExists){
        return;
    }
    
    AddPlayingClass(Typedkey)
    //Play Audio of the key
    playAudio(audioKeyCode)
}

function getKeyCode(event) {
    let keyCode;
  
    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
      keyCode = event.keyCode
    } else {
      keyCode = event.target.dataset.key
    }
  
    return keyCode
  }

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play();
}

function AddPlayingClass(key){
    key.classList.add('playing')
}

function RemovePlayingClass(event){
    event.target.classList.remove('playing')
}

function registerEvents(){
    // Click With Mouse
    keys.forEach( key => {
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', RemovePlayingClass)
    })

    // Keyboard Type
    window.addEventListener("keydown",playNote)
}

window.addEventListener('load',registerEvents)