button_array = document.querySelectorAll("button");
buttn_array[0].addEventListener("click",click_fun);
function click_fun()
{
    document.getElementById("img1").src="/home/mahima/Desktop/IMG_2784.jpg";
    document.getElementById("img1").height="50";
    document.getElementById("img1").width="50";
}
button_array[1].addEventListener("mouseover",mfun);
function mfun()
{
    document.getElementById("t1").innerHTML="Building";
}