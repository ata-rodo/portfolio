var btn = document.getElementById("btn");
var light = document.getElementById("light");
var text = document.getElementById("text-container");
var picture = document.getElementById("picture");
var menu_icon = document.getElementById("menu_icon");
var ul = document.getElementById("ul");
var hint = document.getElementById("click-me")
var container = document.getElementById("container")

function toggleBtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
    text.classList.toggle("on-text");
    picture.classList.toggle("dim");
    menu_icon.classList.toggle("bright");
    ul.classList.toggle("on-menu");
    hint.classList.toggle("hint")
    container.classList.toggle("container-2");
}

