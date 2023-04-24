Status=""
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    detector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("Status").innerHTML="Status:Detectando Objetos"
}
function preload (){
    img=loadImage("dog_cat.jpg")
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",45,75);
    noFill()
    stroke("red")
    rect(30, 60, 450,350)
}
function modelLoaded(){
    console.log("Model carregado")
    Status=true
    ObjectDetector.detect(img,gotresult)
}
function gotResult(error,results){
if(error){}
console.log(error)
}
console.log(results)