console.log('Loaded!');

var element=document.getElementById('val');
element.innerHTML='new value';

var img=document.getElementById('modi');

var marginLeft=0;
function moveRight (){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function(){
    var interval=setInterval(moveRight,50);
};