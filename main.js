noseX=0;
noseY=0;
function preload(){
    clownNoseImg=loadImage("https://i.postimg.cc/0jz12SJv/red-nose.png");
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose',poseResult);
}
function draw(){
    image(video,0,0,300,300);
    image(clownNoseImg,noseX-5,noseY-5,25,25);
}
function takeSnapshot(){
    save("Image.png");
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function poseResult(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}