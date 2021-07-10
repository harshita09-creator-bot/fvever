image ="";

function preload(){
    img = loadImage("plants.jpeg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,175);
    objectdectection = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status2").innerHTML= "Status : Detecting Object(s)";
}

function draw(){
    image(img,0,0,600,450);
    noFill();
    stroke("#FF0000");
    rect(30,30,540,400);
    text("Plant",40,50);
}

function modelLoaded(){
console.log("Model Loaded!");
status = true;
objectdectection.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("bottom-line2").innerHTML="There are "+results.length+" objects in this picture."
}
}