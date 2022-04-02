/*initializing all variabels */
var boxes = document.querySelectorAll('.box');
var s = document.querySelector('.rgbspan');
var colors = generateRandomColor(6);
var pickedcolor = colors[Math.floor(Math.random()*6)];
s.textContent = pickedcolor;

var playbtn = document.querySelector('#playAgain');
var easybtn = document.querySelector('#easybtn'); 
var hardbtn = document.querySelector('#hardbtn');

var boxCount = 6;
var statusText = document.querySelector('.status');
statusText.textContent = "Let's Play!!";

/* Code for easy btn */
easybtn.addEventListener('click', function(){
    document.querySelector('.rgbspan').style.background='lightcoral';
    statusText.textContent="Let's Play";
    boxCount = 3;
    this.style.background = 'lightcoral';
    this.style.color = 'white';
    hardbtn.style.background ='white';
    hardbtn.style.color= 'lightcoral';
    colors = generateRandomColor(boxCount);
    pickedcolor = colors[Math.floor(Math.random()*3)];
    s.textContent = pickedcolor;

    for(var i=0; i< boxes.length; i++){
        if(colors[i]){
            boxes[i].style.background = colors[i];
        }else{
            boxes[i].style.display = 'none';
        }
    }
});

/* Code for hard btn */
hardbtn.addEventListener('click',function(){
    document.querySelector('.rgbspan').style.background = 'lightcoral';
    statusText.textContent = "Let's Play";
    this.style.background = 'lightcoral';
    this.style.color = 'white';
    easybtn.style.background = 'white';
    easybtn.style.color = 'lightcoral';
    boxCount = 6;
    colors  = generateRandomColor(boxCount);
    pickedcolor  = colors[Math.floor(Math.random()*6)];

    for(var i=0; i<boxes.length; i++){
        boxes[i].style.background = colors[i];
        boxes[i].style.display = 'block';
    }
});

/* Code for Play btn i.e., New colors */
playbtn.addEventListener('click',function(){
    document.querySelector('.rgbspan').style.background = 'lightcoral';
    statusText.textContent = "Let's Play";
    colors = generateRandomColor(boxCount);
    pickedcolor = colors[Math.floor(Math.random()*boxCount)];
    s.textContent = pickedcolor;

    for(var i =0; i < boxes.length; i++){
        boxes[i].style.background = colors[i];
    }
});
/* Code to check if selected color is picked color or not and decides the win or loose */
for(var i=0; i < colors.length; i++){
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click',function(){
        var selectedColor = this.style.background;
        if( selectedColor === pickedcolor){
            win();
        }else{
            loose(this);
        }
    });
}
/* Win function */
function win(){
    for (var i=0; i < colors.length; i++){
        boxes[i].style.background = pickedcolor;
    }
    document.querySelector('.rgbspan').style.background = pickedcolor;
    statusText.textContent = 'Correct!!';
}
/* loose function */
function loose(a){
    a.style.background = 'aliceblue';
    statusText.textContent = 'Try Again!';
}
/* Code to generate random colors and stores it in arr */
function generateRandomColor(num){
    var arr=[];
    for (var i=0; i< num; i++){
        arr.push(randomColor())
    }
    return arr;
}
/* code to add random color from *256 values */
function randomColor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);

    return 'rgb(' + r +', ' + g +', '+ b + ')';
    'rgb(r, g, b)'
}