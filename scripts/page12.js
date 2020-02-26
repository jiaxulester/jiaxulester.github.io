function switchVideo(s) {
    let target = document.querySelector("#aVideo");
    target.src = "../video/" + s.id + ".mp4";
    target.poster = "../video/" + s.id + ".png";

    // if(document.getElementsByName="two"){
    //     document.getElementById("wenzi").innerHTML = "Hello World";
    // }
   
    
}

var bianzi = document.getElementById("wenzi");
var bian = document.getElementById("our-list").getElementsByTagName("li")

for(i = 0; i < bian.length; i++){
    bian[i].addEventListener("click",activateItem);
}

function activateItem() {
    bianzi.innerHTML = this.innerHTML;
}