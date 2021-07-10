image ="";

function preload(){
    img = loadImage("couch.jpeg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,175);
    objectdectection = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Object(s)";
}

function draw(){
    image(img,0,0,600,450);
    noFill();
    stroke("#FF0000");
    rect(35,175,500,250);
    text("Couch",45,195);
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
        document.getElementById("bottom-line").innerHTML="There are "+results.length+" objects in this picture."
    }
    }

