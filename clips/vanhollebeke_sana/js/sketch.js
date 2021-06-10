let audioPath = "./assets/audio/Longtime.mp3";
let sequencer;  
let imagePath = "./assets/images/image(NUMBER).gif";

let particules = [];

let goute;




function setup(){
    
    createCanvas(window.innerWidth, window.innerHeight);
    
    goute = new Goute(width/2, height/2, 20);
    
    sequencer= new Sequencer(audioPath, 34, true);
   
    
    sequencer.registerSequence({
         name : "first",
         start : 1,
         onStart: () => {
            console.log("start");
         }, 
         stop : 126,
         onStop : ()  =>  {
            console.log("stop");
            
             
        },                      
         onStep : (event) => {
             console.log(event);
             particules.push(new Rectangle(random(width), random (height)) );
            
         }  
  
    });  
    
      
    sequencer.registerSequence({
         name : "sec",
         start : 9,
         onStart: () => {
             console.log("start");
         }, 
         stop : 126,
         onStop : ()  =>  {
            console.log("stop");
             sequencer.BPM = 128;
         },                      
         onStep : (event) => {
             console.log(event);
             
             /* 1 im outside the door */
             if(event.step == 16){
                document.querySelectorAll("li")[0].style.display="block";
             }
             
             /* 2 you dont seem to open the door */
             
             if(event.step == 20){ 
                 
                document.querySelectorAll("li")[0].style.display="none";
                document.querySelectorAll("li")[1].style.display="block";
                 
             /* 3 are you coming back to open the door */
                 
             }
             if(event.step == 25){
                 
                document.querySelectorAll("li")[1].style.display="none";
                document.querySelectorAll("li")[2].style.display="block";
             }
             
             /* 4 why is it so quiet */
             
             if(event.step == 29){
        
                document.querySelectorAll("li")[2].style.display="none"; 
                document.querySelectorAll("li")[3].style.display="block";
             }
             
             /* 5 imma keep on waiting behind */
             
             if(event.step == 31){
              
                document.querySelectorAll("li")[3].style.display="none";
                document.querySelectorAll("li")[4].style.display="block";
             
            /* 6 the door */ 
             } 
              if(event.step == 33){  
                  
                document.querySelectorAll("li")[4].style.display="none"; 
                document.querySelectorAll("li")[5].style.display="block"; 
             }
             
             /* 7 its closed */ 
              if(event.step == 35){
               
               document.querySelectorAll("li")[5].style.display="none";
               document.querySelectorAll("li")[6].style.display="block";
            }
             
             /* space */ 
             
             if(event.step == 38){
               
               document.querySelectorAll("li")[6].style.display="none";
               document.querySelectorAll("li")[7].style.display="block";
            }
             
             /* 8 i belong to you like the yin to the yang */
             
             
              if(event.step == 39){
              
               document.querySelectorAll("li")[7].style.display="none";
               document.querySelectorAll("li")[8].style.display="block";    
            }
             
            /* 9 a lot of things have changed since */
             
             if(event.step == 41){
              
               document.querySelectorAll("li")[8].style.display="none";  
               document.querySelectorAll("li")[9].style.display="block";  
            }
             
            /* 10 last night */
             
             if(event.step == 43){
            
              document.querySelectorAll("li")[9].style.display="none";  
              document.querySelectorAll("li")[10].style.display="block";
                 
             }
             
             /* 11 you closed it */
                 
             if(event.step == 45){
              
              document.querySelectorAll("li")[10].style.display="none";
              document.querySelectorAll("li")[11].style.display="block";   
             }
             
             /* 12 now would you open the door? */
                 
             if(event.step == 46){
        
              document.querySelectorAll("li")[11].style.display="none";   
              document.querySelectorAll("li")[12].style.display="block";      
                 
             }
                 
             /* 13 why is it a stranger? */
             
             
             if(event.step == 49){
         
              document.querySelectorAll("li")[12].style.display="none";      
              document.querySelectorAll("li")[13].style.display="block";   
             }    
               
             /* 14 why is it a stranger when I call? */
             
              if(event.step == 51){
                  
              document.querySelectorAll("li")[13].style.display="none"; 
              document.querySelectorAll("li")[14].style.display="block";   
             }     
             
             
             /* 15 why? */
             
             
              if(event.step == 53){
     
              document.querySelectorAll("li")[14].style.display="none";    
              document.querySelectorAll("li")[15].style.display="block";   
              }
             
             
            /* 16 why is it a stranger when I call your phone? */
             
              if(event.step == 55){
            
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="block";    
              }
             
             /* space */ 
             
             if(event.step == 59){
            
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="block";    
              }
             
             
             /* 17 when I listen hard */
                 
              if(event.step == 61){
         
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="block";    
              }   
             
             /* 18 i can hear you breathing */
                 
              if(event.step == 63){
           
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="block";    
              }         
                 
             /* 19 on the other side */
             
              if(event.step == 65){
      
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="block";    
              }            
                       
             
             /* 20 i hear you breathing */
             
              if(event.step == 67){
         
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="block";    
              }     
                 
             /* 21 you breathing */
             
             if(event.step == 69){
         
              document.querySelectorAll("li")[21].style.display="none";
              document.querySelectorAll("li")[22].style.display="block";    
              }     
             
             /* 22 behind the door */
             
              if(event.step == 71){
         
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="block";   
              }  
             
             
             
             /* 23 behind the door */
                 
              if(event.step == 73){
       
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="block";    
              }     
             
             /* 24 are you coming back to open the door? */
             
             if(event.step == 76){
   
              document.querySelectorAll("li")[24].style.display="none"; 
              document.querySelectorAll("li")[25].style.display="block";
              
              }     
             
             /* space */
             
             if(event.step == 80){
   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="block";
              
              }     
             
             
             /* 25 you gotta forget */
             
             if(event.step == 82){
           
              document.querySelectorAll("li")[26].style.display="none";
              document.querySelectorAll("li")[27].style.display="block";
                 
              }   
             
             /* 26  I thought you disappeared */
             
             if(event.step == 83){
             
              document.querySelectorAll("li")[27].style.display="none";
              document.querySelectorAll("li")[28].style.display="block";   
              }   
             
             /* 27 i searched for you in the crowd */
             
            if(event.step == 84){
           
              document.querySelectorAll("li")[28].style.display="none";   
              document.querySelectorAll("li")[29].style.display="block";  
              }   
             
             /* space */
             
             if(event.step == 87){
           
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="block";  
              }   
             
             
             /* 28 i didn't  realize I left my love behind that door */
             
             if(event.step == 88){
             
              document.querySelectorAll("li")[30].style.display="none"; 
              document.querySelectorAll("li")[31].style.display="block";   
              }   
             
             /* 29 i'm sorry */
             
             if(event.step == 92){
       
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="block";    
              }   
              
             
             
             /* 30 i'm sorry I left you alone behind that door */
             
              if(event.step == 94){
        
              document.querySelectorAll("li")[32].style.display="none"; 
              document.querySelectorAll("li")[33].style.display="block";    
              } 
             
            /* 31 are you here? */
             
             if(event.step == 98){
       
              document.querySelectorAll("li")[33].style.display="none";    
              document.querySelectorAll("li")[34].style.display="block";   
              }   
             
             /* 32 is it you? */
             
             if(event.step == 99){
    
              document.querySelectorAll("li")[34].style.display="none";   
              document.querySelectorAll("li")[35].style.display="block";   
              }   
             
             /* 33 is it real? */ 
             
             if(event.step == 100){
         
              document.querySelectorAll("li")[35].style.display="none";  
              document.querySelectorAll("li")[36].style.display="block";   
              }    
             
            /* 34 i've been waiting for this */
             
             if(event.step == 101){
     
              document.querySelectorAll("li")[36].style.display="none";  
              document.querySelectorAll("li")[37].style.display="block";   
              }    
             
             /* 35 is it real? */
             
             if(event.step == 102){
         
              document.querySelectorAll("li")[37].style.display="none";   
              document.querySelectorAll("li")[38].style.display="block";   
              }    
             
             /* 36 is it you? */
             
              if(event.step == 103){
   
              document.querySelectorAll("li")[38].style.display="none";   
              document.querySelectorAll("li")[39].style.display="block";    
              }   
             
             /* 37 are you here? */
             
               if(event.step == 104){
              
              document.querySelectorAll("li")[39].style.display="none"; 
              document.querySelectorAll("li")[40].style.display="block";     
              } 
             
             /* 38 i've been waiting for this */
             
              if(event.step == 105){
    
              document.querySelectorAll("li")[40].style.display="none"; 
              document.querySelectorAll("li")[41].style.display="block";    
              } 
             
             /* 39 long time no see baby */
             
               if(event.step == 107){
      
              document.querySelectorAll("li")[41].style.display="none";  
              document.querySelectorAll("li")[42].style.display="block";      
              } 
              

             
             /* 41 long time no see baby */
             
             if(event.step == 110){
                 
             document.querySelectorAll("li")[42].style.display="none"; 
             document.querySelectorAll("li")[43].style.display="block";
             }
             
             /* 43 do you mind if I call you baby? */
             
             if(event.step == 115){
                 
             document.querySelectorAll("li")[43].style.display="none"; 
             document.querySelectorAll("li")[44].style.display="block";
             }
             
             /* 44 space */
             
             if(event.step == 118){
                 
             document.querySelectorAll("li")[44].style.display="none"; 
             document.querySelectorAll("li")[45].style.display="block";
             }
             
               /* 45 do you mind if I call you baby? */
             
             if(event.step == 119){
                 
             document.querySelectorAll("li")[45].style.display="none"; 
             document.querySelectorAll("li")[46].style.display="block";
             }
             
             /* space */
             
             if(event.step == 125){
                 
             document.querySelectorAll("li")[46].style.display="none"; 
             document.querySelectorAll("li")[47].style.display="block";
             }
             
       
            let realPath = imagePath.replace("NUMBER", floor(random(1, 6)));
             
            console.log(realPath);
            document.body.style.backgroundImage = "url('"+ realPath + "')";  
         }  
  
    }); 
    
    
    
    sequencer.registerSequence({
         name : "third",
         start : 9,
         onStart: () => {
            goute.isPlaying = true;
         }, 
         stop : 126,
         onStop : ()  =>  {
            goute.isPlaying = false;
        },                      
         onStep : (event) => {
            
         }  
  
    });
    sequencer.registerSequence({
         name : "fourth",
         start : 127,
         onStart: () => {
         }, 
         stop : 300,
         onStop : ()  =>  {
             
        },                      
         onStep : (event) => {
            let realPath = imagePath.replace("NUMBER",floor(random(6, 9)));
             
            console.log(realPath);
            document.body.style.backgroundImage = "url('"+ realPath + "')";  
         }  
  
    }); 
    

    
    /*    name : "partie2",
          start*/
       
    
}

function draw(){
    
     clear();
    
    sequencer.update(); 
    for(let particule of particules){
        particule.draw();   
    }
    
    
        goute.draw();
        
    
}








class Goute{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.isPlaying = false;
    }
    
    draw(){
        if(this.isPlaying == false)return;
        noFill();
        stroke(225);
        this.size += 10;
        if(this.size * this.size > width * width + height * height){
            this.size = 20;
        }
        ellipse(this.x, this.y, this.size);
    }
}

class Rectangle{
    
    
    constructor(x,y,){
    this.x = x;
    this.y = y;
    this.size = 4,5;
        
        
        
    }
    
  draw(){
    
    noStroke(); 
    fill(225, 225, 225, 200); 
    rect(this.x, this.y, this.size);  
      
      
  } 
    
}