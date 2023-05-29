let text= document.getElementById('illu');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;

    text.style.marginTop=value*2+'px';
})