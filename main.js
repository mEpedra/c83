var lastx,lasty,currentx,currenty 
var width =screen.width
var height=screen.height
var newwidth =width-300
var newheight= height-70
if (width<992) {document.getElementById("myCanvas").width=newwidth 
document.getElementById("myCanvas").height=newheight
document.body.style.overflow="hidden"
}
var mycanvas=document.getElementById("myCanvas")
var ctx=mycanvas.getContext("2d")
var mouseevent=""
mycanvas.addEventListener("mouseleave",eventl)
function eventl(e){ 
    mouseevent="mouseleave"
}
mycanvas.addEventListener("mouseup",eventl2)
function eventl2(e){
    mouseevent="mouseup"
}
mycanvas.addEventListener("mousedown",eventl3)
function eventl3(e){
    mouseevent="mousedown"
    color= document.getElementById ("color").value
    width= document.getElementById ("width").value
}
mycanvas.addEventListener("mousemove", eventl4)
function eventl4(e){
  currentx=e.clientX-mycanvas.offsetLeft
   currenty=e.clientY-mycanvas.offsetTop
    if (mouseevent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    }
lastx=currentx
lasty=currenty
}
mycanvas.addEventListener("touchstart",evento)
function evento(e){
    lastx=e.touches[0].clientX-mycanvas.offsetLeft
    lasty=e.touches[0].clientY-mycanvas.offsetTop
    color= document.getElementById ("color").value
    width= document.getElementById ("width").value
}
mycanvas.addEventListener("touchmove",evento2)
function evento2(e){
    currentx=e.touches[0].clientX-mycanvas.offsetLeft
    currenty=e.touches[0].clientY-mycanvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width
    ctx.moveTo(lastx, lasty)
    ctx.lineTo(currentx, currenty)
    ctx.stroke()
    lastx=currentx
    lasty=currenty
}
function Clear(){
    ctx.clearRect(0,0,myCanvas.width, myCanvas.height)
}


