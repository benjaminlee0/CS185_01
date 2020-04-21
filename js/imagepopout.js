
function popOut(source){
    var modal = document.createElement("div");
    var bod = document.getElementById("lightbox");
    bod.appendChild(modal);
    modal.style.position = "fixed";
    modal.style.zIndex = 1;
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.width = "100%";
    modal.style.overflow = "hidden";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";

    var content = document.createElement("div");
    content.style.backgroundColor = "rgb(0,0,0)";
    content.style.margin = "5% auto";
    content.style.padding = "20px";
    content.style.border = "1px solid #888";
    content.style.width = "45%";
    content.style.height = "80%";


    modal.appendChild(content);

    var imdisplay = document.createElement("img");
    imdisplay.src = source.src;
    imdisplay.style.width = "100%";
    imdisplay.style.height = "100%";

    content.appendChild(imdisplay);

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }

}

function scrollFunc(btn){
    console.log(document.height);
    if(document.body.scrollTop > document.body.scrollHeight*0.25 || document.documentElement.scrollTop > document.body.scrollHeight*0.25){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onload = function (){
    //create scroll to top button
    
    var btn = this.document.createElement("button");
    btn.textContent = "Scroll to Top";
    var bod = document.getElementById("lightbox");
    bod.appendChild(btn);
    btn.onclick = function(){
        scrollToTop();
    };
    btn.style.fontFamily = "Cambria";
    btn.style.display = "none";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "30px";
    btn.style.zIndex = "2";
    btn.style.border = "none";
    btn.style.outline = "none";
    btn.style.backgroundColor = "rgb(0, 32, 128)";
    btn.style.color = "white";
    btn.style.padding = "15px";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "18px";
  
    window.onscroll = function(){
        scrollFunc(btn);
    };


    var im = this.document.getElementsByTagName('img');
    var imlist = [];
    for(var k = 0; k < im.length; k++){
        imlist.push(im[k]);
    }
    imlist.forEach(i=>{
        var current = i;
        current.onclick = function(){
            popOut(current);
        }
    })
}