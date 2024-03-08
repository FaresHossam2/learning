$(document).ready(function () {
    
    $("#bar").click(function() {
       
        $("nav ul").css("right", " -100px");
       
    });
    $("#close").click(function() {
       
        $("nav ul").css("right", " -3000px");

    });
    $("li").click(function() {
       
        $("nav ul").css("right", " -3000px");

    });
    $("#sign").click(function() {
       
        $("nav ul").css("right", " -3000px");

    });

    });

    let input=document.querySelector("#inputp");
let butt=document.querySelector("#pass");


butt.addEventListener('click', handle)
 function handle() {
if(butt.getAttribute('data-text') == "show" ){
    input.setAttribute('type', 'text');
    butt.setAttribute('data-text', 'hide');
    butt.innerHTML="Hide";
}
else{
input.setAttribute('type', 'password');
butt.setAttribute('data-text', 'show');
butt.innerHTML="Show";
}
}

