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






$(document).ready(function () {
    $("#rev-content1").show();
    $("#rev-content2").hide();         
    $("#rev-content3").hide(); 
    $("#s1").click(function() {
        $("#rev-content1").fadeIn(4000);
        $("#rev-content2").hide();
        $("#rev-content3").hide();
        $("#s1").css("background-color", " teal");
        $("#s2").css("background-color", "aliceblue");
        $("#s3").css("background-color", "aliceblue");
    });
        $("#s2").click(function() {
            $("#rev-content2").fadeIn(4000);
            $("#rev-content1").hide();
            $("#rev-content3").hide();
            $("#s2").css("background-color", "teal");
            $("#s3").css("background-color", "aliceblue");
            $("#s1").css("background-color", "aliceblue");
        });
            $("#s3").click(function() {
                $("#rev-content3").fadeIn(4000);
                $("#rev-content2").hide();
                $("#rev-content1").hide();
                $("#s3").css("background-color", "teal");
                $("#s2").css("background-color", "aliceblue");
                $("#s1").css("background-color", "aliceblue");
            });
       
            
    });