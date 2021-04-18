let audioPath ="assets/Champignons.mp3";
let sequencer;

let particlues = [];


function setup(){
     noCanvas()
     
    sequencer = new Sequencer(audioPath, 120, true);
     
    sequencer.registerSequence({
         name : "start",
         start : 2,
         onStart : () => {
            console.log("partie1");
             
             
                document.querySelector(".debut").style.display = "block";
             
         },
         stop : 16,
         onStop : () => {
             console.log("finPartie1");
             
                document.querySelector(".debut").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
             if(event.step % 2 == 0 ){
             }else{
             }  
         }
     });
    
    
    sequencer.registerSequence({
         name : "partie2",
         start : 17,
         onStart : () => {
            console.log("partie2");
             
             document.querySelector(".debut2").style.display = "block";
             
         },
         stop : 33,
         onStop : () => {
             console.log("finPartie2");
             
             document.querySelector(".debut2").style.display = "none";
             
         },
         onStep : (event) => {
             console.log(event);
              
         }
      });
    
      sequencer.registerSequence({
         name : "partie3",
         start : 33,
         onStart : () => {
            console.log("partie3");
             
             document.querySelector(".deformation").style.display = "block";

             
         },
         stop :40,
         onStop : () => {
             console.log("finPartie3");
             
             document.querySelector(".deformation").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });

    sequencer.registerSequence({
         name : "partie4",
         start : 41,
         onStart : () => {
            console.log("partie4");
             
             document.querySelector(".deformation2").style.display = "block";

             
         },
         stop :48,
         onStop : () => {
             console.log("finPartie4");
             
             document.querySelector(".deformation2").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });

   sequencer.registerSequence({
         name : "partie5",
         start : 49,
         onStart : () => {
            console.log("partie5");
             
             document.querySelector(".deformation3").style.display = "block";

             
         },
         stop :56,
         onStop : () => {
             console.log("finPartie5");
             
             document.querySelector(".deformation3").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    sequencer.registerSequence({
         name : "partie6",
         start : 57,
         onStart : () => {
            console.log("partie6");
             
             document.querySelector(".deformation4").style.display = "block";

             
         },
         stop :64,
         onStop : () => {
             console.log("finPartie6");
             
             document.querySelector(".deformation4").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    sequencer.registerSequence({
         name : "partie7",
         start : 65,
         onStart : () => {
            console.log("partie7");
             
             document.querySelector(".deformation5").style.display = "block";

             
         },
         stop :72,
         onStop : () => {
             console.log("finPartie7");
             
             document.querySelector(".deformation5").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    sequencer.registerSequence({
         name : "partie8",
         start : 73,
         onStart : () => {
            console.log("partie8");
             
             document.querySelector(".deformation6").style.display = "block";

             
         },
         stop : 80,
         onStop : () => {
             console.log("finPartie8");
             
             document.querySelector(".deformation6").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    
    sequencer.registerSequence({
         name : "partie9",
         start : 81,
         onStart : () => {
            console.log("partie9");
             
             document.querySelector(".deformation7").style.display = "block";

             
         },
         stop : 88,
         onStop : () => {
             console.log("finPartie9");
             
             document.querySelector(".deformation7").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    sequencer.registerSequence({
         name : "partie10",
         start : 89,
         onStart : () => {
            console.log("partie10");
             
             document.querySelector(".deformation8").style.display = "block";

             
         },
         stop : 97,
         onStop : () => {
             console.log("finPartie10");
             
             document.querySelector(".deformation8").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    sequencer.registerSequence({
         name : "preRefrain1",
         start : 97,
         onStart : () => {
            console.log("partiejsp");
             
             document.querySelector(".pre-refrain1").style.display = "block";

             
         },
         stop : 122,
         onStop : () => {
             console.log("finPartiejsp");
             
             document.querySelector(".pre-refrain1").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });

  
sequencer.registerSequence({
         name : "preRefrain2",
         start : 122,
         onStart : () => {
            console.log("partiejspp");
             
             document.querySelector(".pre-refrain2").style.display = "block";

             
         },
         stop : 127,
         onStop : () => {
             console.log("finPartiejspp");
             
             document.querySelector(".pre-refrain2").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });

    
    sequencer.registerSequence({
         name : "preRefrain3",
         start : 128,
         onStart : () => {
            console.log("partiejsppp");
             
             document.querySelector(".pre-refrain3").style.display = "block";

             
         },
         stop : 145,
         onStop : () => {
             console.log("finPartiejsppp");
             
             document.querySelector(".pre-refrain3").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    sequencer.registerSequence({
         name : "preRefrain4",
         start : 146,
         onStart : () => {
            console.log("partiejspppp");
             
             document.querySelector(".pre-refrain4").style.display = "block";

             
         },
         stop : 151,
         onStop : () => {
             console.log("finPartiejspppp");
             
             document.querySelector(".pre-refrain4").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });
    
    
  sequencer.registerSequence({
         name : "preRefrain5",
         start : 152,
         onStart : () => {
            console.log("partiejsppppp");
             
             document.querySelector(".pre-refrain5").style.display = "block";

             
         },
         stop : 182,
         onStop : () => {
             console.log("finPartiejsppppp");
             
             document.querySelector(".pre-refrain5").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });  
    
    
    
    
    
    
    
    sequencer.registerSequence({
         name : "champignons",
         start : 183,
         onStart : () => {
            console.log("champignons");
             
             document.querySelector(".champignons").style.display = "block";

             
         },
         stop : 184,
         onStop : () => {
             console.log("champignons");
             
             document.querySelector(".champignons").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });  
    
    
    
    sequencer.registerSequence({
         name : "refrain1",
         start : 185,
         onStart : () => {
            console.log("refrain1");
             
             document.querySelector(".refrain1").style.display = "block";

             
         },
         stop : 200,
         onStop : () => {
             console.log("refrain1");
             
             document.querySelector("refrain1").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });  
    
    
    sequencer.registerSequence({
         name : "refrain2",
         start : 201,
         onStart : () => {
            console.log("refrain2");
             
             document.querySelector(".refrain2").style.display = "block";

             
         },
         stop : 216,
         onStop : () => {
             console.log("refrain2");
             
             document.querySelector("refrain2").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });  
    
    
    sequencer.registerSequence({
         name : "champignons",
         start : 217,
         onStart : () => {
            console.log("champignons");
             
             document.querySelector(".champignons").style.display = "block";

             
         },
         stop : 218,
         onStop : () => {
             console.log("champignons");
             
             document.querySelector(".champignons").style.display = "none";
         },
         onStep : (event) => {
             console.log(event);
              
         }
     });  
    
    
    
    
    
    
    
    
    
    
    
}


function draw(){
    sequencer.update();
}