
var kotae
var sukoa
function gameinit(){
        kotae=Math.floor(Math.random()*3+1)
        sukoa=200
}

function numbar(p){
    var pname="p"+p
    var item=document.getElementById(pname)
    if(p==kotae){
        item.src="img/当たり.jpg"
        alert("atari")
    }else{
        item.src="img/はずれ.jpg"
        alert("hazure")
        sukoa=sukoa-20
    }
    var sc=document.getElementById("sc")
    sc.innerHTML="score:"+sukoa
}