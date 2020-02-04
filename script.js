//below for contect nav interaction

var content = document.getElementById("intro");
var content2 = document.getElementById("about");
var content3 = document.getElementById("video");
var button = document.getElementById("introButton");
var button2 = document.getElementById("aboutButton");
var button3 = document.getElementById("videoButton");
var button4 = document.getElementById("finite");
var background = document.getElementById("main");

button.onclick = function(){
    
    if(content.className == "hide"){
        //shrink the box
        content.className = "";
        content2.className = "hide";
        content3.className = "hide";
        background.className = "";
        
    } else{
        //expand the box
        content.className = "";
    }
};

button2.onclick = function(){
    
    if(content2.className == "hide"){
        //shrink the box
        content2.className = "";
        content.className = "hide";
        content3.className = "hide";
        background.className = "dark";
    } else{
        //expand the box
        content2.className = "";
    }
};

button3.onclick = function(){
    
    if(content3.className == "hide"){
        //shrink the box
        content3.className = "";
        content.className = "hide";
        content2.className = "hide";
        background.className = "darker";
    } else{
        //expand the box
        content3.className = "";
    }
};

button4.onclick = function(){
    
    if(content.className == "hide"){
        //shrink the box
        content.className = "";
        content2.className = "hide";
        content3.className = "hide";
        background.className = "";
        
    } else{
        //expand the box
        content.className = "";
    }
};

//below for contect nav interaction

var video = document.getElementById("vimeoVideo");
var open = document.getElementById("theVideo");
var close = document.getElementById("vimeoVideo");

open.onclick = function(){
    
    if(video.className == "hide"){
        //shrink the box
        video.className = "";
        
    } else{
        //expand the box
        video.className = "";
    }
};

close.onclick = function(){
    
    if(video.className == ""){
        //shrink the box
        video.className = "hide";
        
    } else{
        //expand the box
        video.className = "";
    }
};

var video1 = document.getElementById("vimeoVideo_1");
var open1 = document.getElementById("theVideo_1");
var close1 = document.getElementById("vimeoVideo_1");

open1.onclick = function(){
    
    if(video1.className == "hide"){
        //shrink the box
        video1.className = "";
        
    } else{
        //expand the box
        video1.className = "";
    }
};

close1.onclick = function(){
    
    if(video1.className == ""){
        //shrink the box
        video1.className = "hide";
        
    } else{
        //expand the box
        video1.className = "";
    }
};
