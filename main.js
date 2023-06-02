difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550,600);

    canvas = createCanvas(580,580);
    canvas.position(570,117);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet is Initialised!');
}

function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
     rightWristX = results[0].pose.rightWrist.x;
     leftWristX = results[0].pose.leftWrist.x;
     difference = floor(leftWristX - rightWristX);

     console.log("leftWristX = " + leftWristX + " - rightWristX = " + rightWristX + " = difference = " + difference);
}
}

function draw()
{
    background('yellow');
    textSize(difference);
    fill("blue");
    text("Ethan", 10, 350);
    document.getElementById("font_size").innerHTML = "The Text Size is  " + difference + "px";
}
