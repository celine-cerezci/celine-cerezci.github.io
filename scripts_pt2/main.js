
// button and welcome message 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Celine Cerezci: Welcome ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Celine Cerezci: Welcome ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// changes images

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images_pt2/northeastern.png') {
    myImage.setAttribute ('src', 'images_pt2/stockmarket.png');
  } else {
    myImage.setAttribute ('src', 'images_pt2/northeastern.png');
  }
}

