var lungTest,lungTestImg;
var smoking,smokingImg;
var respiratoryEx,respiratoryExImg;
var schedules5to10,schedules5to10Img;
var schedules10to20,schedules10to20Img;
var health20to50,health20to50Img;
var health50,health50Img;
var lung,lungImg;
var START=0;
var LUNG=1;
var S=2;
var RE=3;
var SC5TO10=4;
var SC10TO20=5;
var HT20TO50=6;
var HTA50=7;
var gameState=START
var startButton,startButtonImg;
var stopButton,stopButtonImg;
var lCircle,lCircleImg;
var lungIncr=0;
var backButton,backButtonImg;
var normal="no"
var tictokSound;
var sc5to10,sc5to10Img,sc5to102,sc5to102Img2
var sc10to20,sc10to20Img;
var ht20to50,ht20to50Img;

function preload() {
    //load the images here
    
    lungTestImg=loadImage("output-onlinepngtools.png");
  
  smokingImg=loadImage("Smoking is injurious button transparent.png");
  
  respiratoryExImg=loadImage("Respiratory exercises button transparent.png");
  
  schedules5to10Img=loadImage("Schedules for ages 5-10 transparent.png");
  
  
  schedules10to20Img=loadImage("Schedules for ages 10-20 transparent.png");
  
  health20to50Img=loadImage("Health tips for ages 20-50 transparent.png");
  
  health50Img=loadImage("Health tips for ages above 50 transparent.png");
  
  lungImg=loadImage("lung image transparent.png");
  
  startButtonImg=loadImage("start button transparent - Copy.png")
  
  stopButtonImg=loadImage("images-1.png")
  
         backButtonImg=loadImage("download.jpg")
  
  lCircleImg=loadImage("Transparent Circle.png")
  
  tictocSound=loadSound("mixkit-tick-tock-clock-timer-1048-[AudioTrimmer.com].wav")
  
  sc5to10Img=loadImage("Working from Home with Kids Ages 5-10.jpg")
 
  
  sc10to20Img=loadImage("Working from Home with Teens.jpg")
  
  ht20to50Img=loadImage("Health Tips for Men in their 20s to 50s.jpg")
  
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    //create tom and jerry sprites here
   
    lungTest=createSprite(displayWidth/3.8,displayHeight/10,300);
    lungTest.addImage(lungTestImg)
  smoking=createSprite(displayWidth/1.3,displayHeight/10,300)
smoking.addImage(smokingImg)
  
  respiratoryEx=createSprite(displayWidth/2,displayHeight/5.2,300);
  respiratoryEx.addImage(respiratoryExImg);
  
  schedules5to10=createSprite(displayWidth/2,displayHeight/3.9,300);
  schedules5to10.addImage(schedules5to10Img);
  
  schedules10to20=createSprite(displayWidth/2,displayHeight/3.2,300);
schedules10to20.addImage(schedules10to20Img)
  
  
  health20to50=createSprite(displayWidth/2,displayHeight/2.7);
health20to50.addImage(health20to50Img);
  
  health50=createSprite(displayWidth/2,displayHeight/2.35);
health50.addImage(health50Img);
  
  
  lung=createSprite(displayWidth/1.75,displayHeight/4.3);
  lungImg.resize(0,150)

  lung.addImage(lungImg);
  lung.visible=false;

 startButton=createSprite(displayWidth/1.95,displayHeight/2.3)
  startButtonImg.resize(0,50)
  startButton.addImage(startButtonImg);
  startButton.visible=false;
  
  stopButton=createSprite(displayWidth/1.59,displayHeight/2.3);
  stopButton.addImage(stopButtonImg)
  stopButtonImg.resize(100,50)
  stopButton.visible=false
  
  lCircle=createSprite(displayWidth/2.2,displayHeight/2.8,5,5)
  lCircle.visible=false;
  lCircle.addImage(lCircleImg);
  lCircleImg.resize(0,10)
  
  
  
  sc5to10=createSprite(displayWidth/2,displayHeight/2)
  sc5to10.addImage(sc5to10Img);
  sc5to10.visible=false;
 sc5to10Img.resize(displayWidth,displayHeight)
  
  
  sc10to20=createSprite(displayWidth/2,displayHeight/2)
  sc10to20.addImage(sc10to20Img);
  sc10to20Img.resize(displayWidth,displayHeight);
  sc10to20.visible=false;
  
  ht20to50=createSprite(displayWidth/2,displayHeight/2)
  ht20to50.addImage(ht20to50Img);
  ht20to50Img.resize(displayWidth,displayHeight);
 ht20to50.visible=false;
  backButton=createSprite(displayWidth/3,displayHeight/12)
  backButton.visible=false;
  backButton.addImage(backButtonImg);
  backButtonImg.resize(0,30)
  
}

function draw() {

    background("aliceblue");
    mousePressed();
    
//console.log(getFrameRate())
  
  if(gameState===LUNG){
    if(normal==="yes"){
      textStyle("bold")
    textSize(10)
       text("You have normal lungs but if you want to maintain this then please see these exercises",displayWidth/2,displayHeight/2);
    console.log(normal)
       }
    textSize(30)
    textStyle("bold")
    fill("black")
     text("Lung Test",displayWidth/2,displayHeight/10)
    lung.visible=true;
    startButton.visible=true;
    stopButton.visible=true;
    lCircle.visible=true;
    backButton.visible=true
    line(displayWidth/1.4,displayHeight/2.8,displayWidth/2.2,displayHeight/2.8)
    
circle(displayWidth/1.9,displayHeight/2.8,8);
    
circle(displayWidth/1.65,displayHeight/2.8,8);
    
circle(displayWidth/1.4,displayHeight/2.8,8);
  
    textSize(14);
    textStyle("bold")
   text("Normal",displayWidth/2,displayHeight/2.9)
    
text("Strong",displayWidth/1.71,displayHeight/2.9)
    
text("Super Human",displayWidth/1.5,displayHeight/2.9) 
    
    if(mousePressedOver(startButton)){
    lungIncr=0.2
      tictocSound.loop();
    }
    
    if(lungIncr!==0.2){
       tictocSound.stop();
    
    }
    
    
    lCircle.x+=lungIncr
    
    if(mousePressedOver(stopButton)){
    lungIncr=0
                                          if(lCircle.x>displayWidth/1.9&&lCircle.x<displayWidth/1.65){
  normal="yes"
    
    
     }
      
      
    }
     
  if(lCircle.x>displayWidth/1.4){
     lungIncr=0;
    
    lungTestEnd();
     }
  if(mousePressedOver(backButton)){
   gameState=START;
    lungIncr=0
    lung.visible=false;
    startButton.visible=false;
    stopButton.visible=false;
    lCircle.visible=false;
    backButton.visible=false;
    
    lCircle=createSprite(displayWidth/2.2,displayHeight/2.8,5,5)
  lCircle.addImage(lCircleImg);
  lCircleImg.resize(0,10)
    
    mainScreen();
   }
  

  }
  //gameState = smoking
  if(gameState===S){
   var yes=createSprite(displayWidth/1.8,displayHeight/2,10,10)
    mousePressed();
  }
  
  
  
  if(gameState===HTA50){
    
   textHTA50();
    
    backButton.visible=true;
    
     if(mousePressedOver(backButton)){
   gameState=START;
       mainScreen();
   
    backButton.visible=false;
     }
     }
  
  if(gameState===SC5TO10){
     sc5to10.visible=true;
    
     backButton.visible=true;
    
    if(mousePressedOver(backButton)){
   gameState=START;
       mainScreen();
   
    backButton.visible=false;
      
      sc5to10.visible=false;
     }
     }
  
  if(gameState===SC10TO20){
    backButton.visible=true;   
    sc10to20.visible=true;
      
    if(mousePressedOver(backButton)){
   gameState=START;
       mainScreen();
   
    backButton.visible=false;
      sc10to20.visible=false;
     }
     
     }
  
  if(gameState===HT20TO50){
    backButton.visible=true;   
    ht20to50.visible=true;
      
    if(mousePressedOver(backButton)){
   gameState=START;
       mainScreen();
   
    backButton.visible=false;
      ht20to50.visible=false;
     }
     
     }
  
  
  
  
  
    drawSprites();
    


    
}
function mousePressed(){
  if(mousePressedOver(lungTest)&&gameState===START){
  gameState=LUNG;
        fill("black")
   
   lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     }
  if(mousePressedOver(smoking)&&gameState===START){
   
    doyou=prompt("Do you Smoke")
    console.log(doyou)
  gameState=S;
     
        fill("black")
    
    lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     //playSound("piano_middle_C.mp3"); 
     }
  
  if(mousePressedOver(respiratoryEx)&&gameState===START){
  gameState=RE;
        fill("black")
    
   lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     }
  if(mousePressedOver(schedules5to10)&&gameState===START){
  gameState=SC5TO10;
        fill("black")
   
    lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     //playSound("piano_middle_C.mp3"); 
     }
  
  if(mousePressedOver(schedules10to20)&&gameState===START){
  gameState=SC10TO20;
        fill("black")
   
    lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     //playSound("piano_middle_C.mp3"); 
     }
  
  if(mousePressedOver(health20to50)&&gameState===START){
  gameState=HT20TO50;
        fill("black")
   
    lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     //playSound("piano_middle_C.mp3"); 
     }
  
  if(mousePressedOver(health50)&&gameState===START){
  gameState=HTA50;
        fill("black")
   
    lungTest.visible=false;
    smoking.visible=false;
    respiratoryEx.visible=false;
    schedules5to10.visible=false;
    schedules10to20.visible=false;
    health20to50.visible=false;
    health50.visible=false;
     //playSound("piano_middle_C.mp3"); 
     }
}

function lungTestEnd(){
    lung.visible=false;
    startButton.visible=false;
    stopButton.visible=false;
    lCircle.visible=false;
    backButton.visible=true;
  
  if(lCircle.x>displayWidth/1.4){
     lungIncr=0;
    text("You are a SuperHuman your lungs are very strong",displayWidth/2.3,displayHeight/5.1);
    textStyle("bold")
    textSize(10)
    
   
    
}
}

function mainScreen(){
  lungTest.visible=true;
    smoking.visible=true;
    respiratoryEx.visible=true;
    schedules5to10.visible=true;
    schedules10to20.visible=true;
    health20to50.visible=true;
    health50.visible=true;
    lCircle.visible=false;
}

function textHTA50(){
   fill("black")
  textStyle("bold")
  textSize(20)
    
     text("Important guidelines for a healthy lifestyle after age 50",displayWidth/2.4,displayHeight/9);
    
    fill("black")
  textStyle("bold")
  textSize(15)
    
    
  text("Important guidelines for a healthy lifestyle after age 50The most important     ",displayWidth/3,displayHeight/7);
    
    text("guidelines for a healthy lifestyle after age 50 are the same for men ",displayWidth/3,displayHeight/6)
    
    text("and women at any age:",displayWidth/3,displayHeight/5.5)
    
    text("•Eat a healthy diet.",displayWidth/3,displayHeight/4.9)
    
    text("•Stay at a healthy weight.",displayWidth/3,displayHeight/4.4)
    
    text("•Get 7 to 8 hours of sleep.",displayWidth/3,displayHeight/4)
    
    text("•	Be physically active.",displayWidth/3,displayHeight/3.7)
    
    text("•	Don’t smoke.",displayWidth/3,displayHeight/3.45)
    
    text("•	Get routine exams and screenings.",displayWidth/3,displayHeight/3.2)
    
    text("•	Receive and stay current with vaccinations, including ",displayWidth/3,displayHeight/3)
    
    text("yearly flu shot and shingles vaccination.",displayWidth/3,displayHeight/2.8)
    
    text("•	Following these guidelines can help men age in good health and ",displayWidth/3,displayHeight/2.5)
    text("reduce the risk of many diseases that are more common in older ",displayWidth/3,displayHeight/2.4)
    text("men like heart disease, high blood pressure, and diabetes. Even ",displayWidth/3,displayHeight/2.3)
    
    text("men who have not followed these guidelines until now can benefit ",displayWidth/3,displayHeight/2.2)
    text("from making healthy changes. It’s never too late to start making",displayWidth/3,displayHeight/2.1)
    text(" good choices.",displayWidth/3,displayHeight/2.02)
}

//name.toUpperCase()