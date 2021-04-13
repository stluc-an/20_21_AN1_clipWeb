let audioPath = "../assets/audio/Longtime.mp3";
let sequencer;  
let imagePath = "../assets/images/image(NUMBER).gif";

let particules = [];


let goute;



function setup(){
    
    createCanvas(window.innerWidth, window.innerHeight);
    
    goute = new Goute(width/2, height/2, 20);
    
    sequencer= new Sequencer(audioPath, 34, false);
   
    
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
             if(event.step == 16){
                document.querySelectorAll("li")[0].style.display="block";
             }
             if(event.step == 20){ 
                document.querySelectorAll("li")[0].style.display="none";
                document.querySelectorAll("li")[1].style.display="block";
             
             }
             if(event.step == 25){
                document.querySelectorAll("li")[0].style.display="none";
                document.querySelectorAll("li")[1].style.display="none";
                document.querySelectorAll("li")[2].style.display="block";
             }
             if(event.step == 29){
                document.querySelectorAll("li")[0].style.display="none";
                document.querySelectorAll("li")[1].style.display="none";
                document.querySelectorAll("li")[2].style.display="none"; 
                document.querySelectorAll("li")[3].style.display="block";
             }
             if(event.step == 31){
                document.querySelectorAll("li")[0].style.display="none";
                document.querySelectorAll("li")[1].style.display="none";
                document.querySelectorAll("li")[2].style.display="none"; 
                document.querySelectorAll("li")[3].style.display="none";
                document.querySelectorAll("li")[4].style.display="block";
                 
             } 
              if(event.step == 35){  
                document.querySelectorAll("li")[0].style.display="none";
                document.querySelectorAll("li")[1].style.display="none";
                document.querySelectorAll("li")[2].style.display="none"; 
                document.querySelectorAll("li")[3].style.display="none";
                document.querySelectorAll("li")[4].style.display="none"; 
                document.querySelectorAll("li")[5].style.display="block"; 
             }
              if(event.step == 39){
               document.querySelectorAll("li")[0].style.display="none";
               document.querySelectorAll("li")[1].style.display="none";
               document.querySelectorAll("li")[2].style.display="none"; 
               document.querySelectorAll("li")[3].style.display="none";
               document.querySelectorAll("li")[4].style.display="none"; 
               document.querySelectorAll("li")[5].style.display="none";
               document.querySelectorAll("li")[6].style.display="block";
            }
              if(event.step == 41){
               document.querySelectorAll("li")[0].style.display="none";
               document.querySelectorAll("li")[1].style.display="none";
               document.querySelectorAll("li")[2].style.display="none"; 
               document.querySelectorAll("li")[3].style.display="none";
               document.querySelectorAll("li")[4].style.display="none"; 
               document.querySelectorAll("li")[5].style.display="none";
               document.querySelectorAll("li")[6].style.display="none";
               document.querySelectorAll("li")[7].style.display="block";    
            }
             if(event.step == 43){
               document.querySelectorAll("li")[0].style.display="none";
               document.querySelectorAll("li")[1].style.display="none";
               document.querySelectorAll("li")[2].style.display="none"; 
               document.querySelectorAll("li")[3].style.display="none";
               document.querySelectorAll("li")[4].style.display="none"; 
               document.querySelectorAll("li")[5].style.display="none";
               document.querySelectorAll("li")[6].style.display="none";
               document.querySelectorAll("li")[7].style.display="none";  
               document.querySelectorAll("li")[8].style.display="block";  
            }
             
             if(event.step == 47){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="block";
                 
             }
                 
             if(event.step == 49){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="block";   
             }
                 
             if(event.step == 51){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="block";      
                 
             }
                 
             if(event.step == 53){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="block";   
             }    
                 
              if(event.step == 55){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="block";   
             }     
             
             
             /* when i listen hard */
             
             
              if(event.step == 62){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="block";   
              }
                 
              if(event.step == 64){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="block";    
              }
                 
              if(event.step == 65){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="block";    
              }   
                 
              if(event.step == 68){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="block";    
              }         
                 
              if(event.step == 71){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="block";    
              }            
                 
              if(event.step == 74){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="block";    
              }     
                 
              if(event.step == 76){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="block";   
              }  
                 
              if(event.step == 81){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="block";    
              }     
             
             
             if(event.step == 84){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="block";
              
              }     
             
             
             
             if(event.step == 88){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="block";
                 
              }   
             
             if(event.step == 92){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="block";   
              }   
             
             
            if(event.step == 95){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="block";  
              }   
              
             
             if(event.step == 99){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="block";   
              }   
             
             if(event.step == 100){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="block";    
              }   
             
              if(event.step == 101){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="block";    
              }   
             
             if(event.step == 102){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="block";   
              }   
             
             
             if(event.step == 103){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="block";   
              }   
             
             
             if(event.step == 104){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="block";   
              }    
             
             if(event.step == 105){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="block";   
              }    
             
             if(event.step == 106){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="none";   
              document.querySelectorAll("li")[33].style.display="block";   
              }    
             
             
              if(event.step == 107){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="none";   
              document.querySelectorAll("li")[33].style.display="none";   
              document.querySelectorAll("li")[34].style.display="block";    
              }   
             
               if(event.step == 111){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="none";   
              document.querySelectorAll("li")[33].style.display="none";   
              document.querySelectorAll("li")[34].style.display="none"; 
              document.querySelectorAll("li")[35].style.display="block";     
              } 
             
              if(event.step == 115){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="none";   
              document.querySelectorAll("li")[33].style.display="none";   
              document.querySelectorAll("li")[34].style.display="none"; 
              document.querySelectorAll("li")[35].style.display="none"; 
              document.querySelectorAll("li")[36].style.display="block";    
              } 
             
               if(event.step == 124){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="none";   
              document.querySelectorAll("li")[33].style.display="none";   
              document.querySelectorAll("li")[34].style.display="none"; 
              document.querySelectorAll("li")[35].style.display="none"; 
              document.querySelectorAll("li")[36].style.display="none";  
              document.querySelectorAll("li")[37].style.display="block";      
              } 
             
              if(event.step == 125){
              document.querySelectorAll("li")[0].style.display="none";
              document.querySelectorAll("li")[1].style.display="none";
              document.querySelectorAll("li")[2].style.display="none"; 
              document.querySelectorAll("li")[3].style.display="none";
              document.querySelectorAll("li")[4].style.display="none"; 
              document.querySelectorAll("li")[5].style.display="none";
              document.querySelectorAll("li")[6].style.display="none";
              document.querySelectorAll("li")[7].style.display="none";  
              document.querySelectorAll("li")[8].style.display="none";  
              document.querySelectorAll("li")[9].style.display="none";
              document.querySelectorAll("li")[10].style.display="none";   
              document.querySelectorAll("li")[11].style.display="none";      
              document.querySelectorAll("li")[12].style.display="none"; 
              document.querySelectorAll("li")[13].style.display="none";    
              document.querySelectorAll("li")[14].style.display="none";
              document.querySelectorAll("li")[15].style.display="none";
              document.querySelectorAll("li")[16].style.display="none";
              document.querySelectorAll("li")[17].style.display="none";
              document.querySelectorAll("li")[18].style.display="none";
              document.querySelectorAll("li")[19].style.display="none";
              document.querySelectorAll("li")[20].style.display="none";
              document.querySelectorAll("li")[21].style.display="none"; 
              document.querySelectorAll("li")[22].style.display="none";
              document.querySelectorAll("li")[23].style.display="none";
              document.querySelectorAll("li")[24].style.display="none";   
              document.querySelectorAll("li")[25].style.display="none"; 
              document.querySelectorAll("li")[26].style.display="none";  
              document.querySelectorAll("li")[27].style.display="none"; 
              document.querySelectorAll("li")[28].style.display="none";    
              document.querySelectorAll("li")[29].style.display="none";   
              document.querySelectorAll("li")[30].style.display="none";  
              document.querySelectorAll("li")[31].style.display="none";  
              document.querySelectorAll("li")[32].style.display="none";   
              document.querySelectorAll("li")[33].style.display="none";   
              document.querySelectorAll("li")[34].style.display="none"; 
              document.querySelectorAll("li")[35].style.display="none"; 
              document.querySelectorAll("li")[36].style.display="none";  
              document.querySelectorAll("li")[37].style.display="none";   
              document.querySelectorAll("li")[38].style.display="block";      
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
         stop : 300,
         onStop : ()  =>  {
            goute.isPlaying = true;
        },                      
         onStep : (event) => {
            
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