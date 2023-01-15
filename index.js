const switchButton = document.getElementById('switch');
let popup = document.querySelector(".popup");

switchButton.addEventListener('click', function onClick(event) {
    let name = document.getElementById('name');

    document.body.style.backgroundColor = 'black';

    name.style.color = 'white';

    openPop();
  });

function openPop(){
popup.style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e) {
    if(e.target == popup) {
    popup.style.display = "none";
    }
}