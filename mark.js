// Declaring all the constants
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const yesbutton=document.getElementById('yes')
    const nobutton=document.getElementById('no')
    const TextOutput=document.getElementById('output')
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    const strong = document.querySelector("strong")
    const markus = document.querySelector(".markus")
    const toggle = document.querySelector(".toggle");
    //cookie
    function setCookie(name, value){
        document.cookie = '${name}=${value}';
    }
    // Yes/No button
    yesbutton.addEventListener('click',function(){
        TextOutput.innerText='ありがとうございます。'
    })
    nobutton.addEventListener('click',function(){
        TextOutput.innerText='申し訳ございませんでした、貴重なお時間ありがとうございました。'
    })
    // Theme toggle
    toggle.addEventListener("click", () => {
        body.classList.toggle("light");
        markus.classList.toggle("light");
        header.classList.toggle("light");
        yesbutton.classList.toggle("light");
        nobutton.classList.toggle("light");
        footer.classList.toggle("light");
        strong.classList.toggle("light");
        toggle.classList.toggle("light");
    });
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active")
    });
});