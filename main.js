centuries = "";
believer = "";

function preload(){
    centuries = loadSound("iron man - centuries.mp3");
    believer = loadSound("believer.mp3");
}

function setup(){
    canvas = createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,500,300);
}