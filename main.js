noseX = 0
noseY = 0
hat = ""
function preload(){
    hat = loadImage("hat.png")

}
function setup(){
    canvas = createCanvas(340 , 300)
    canvas.center()
    video= createCapture(VIDEO);
    video.size(340 , 300)
      video.hide()

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on("pose",getResult)
}
function modelLoaded(){
    console.log("PoseNet Model Was Initially Finalized")

}
function getResult(results){
if(results.length>0){
    console.log(results)
    console.log(results[0].pose.nose.x)
    console.log(results[0].pose.nose.y)
    noseX = results[0].pose.nose.x-98
    noseY = results[0].pose.nose.y-165
}

}
function draw(){
    image(video , 0,0,340,300)
    image (hat,noseX,noseY, 200,200)

}
function take_snapshot(){
    save("downloadShot.jpg")
}