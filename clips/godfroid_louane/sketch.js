let audioPath = "../godfroid_louane/assets/audio/daydreamer.mp3";
let sequencer;

let imagesHolder =[];
let x;
var size = -900

//let mic, fft;

function preload() {
	//butterfly 0-17 gauche
	imagesHolder.push(new ImageDisplayer('butterfly.png', -450 , -150, 150, 150));//0
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -100 , -120, 100, 100));//1
	imagesHolder.push(new ImageDisplayer('butterfly3.png', -300 ,-180, -170, 170));//2
	imagesHolder.push(new ImageDisplayer('insecte2.png', -680 , 10, 50, 50));//3
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -630 , -210, 160, 160));//4
    imagesHolder.push(new ImageDisplayer('butterfly7.png', -700 , 50, 150, 150));//5
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -680 , 30, 180, 180));//6
    imagesHolder.push(new ImageDisplayer('butterfly4.png', -800 , -100, 160, 160));//7
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -760 , -450, 150, 150));//8
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -760 , -350, 120, 120));//9
	imagesHolder.push(new ImageDisplayer('insecte.png', -610 , -700, 140, 140));//10
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -580 , -330, 145, 145));//11
    imagesHolder.push(new ImageDisplayer('butterfly3.png', -550 , -360, 125, 125));//12
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -420 , -390, 135, 135));//13
	imagesHolder.push(new ImageDisplayer('butterfly8.png', -440 , -440, 160, 160));//14
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -700 , -350, 170, 170));//15
	imagesHolder.push(new ImageDisplayer('butterfly7.png', -610 , -440, 190, 190));//16
    imagesHolder.push(new ImageDisplayer('butterfly2.png', -750 , -300, 150, 150));//17
    imagesHolder.push(new ImageDisplayer('insecte.png', -620 , -420, 120, 120));//18
    imagesHolder.push(new ImageDisplayer('insecte2.png', -550 , -360, 135, 135));//19
    imagesHolder.push(new ImageDisplayer('butterfly.png', -350 , -400, 150, 150));//20
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -440 , -240, 160, 160));//21
	imagesHolder.push(new ImageDisplayer('butterfly3.png', -490 , -400, 170, 170));//22
	imagesHolder.push(new ImageDisplayer('insecte2.png', -380 , -400, 180, 180));//23
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -550 , -230, 150, 150));//24
    imagesHolder.push(new ImageDisplayer('butterfly7.png', -450 , -300, 170, 170));//25
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -550 , -400, 122, 122));//26
    imagesHolder.push(new ImageDisplayer('butterfly4.png', -790 , -450, 160, 160));//27
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -660 , -390, 135, 145));//28
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -530 , -150, 170, 170));//29
	imagesHolder.push(new ImageDisplayer('insecte.png', -510 , -300, 140, 140));//30
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -680 , -350, 150, 150));//31
    imagesHolder.push(new ImageDisplayer('butterfly3.png', -510 , -330, 115, 115));//32
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -650 , -340, 115, 115));//33
	imagesHolder.push(new ImageDisplayer('butterfly8.png', -440 , -170, 190, 190));//34
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -780 , -350, 130, 130));//35
	imagesHolder.push(new ImageDisplayer('butterfly7.png', -620 , -310, 170, 170));//36
    imagesHolder.push(new ImageDisplayer('butterfly2.png', -620 , -300, 150, 150));//37
    imagesHolder.push(new ImageDisplayer('insecte.png', -600 , -320, 130, 130));//38
    imagesHolder.push(new ImageDisplayer('insecte2.png', -350 , -380, 135, 135));//39
    //butterfly 18-37 droite
    imagesHolder.push(new ImageDisplayer('butterfly.png', 430 , 100, 200, 200));//40
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 540 , 70, 150, 150));//41
	imagesHolder.push(new ImageDisplayer('butterfly3.png', 590 , -100, 100, 100));//42
	imagesHolder.push(new ImageDisplayer('insecte2.png', 680 , -150, 140, 140));//43
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 520 , -300, 150, 150));//44
    imagesHolder.push(new ImageDisplayer('butterfly7.png', 615 , -100, 160, 160));//45
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 725 , -310, 150, 150));//46
    imagesHolder.push(new ImageDisplayer('butterfly4.png', 618 , -200, 160, 160));//47
	imagesHolder.push(new ImageDisplayer('butterfly.png',  412 , -350, 145, 145));//48
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 560 , -350, 120, 120));//49
	imagesHolder.push(new ImageDisplayer('insecte.png', 610 , -700, 140, 140));//50
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 780 , -350, 145, 145));//51
    imagesHolder.push(new ImageDisplayer('butterfly3.png', 550 , -460, 125, 125));//52
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 420 , -470, 135, 135));//53
	imagesHolder.push(new ImageDisplayer('butterfly8.png', 724 , -440, 200, 200));//54
	imagesHolder.push(new ImageDisplayer('butterfly.png',  620 , -250, 100, 100));//55
	imagesHolder.push(new ImageDisplayer('butterfly7.png', 790 , -440, 120, 120));//56
    imagesHolder.push(new ImageDisplayer('butterfly2.png', 550 , -300, 150, 150));//57
    imagesHolder.push(new ImageDisplayer('insecte.png', 720 , -400, 100, 100));//58
    imagesHolder.push(new ImageDisplayer('insecte2.png', 650 , -300, 135, 135));//59
    imagesHolder.push(new ImageDisplayer('butterfly.png', 730 , -450, 200, 200));//60
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 822 , -450, 145, 145));//61
	imagesHolder.push(new ImageDisplayer('butterfly3.png', 760 , -100, 130, 130));//62
	imagesHolder.push(new ImageDisplayer('insecte2.png', 680 , -450, 200, 200));//63
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 555 , -340, 150, 150));//64
    imagesHolder.push(new ImageDisplayer('butterfly7.png', 725 , -400, 145, 145));//65
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 815 , -310, 135, 135));//66
    imagesHolder.push(new ImageDisplayer('butterfly4.png', 780 , -100, 100, 100));//67
	imagesHolder.push(new ImageDisplayer('butterfly.png',  960 , -550, 150, 150));//68
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 324 , -345, 123, 123));//69
	imagesHolder.push(new ImageDisplayer('insecte.png', 611 , -400, 130, 130));//70
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 780 , -250, 145, 145));//71
    imagesHolder.push(new ImageDisplayer('butterfly3.png', 850 , -360, 125, 125));//72
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 762 , -370, 135, 135));//73
	imagesHolder.push(new ImageDisplayer('butterfly8.png', 640 , -340, 125, 125));//74
	imagesHolder.push(new ImageDisplayer('butterfly.png',  640 , -350, 100, 100));//75
	imagesHolder.push(new ImageDisplayer('butterfly7.png', 414 , -240, 130, 130));//76
    imagesHolder.push(new ImageDisplayer('butterfly2.png', 525 , -400, 150, 150));//77
    imagesHolder.push(new ImageDisplayer('insecte.png', 620 , -300, 200, 200));//78
    imagesHolder.push(new ImageDisplayer('insecte2.png', 550 , -200, 150, 150));//79
 
};


function show(id){
    imagesHolder[id].isVisible = true;
    imagesHolder[id].isDancingW = true;
} ;


function setup(){
	createCanvas (window.innerWidth, window.innerHeight, WEBGL);
    /*onOff=true;*/
    imageMode(CENTER);
    
	sequencer = new Sequencer(audioPath, 28, false);
	
    sequencer.registerSequence({
		name : "allPapillon",
		start : 1,
		stop : 81,
		steps:[1, 1+1/2],
        onStep : (event) =>{
            switch(event.step  + 1){
                    //GAUCHE
                    // "papillon1",
                case 3 : show(0); break;
               
                    // "papillon2",
                case 4 : show(1); break;
             
                    // "papillon3",
                case 5 : show(2); break;
               
                    // "papillon4",
                case 6 : show(3); break;
             
                    // "papillon5",
                case 7 : show(4); break;
               
                    // "papillon6",
                case 8 : show(5); break;
             
                    // "papillon7",
                case 9 : show(6); break;
               
                    // "papillon8",
                case 10 : show(7); break;
             
                     // "papillon9",
                case 11 : show(8); break;
               
                    // "papillon10",
                case 12 : show(9); break;
             
                    // "papillon11",
                case 13 : show(10); break;
                
                    // "papillon12",
                case 14 : show(11); break;
              
                    // "papillon13",
                case 15 : show(12); break;
                
                    // "papillon14",
                case 16 : show(13); break;
              
                    // "papillon15",
                case 17 : show(14); break;
                
                    // "papillon16",
                case 18 : show(15); break;
              
                    // "papillon17",
                case 19 : show(16); break;
                
                    // "papillon18",
                case 20 : show(17); break;
  
                    // "papillon19",
                case 21 : show(18); break;
  
                    // "papillon20",
                case 22 : show(19); break;

                    // "papillon21",
                case 23 : show(20); break;
                    // "papillon22",
                case 24 : show(21); break;
 
                    // "papillon23",
                case 25 : show(22); break;
  
                    // "papillon24",
                case 26 : show(23); break;
   
                    // "papillon25",
                case 27 : show(24); break;
                    // "papillon25",
                case 28 : show(25); break;
   
                    // "papillon25",
                case 29 : show(26); break;

                    // "papillon25",
                case 30 : show(27); break;
  
                    // "papillon25",
                case 31 : show(28); break;
  
                    // "papillon25",
                case 32 : show(29); break;
    
                    // "papillon25",
                case 33 : show(30); break;
   
                    // "papillon25",
                case 34 : show(31); break;
 
                    // "papillon25",
                case 35 : show(32); break;
  
                    // "papillon25",
                case 36 : show(33); break;
  
                    // "papillon25",
            
                    // "papillon25",
                case 38 : show(35); break;
 
                    // "papillon25",
                case 39 : show(36); break;
   
                    // "papillon25",
                case 40 : show(37); break;
                    // "papillon25",
                case 41 : show(38); break;
   
                    // "papillon25",
                case 42 : show(39); break;
  
                    
                    
                    //DROITE
                case 3.5 : show(40); break;
         
                    // "papillon2",
                case 4.5 : show(41); break;
         
                    // "papillon3",
                case 5.5 : show(42); break;
         
                    // "papillon4",
                case 6.5 : show(43); break;
         
                    // "papillon5",
                case 7.5 : show(44); break;
         
                    // "papillon6",
                case 8.5 : show(45); break;
         
                    // "papillon7",
                case 9.5 : show(46); break;
         
                    // "papillon8",
                case 10.5 : show(47); break;
         
                     // "papillon9",
                case 11.5 : show(48); break;
         
                    // "papillon10",
                case 12.5 : show(49); break;
         
                    // "papillon11",
                case 13.5 : show(50); break;
         
                    // "papillon12",
                case 14.5 : show(51); break;
         
                    // "papillon13",
                case 15.5 : show(52); break;
         
                    // "papillon14",
                case 16.5 : show(53); break;
         
                    // "papillon15",
                case 17.5 : show(54); break;
         
                    // "papillon16",
                case 18.5 : show(55); break;
         
                    // "papillon17",
                case 19.5 : show(56); break;
         
                    // "papillon18",
                case 20.5 : show(57); break;
         
                    // "papillon19",
                case 21.5 : show(58); break;
         
                    // "papillon20",
                case 22.5 : show(59); break;
         
                    // "papillon21",
                case 23.5 : show(60); break;
         
                    // "papillon22",
                case 24.5 : show(61); break;
         
                    // "papillon23",
                case 25.5 : show(62); break;
         
                    // "papillon24",
                case 26.5 : show(63); break;
         
                    // "papillon25",
                case 27.5 : show(64); break;
         
                    // "papillon25",
                case 28.5 : show(65); break;
         
                    // "papillon25",
                case 29.5 : show(66); break;
         
                    // "papillon25",
                case 30.5 : show(67); break;
         
                    // "papillon25",
                case 31.5 : show(68); break;
         
                    // "papillon25",
                case 32.5 : show(69); break;
         
                    // "papillon25",
                case 33.5 : show(70); break;
         
                    // "papillon25",
                case 34.5 : show(71); break;
         
                    // "papillon25",
                case 35.5 : show(72); break;
         
                    // "papillon25",
                case 36.5 : show(73); break;
         
                    // "papillon25",
                case 37.5 : show(74); break;
         
                    // "papillon25",
                case 38.5 : show(75); break;
         
                    // "papillon25",
                case 39.5 : show(76); break;
         
                    // "papillon25",
                case 40.5 : show(77); break;
         
                    // "papillon25",
                case 41.5 : show(78); break;
         
                    // "papillon25",
                case 42.5 : show(79); break;
         
                
            }
        }
	});	
    
    
  
};


function draw(){
    clear();
	sequencer.update();
	
	for(let img of imagesHolder){
		img.draw();
        
    x = x + random(-3, 3);
        
       
        
        
        stroke(255);
        rotate(360);
        noFill();
        rect(150,150, size, size);
        
        size = size + 0.01;
        
        if(size > 850){
            size = -600;
        }
        
      /*  let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();

    	};*/
    

};};


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};






























