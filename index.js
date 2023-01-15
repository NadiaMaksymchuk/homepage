const switchButton = document.getElementById('switch');
let popup = document.querySelector(".popup");
let switcher = false;

switchButton.addEventListener('click', function onClick(event) {
    let name = document.getElementById('name');
    var turnedOffMode = 'Meow. The light had been turned off again!'
    var turnedOnMode = 'Hooray, the light had been turned on, I can continue to sleep!'

    if(!switcher) {
      document.body.style.backgroundColor = 'black';

      name.style.color = 'white';
  
      openPop(turnedOffMode);

      switcher = true;
    }
    else {
      document.body.style.backgroundColor = 'white';

      name.style.color = 'black';
  
      openPop(turnedOnMode);

      switcher = false;
    } 
});

function openPop(message){
  var messegeParagraph = document.getElementById('message');

  popup.style.display = "Block";
  messegeParagraph.innerText=message;
}

window.addEventListener("click", closePop);

function closePop(e) {
    if(e.target == popup) {
    popup.style.display = "none";
    }
}