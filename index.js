var form1 = document.querySelector("#form1");
var form2 = document.querySelector("#form2");
var form3 = document.querySelector("#form3");

var next1 = document.querySelector("#next1");
var back1 = document.querySelector("#back1");
var next2 = document.querySelector("#next2");
var back2 = document.querySelector("#back2");

var progress = document.querySelector("#progress");

next1.addEventListener("click", function(){
    // document.querySelector(".create").innerHTML = "you have clicked next";
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
    
});

back1.addEventListener("click", function(){
    form1.style.left = "40px";
    form2.style.left = "450px"
    progress.style.width = "120px";
});

next2.addEventListener("click", function(){
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
});

back2.addEventListener("click", function(){
    form3.style.left = "450px";
    form2.style.left = "40px";
    progress.style.width = "120px";
});



