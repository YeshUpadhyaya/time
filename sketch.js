const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
var min;
function preload() {
    getBackgroundImg()}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg!=null){
        background(backgroundImg);
        textSize(30);
        text(min,1000,600);
        
    }
    

    Engine.update(engine);


}

async function getBackgroundImg(){

    var promise=await fetch("https://worldtimeapi.org/api/timezone/America/Denver")
    var jsonPromise=await promise.json()

    var datetime=jsonPromise.datetime
    hour=datetime.slice(11,13)
    min=datetime.slice(11,16)

    if (hour==6||hour==7){
        bg="sunrise1.png"
    }
    else if (hour==8||hour==9){
        bg="sunrise2.png"
    }
    else if (hour==10||hour==11){
        bg="sunrise3.png"
    }
    else if (hour==12||hour==13){
        bg="sunrise4.png"
    }
    else if (hour==14||hour==15){
        bg="sunrise5.png"
    }
    else if (hour==16||hour==17){
        bg="sunrise6.png"
    }
    else if (hour==18||hour==19){
        bg="sunrise7.png"
    }
    else if (hour==20||hour==21){
        bg="sunset8.png"
    }
    else if (hour==22||hour==23){
        bg="sunset9.png"
    }
    else if (hour==0||hour==1){
        bg="sunset10.png"
    }
    else if (hour==2||hour==3){
        bg="sunset11.png"
    }
    else if (hour==4||hour==5){
        bg="sunset12.png"
    }

    backgroundImg=loadImage(bg)

}
