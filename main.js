function preload(){

}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.center();
    video = createCapture(640, 400);
    video.size(640, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function gotPoses(results){

        if(results.length > 0){
            console.log(results);
            console.log("leftEye.x =" + results[0].pose.leftEye.x);
            console.log("leftEye.y =" + results[0].pose.leftEye.y);
        }

}


function modelLoaded(){
    console.log('PoseNet is initialized');
}


function draw(){
image(video, 0, 0, 640, 400);
}

function take_snapshot(){
    save("haha.png");
}