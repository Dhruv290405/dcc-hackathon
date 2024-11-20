// const home=document.getElementsByClassName('row-2');
// const assignment=document.getElementsByClassName('assignment');
// const alumni=document.getElementsByClassName('alumni');
// const todo=document.getElementsByClassName('to-do');
// const leaderboard=document.getElementsByClassName('leaderboard');

const div=document.querySelectorAll(".row-2,.assignment,.alumni,.to-do,.leaderboard,.alumni")

const btnh=document.getElementById('home');
const btnassi=document.getElementById('assignment');
const btnalu=document.getElementById('alumni');
const btntodo=document.getElementById('todo-list');
const btnlea=document.getElementById('leaderboard');



btnh.addEventListener("click",()=>{
    div[0].classList.remove("display");
    div[1].classList.add("display");
    div[2].classList.add("display");
    div[3].classList.add("display");
    div[4].classList.add("display");
});


btnassi.addEventListener("click",()=>{
    div[1].classList.remove("display");
    div[0].classList.add("display");
    div[2].classList.add("display");
    div[3].classList.add("display");
    div[4].classList.add("display");
   
});

btnalu.addEventListener("click",()=>{
    div[2].classList.remove("display");
    div[1].classList.add("display");
    div[0].classList.add("display");
    div[3].classList.add("display");
    div[4].classList.add("display");
});

btntodo.addEventListener("click",()=>{
    div[3].classList.remove("display");
    div[1].classList.add("display");
    div[2].classList.add("display");
    div[0].classList.add("display");
    div[4].classList.add("display");
});

btnlea.addEventListener("click",()=>{
    div[4].classList.remove("display");
    div[1].classList.add("display");
    div[2].classList.add("display");
    div[3].classList.add("display");
    div[0].classList.add("display");
});









