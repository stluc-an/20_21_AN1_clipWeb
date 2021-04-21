let imgPath = "assets/img/Image_Mere.png";
let img;
//let x = 0.3;
//let y = 0.3;
//let z = 0.5;
//let delta = 0.01;
let audioPath = "assets/audio/December_in_NewYork.mp3" ;
let cameraZoom;
let imgPieces = [];
let gridX = 4;
let gridY = 4;

function preload(){
    img = loadImage(imgPath);
}



function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    
    cameraZoom = createCamera();
    cameraZoom.setPosition(0 , 0, 100);
    cameraZoom.lookAt(0,0,0);                      
    setCamera(cameraZoom);
//    let pieceWidth = img.width/gridX;
//            let pieceHeight = img.height/gridY;
//            
//            for(let y = 0 ; y < gridY ; y = y +1){
//                for(let x = 0 ; x < gridX ; x=x+1){
//                    let tempPiece = img.get(x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight);
//                    imgPieces.push(tempPiece);
//                }
//            }
    
//    let pieceWidth = img.width/gridX;
//    let pieceHeight = img.height/gridY;
    sequencer = new Sequencer(audioPath, 76, false);
    sequencer.registerSequence({
		name : "Intro",
        start : 1,
		stop : 38,
        onStep : () => {
            cameraZoom.move(0,0,40);
        },                                      
	});
//    sequencer.registerSequence({
//		name : "Randomizer",
//        start : 1,
//		stop : 42,
//        onStart : () => { 
////            setCamera(cameraZoom);
////            cameraZoom.setPosition(0 , 0, 850);
//            
////            let pieceWidth = img.width/gridX;
////            let pieceHeight = img.height/gridY;
////            
////            for(let y = 0 ; y < gridY ; y = y +1){
////                for(let x = 0 ; x < gridX ; x=x+1){
////                    let tempPiece = img.get(x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight);
////                    imgPieces.push(tempPiece);
////                }
////            }
////            imgPieces.sort(function(){
////                return random(-1,1);
////            });
//        },
//        onStep : () => {
//            let pieceWidth = img.width/gridX;
//            let pieceHeight = img.height/gridY;
//            let i = 0;
//            for(let y = 0 ; y < gridY ; y = y + 1){
//                for(let x = 0 ; x < gridX ; x = x + 1){
//                    image(imgPieces[i], x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight);
//                    i = i + 1;
//        }
//            };
//       imgPieces.sort(function(){
//                return random(-1,1);
//            });     
//    },
//    });
    sequencer.registerSequence({
		name : "TravelingX",
        start : 41,
		stop : 120,
        steps : [1,1+1/2],
        onStart : () => { 
            setCamera(cameraZoom);
            cameraZoom.setPosition(-1090 , -800, 600);
        } ,
        onStep : () => {
            cameraZoom.move(10,0,0);
        },
    });
    sequencer.registerSequence({
		name : "Dézoom",
        start : 121,
		stop : 153,
        steps : [1,1+1/2],
        onStep : () => {
            cameraZoom.move(-7.7,12.9,16.1);
        },                                      
	});
    sequencer.registerSequence({
		name : "Piano",
        start : 153,
		stop : 164,
        steps : [1,1+1/2],
        onStart : () => {
            setCamera(cameraZoom);
            cameraZoom.setPosition(0 , 0, 1600);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
        },                                      
	});
    sequencer.registerSequence({
		name : "random 1",
        start : 164,
		stop : 168,
        onStart : () => {
                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1574);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
//            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
        },                                      
	});
    sequencer.registerSequence({
		name : "random 2",
        start : 168,
		stop : 172,
        onStart : () => {
                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1566);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
//            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
        },                                      
	});
    sequencer.registerSequence({
		name : "Piano2",
        start : 173,
		stop : 203,
        steps : [1,1+1/2],
        onStart : () => {
            setCamera(cameraZoom);
            cameraZoom.setPosition(0 , 0, 1558);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
        },                                      
	});
        sequencer.registerSequence({
		name : "random 6",
        start : 203,
		stop : 250,
//        steps : [2,4],
        onStart : () => {
//                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1526);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
            cameraZoom.setPosition(random(-754,754), random(-460,460) ,1438);
        },                                      
	});
    sequencer.registerSequence({
		name : "Piano3",
        start : 251,
		stop : 285,
        steps : [1,1+1/2],
        onStart : () => {
            setCamera(cameraZoom);
            cameraZoom.setPosition(0 , 0, 1414);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
        },                                      
	});
    sequencer.registerSequence({
		name : "random 3",
        start : 285,
		stop : 289,
        onStart : () => {
                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1350);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
//            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
        },                                      
	});
    sequencer.registerSequence({
		name : "random 4",
        start : 289,
		stop : 293,
        onStart : () => {
                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1342);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
//            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
        },                                      
	});
    sequencer.registerSequence({
		name : "random 5",
        start : 293,
		stop : 297,
        onStart : () => {
                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1334);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
//            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
        },                                      
	});
    sequencer.registerSequence({
		name : "random 7",
        start : 297,
		stop : 300,
        onStart : () => {
                 cameraZoom.setPosition(random(-754,754), random(-460,460) ,1326);
        },
        onStep : () => {
            cameraZoom.move(0,0,-2);
//            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
        },                                      
	});
    sequencer.registerSequence({
		name : "Train",
        start : 301,
		stop : 345,
        steps : [1,1+1/2],
        onStart : () => {
            setCamera(cameraZoom);
            cameraZoom.setPosition(300 , -600, 100);
        },
        onStep : () => {
            cameraZoom.move(-2,5,12);
        },                                      
	});
    sequencer.registerSequence({
		name : "Fin",
        start : 346,
		stop : 358,
        onStep : () => {
            cameraZoom.move(0,0,30);
        },                                      
	});
    sequencer.registerSequence({
		name : "FinFin",
        start : 359,
		stop : 361,
        onStep : () => {
            cameraZoom.move(0,0,60);
        },                                      
	});
//    sequencer.registerSequence({
//		name : "Noise",
//        start : 122,
//		stop : 300,
//        onStep : () => {
//            cameraZoom.move(-3,2,3);
//        },                                      
//	});
    
}


function draw(){
    sequencer.update();
    background(0);
//    cameraZoom.move(-x,-y,-z);
//    if (frameCount % 1000 === 0){
//        x*= -1;
//        y*= 0;
//        z*=0;
//    }
//    if (frameCount % 1900 === 0){
//        x+= 0.6;
//        y+= -0.6;
//        z+= -0.6;
//    }
//    if (frameCount % 4200 === 0){
//        x*= 0;
//        y*= 0;
//        z*= 0;
//    }
    
//     camera(0, 0, 850 + cos(frameCount * 0.04) * 10, 0, 0, 0, 0, 1, 0);
//    cameraZoom.move(0,0,-10):
    image(img, -1650, -1300);
    
    
}






