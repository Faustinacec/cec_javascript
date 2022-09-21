function createImg(url){
    let img = document.createElement("img");
    img.src = url;
    img.width = 200;
    document.body.appendChild(img);
}

function onButtonClick(){
    let url = document.getElementById("imgUrl");
    if(url && url.value){
        createImg(url.value);
    }
}
 
window.onload = function (){
    
}