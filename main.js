const btn=document.querySelector(".button");

const final=document.querySelector("#allcontent");
const mainabout=document.querySelector('#aboutmain');
const content=document.querySelector(".content");
const content0=document.querySelector(".content0");
const content2main=document.querySelector("#content2main");

content.style.visibility='hidden';
content0.style.visibility='hidden';

final.style.display='none';

btn.addEventListener('click',()=>
{
    final.style.display='block';
    content.style.visibility='visible';
    content0.style.visibility='visible';
    content2main.style.transition='all .6s ';
    // mainabout.style.transform='translateX(-10px)';
})
