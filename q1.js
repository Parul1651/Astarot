const fiveStar = document.getElementById('one');
const fourStar = document.getElementById('two');
const threeStar = document.getElementById('three');
const twoStar = document.getElementById('four');
const oneStar = document.getElementById('five');

const bar1 = document.getElementById('a');
const bar2 = document.getElementById('b');
const bar3 = document.getElementById('c');
const bar4 = document.getElementById('d');
const bar5 = document.getElementById('e');

var width = 5;
var width1 = 5;
var width2 = 5;
var width3 = 5;
var width4 = 5;

var fill = 0;
var fill2 = 0;
var fill3 = 0;
var fill4 = 0;
var fill5 = 0;

fiveStar.addEventListener('click',function(){
    if(width < 113){
        fill = fill+1;
        document.getElementById('p1').innerText = fill;
        bar1.style.width = width + "%";
        width = width + 12;
    }else{
        alert("Bar is full ")
    }
})

fourStar.addEventListener('click',function(){
    if(width1<113){
        fill2 = fill2+1;
        document.getElementById('p2').innerText = fill2;
        bar2.style.width = width1 + "%";
        width1 = width1 + 12;
    }else{
        alert("Bar is full")
    }
    
})

threeStar.addEventListener('click',function(){
    if(width2<113){
        fill3 = fill3+1;
        document.getElementById('p3').innerText = fill3;
        bar3.style.width = width2 + "%";
        width2 = width2 + 12;
    }else{
        alert("Bar is Full")
    }

})

twoStar.addEventListener('click',function(){
    if(width3<133){
        fill4 = fill4+1;
        document.getElementById('p4').innerText = fill4;
        bar4.style.width = width3 + "%";
        width3 = width3 + 12;
    }else{
        alert("Bar is full")
    }
})

oneStar.addEventListener('click',function(){
    if(width4<133){
        fill5 = fill5+1;
        document.getElementById('p5').innerText = fill5;
        bar5.style.width = width4 + "%";
        width4 = width4 + 12;
    }else{
        alert("Bar is full")
    }
})
