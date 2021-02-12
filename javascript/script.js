burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    rightNav .classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})

let btnOpen = document.querySelector('button');
let input = document.querySelector('input');

btnOpen.addEventListener('click', () =>{
  window.open(input.value, '_blank');
})

document.querySelector('#c1').addEventListener('selectstart', (e) =>{
  e.preventDefault();
})

function btnClicked1(){
  document.location.href="https://www.linkedin.com/in/avanish-mundhra-6a938848/?originalSubdomain=in";
}

function btnClicked2(){
  document.location.href="https://www.youtube.com/watch?v=tIiUXniv6AM&t=3s";
}

function btnClicked3(){
  document.location.href="https://www.linkedin.com/company/cantileverlabs/";
}

function btnClicked4(){
  document.location.href="https://www.instagram.com/cantilever_labs/";
}

function btnClicked5(){
  document.location.href="https://www.facebook.com/Cantilever-labs-102916474752041";
}

window.addEventListener("DOMContentLoaded", function () {
var form = document.getElementById("my-form");
var status = document.getElementById("status");

function success() {
  form.reset();
  status.innerHTML = "Thank You For Submitting The Form!";
}

function error() {
  status.classList.add('error');
  status.innerHTML = "Oops! There Was A Problem";
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);

});
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept","application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else{
      error(xhr.status, xhr.response, xhr.responseType);
    }
    
 
};
xhr.send(data);
}

var header = document.getElementById("header")


header.style.color = 'blue'

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {                       
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

setInterval("changeHeaderColor()",500);



const text = document.getElementById("c1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 600);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }















const btn = document.getElementById('color');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}



const btn1 = document.querySelector('.section section-left');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.getElementById("about").style.backgroundColor = rndCol;
}


var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);





var i =0;
var images = [];
var time = 1000;

images[0] = 'images/third.png';
images[1] = 'images/2.jpg';
images[2] = 'images/bg.jfif';
images[3] = 'images/3.jpg';
images[4] = 'images/4.png';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length -1){
    i++;
  }else{
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;



