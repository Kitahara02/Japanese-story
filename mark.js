    const yesbutton=document.getElementById('yes')
    const nobutton=document.getElementById('no')
    const TextOutput=document.getElementById('output')
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    const strong = document.querySelector("strong")
    const lightmode = document.querySelector("lightmode")
    const markus = document.querySelector(".markus")
    const lt = document.querySelector(".lt")
    const dk = document.querySelector(".dk")
    const toggle = document.querySelector(".toggle");

    const mode = "hannelore"
    if(document.cookie.includes(`${mode}=on`)){
        body.classList.add("light");
        markus.classList.add("light");
        header.classList.add("light");
        yesbutton.classList.add("light");
        nobutton.classList.add("light");
        footer.classList.add("light");
        strong.classList.add("light");
        TextOutput.classList.add("light");
        toggle.classList.add("light");
        toggle.classList.add("active");
        dk.style.opacity=0;
    }
    else if(document.cookie.includes(`${mode}=off`)){
        lt.style.opacity=0;
    }
    toggle.addEventListener("click", () => {
        if(body.classList.contains("light")){
            document.cookie = `${mode}=off`;
            dk.style.opacity=1;
            lt.style.opacity=0;
        }
        else{
            document.cookie = `${mode}=on`;
            dk.style.opacity=0;
            lt.style.opacity=1;
        }
        body.classList.toggle("light");
        markus.classList.toggle("light");
        header.classList.toggle("light");
        yesbutton.classList.toggle("light");
        nobutton.classList.toggle("light");
        footer.classList.toggle("light");
        strong.classList.toggle("light");
        TextOutput.classList.toggle("light");
        toggle.classList.toggle("light");
    });
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active")
    });
    yesbutton.addEventListener('click',function(){
        TextOutput.innerText='ありがとうございます。'
    })
    nobutton.addEventListener('click',function(){
        TextOutput.innerText='申し訳ございませんでした、貴重なお時間ありがとうございました。'
    })
