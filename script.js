let openThebox = document.querySelector(".option-one");
let option1div = document.querySelector(".option-one screen");
console.log(openThebox, option1div);
let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");
let option1screen=document.querySelector(".option-one-screen");
let option2screen=document.querySelector(".option-two-screen");
let option1end=document.querySelector(".option-one-end");
let option2end=document.querySelector(".option-two-end");
let button3=document.querySelector(".option-three");
let buttons=document.querySelector(".buttons");
let storyOpening = document.querySelector(".story-opening");
let presentButton = document.querySelector(".present-button");
let present = document.querySelector(".troll-present");



button1.onclick=function(){
    option1screen.style.display="block";
    openThebox.style.display="none";
    buttons.style.display="none";
    storyOpening.style.display="none";
};

presentButton.onclick=function(){
    option1screen.style.display="none";
    openThebox.style.display="none";
    buttons.style.display="none";
    present.style.display="block";
};


button2.onclick=function(){
 option2screen.style.display="block";
 openThebox.style.display="none";
 buttons.style.display="none";
 storyOpening.style.display="none";

};




      