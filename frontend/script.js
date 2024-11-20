const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const pageinbtn=document.getElementById('pagein');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// pageinbtn.addEventListener("click",()=>{
//     const selection= document.getElementById("pageSelect2").value;
//     if(selection){
//         window.location.assign(selection);
//     }else{
//         alert("Please make a selection");
//     } 
// });


document.addEventListener('DOMContentLoaded',()=>{
    const form1=document.getElementById("form1");
    const form2=document.getElementById("form2");

    form1.addEventListener('submit',(event)=>{
        event.preventDefault();

            const selection= document.getElementById("pageSelect1").value;
            if(selection){
                window.location.assign(selection);
            }else{
                alert("Please make a selection");
            }
    });


    form2.addEventListener('submit',(event)=>{
        event.preventDefault();

            const selection= document.getElementById("pageSelect2").value;
            if(selection){
                window.location.assign(selection);
            }else{
                alert("Please make a selection");
            }
    });
    
});




