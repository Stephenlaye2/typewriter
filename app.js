const textType = document.querySelector('.txt-type');
const words = JSON.parse(textType.getAttribute('data-words'));
const wait = textType.getAttribute('data-wait');

let waitTime = parseInt(wait, 10);
let wordIndex = 0;
let fullTxt = " ";
let isDeleting = false;

Typewriter();

function Typewriter(){

  // Get index
  var index = wordIndex % words.length;

  // Get current word in the words array
  var currentWord = words[index];

  // Deleting and typing
  if(isDeleting){
    fullTxt = currentWord.substring(0, fullTxt.length-1);
  }else{
    fullTxt = currentWord.substring(0, fullTxt.length + 1);
  }

  // Output to the UI
  textType.innerHTML = `<span>${fullTxt}</span>`;
  // Initialise type speed
  let typeSpeed = 300;
  
  if(isDeleting){
    typeSpeed /=2;
  }
if(!isDeleting && fullTxt === currentWord){
  isDeleting = true;
  typeSpeed = waitTime;

}else if(isDeleting && fullTxt === ""){
  isDeleting = false;
  wordIndex ++;
  typeSpeed = 500;
}

setTimeout(function(){Typewriter()}, typeSpeed);
}