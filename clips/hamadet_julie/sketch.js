let audioPath = "./assets/audio/cloZee.mp3";
let sequencer;

let view;
let amp = 1;

let imagesHolder = [];

let brouilli;

let bgColor = 0;

let view2;

let view3;

function preload() {
	//fleurs 0-3
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', -16 , 8, 2, 2));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', -3 , 6, 2, 2));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 5 , 8, 2, 2));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 17 , 8, 2, 2));
	//pousses 4-7
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', -16 , 7, 6, 6));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', -3 , 5, 7, 7));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', 5 , 7, 7, 7));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', 17 , 7, 7, 7));
	//pousses 8-11
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse2a.png', -13 , 3, 17, 14));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse3a.png', -1 , 1, 15, 18));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse4a.png', 8 , 4, 13, 12));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse5a.png', 17 , 4, 8, 12));
	//pousses 12-15
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse2b.png', -13 , -1, 18, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse3b.png', -1 , -1, 16, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse4b.png', 11 , -1, 19, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse5b.png', 17 , 0, 8, 21));
	//pousses 16-19
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse2c.png', -13 , -1, 18, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse3c.png', -1 , -1, 15, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse4c.png', 11 , -1, 19, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse5c.png', 17 , 0, 8, 21));
	//oiseaux 20-24
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux1.png', -19 , 7, 7, 6)); 
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux2.png', -18 , 6, 9, 8));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux3.png', -15 , 4, 14, 11));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux4.png', -14 , 4, 16, 13));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux5.png', -12 , 3, 19, 16));
	//nuage 25-28
	imagesHolder.push(new ImageDisplayer('./assets/img/nuage1.png', 18 , 1, 5, 7));
	imagesHolder.push(new ImageDisplayer('./assets/img/nuage2.png', 16 , 1, 10, 10));
	imagesHolder.push(new ImageDisplayer('./assets/img/nuage3.png', 15 , -2, 16, 17));
	imagesHolder.push(new ImageDisplayer('./assets/img/nuage4.png', 11 , -2, 20, 20));
	//transfo en mont 29-32
	imagesHolder.push(new ImageDisplayer('./assets/img/transf1.png', -1 , -1, 44, 23));
	imagesHolder.push(new ImageDisplayer('./assets/img/transf2.png', -1 , -1, 44, 23));
	imagesHolder.push(new ImageDisplayer('./assets/img/transf3.png', -1 , -1, 44, 23));
	imagesHolder.push(new ImageDisplayer('./assets/img/transf4.png', -1 , -1, 44, 23));
	//ligne et orbe 33-34
	imagesHolder.push(new ImageDisplayer('./assets/img/lignes1.png',-1 , -1, 44, 23));
	imagesHolder.push(new ImageDisplayer('./assets/img/orbe1.png',-1 , -1, 44, 23));
	//masse noire 35-40
	imagesHolder.push(new ImageDisplayer('./assets/img/massenoire1.png', 0 , -1, 44, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/massenoire2.png', 0 , -1, 44, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/massenoire3.png', 0 , -1, 44, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/massenoire4.png', 0 , -1, 44, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/massenoire5.png', 0 , -1, 44, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/massenoire6.png', 0 , -1, 44, 22));
	//ligne blanche 41
	imagesHolder.push(new ImageDisplayer('./assets/img/lignes3.png', -1 , -1, 45, 22));
	//gardien 42
	imagesHolder.push(new ImageDisplayer('./assets/img/gardien.png', -1 , -1, 45, 22));
	//fleurs 2EME PARTIE 43-46
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', -17 , 7, 2, 2));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', -4 , 6, 2, 2));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 5 , 8, 2, 2));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 18 , 8, 2, 2));
	//pousses 2EME PARTIE 47-50
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', -17 , 6, 7, 7));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', -4 , 5, 7, 7));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', 5 , 7, 7, 7));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse1.png', 18 , 7, 6, 6));
	//pousses 2EME PARTIE 51-55
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse_partie2_1.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse_partie2_2.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse_partie2_3.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse_partie2_4.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/pousse_partie2_5.png', -1 , -1, 45, 22));
	//oiseaux 2EME PARTIE 56-58
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux_partie2_1.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux_partie2_2.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux_partie2_3.png', -1 , -1, 45, 22));
	//ciel 59-65
	imagesHolder.push(new ImageDisplayer('./assets/img/orbe2.png', -13 , -8, 3, 3));
	imagesHolder.push(new ImageDisplayer('./assets/img/orbe2.png', 2 , -9, 3, 3));
	imagesHolder.push(new ImageDisplayer('./assets/img/orbe2.png', 12 , -9, 3, 3));
	imagesHolder.push(new ImageDisplayer('./assets/img/nuage_partie2_1.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/nuage_partie2_2.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux_partie3_1.png', -1 , -1, 45, 22));
	imagesHolder.push(new ImageDisplayer('./assets/img/oiseaux_partie3_2.png', -1 , -1, 45, 22));
	//Fleur finale 66-68
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 0 , 8, 1, 1));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 0 , 8, 3, 3));
	imagesHolder.push(new ImageDisplayer('./assets/img/fleur1.png', 0 , 8, 5, 5));
	
}

function setup(){
	createCanvas (window.innerWidth, window.innerHeight, WEBGL);
	view = new mont();
	lights1 = new lights1();
	lights2 = new lights2();
	view2 = new mont2();
	lignes2 = new lignes2();
	view3 = new mont3();

	brouilli = new Brouilli();
		
	sequencer = new Sequencer(audioPath, 40, false);
	
	sequencer.registerSequence({
		name : "montvisibility",
		start : 1,
		onStart : () => {
			view.isVisible = true;
			/*brouilli.isVisible = true;*/
		},
		stop : 51,
		onStop : () => {
			view.isVisible = false;
		},

	}); //mont visibiltié
	
	sequencer.registerSequence({
		name : "mont",
		start : 1,
		onStart : () => {
			console.log("start");
			/*brouilli.isVisible = true;*/
		},
		stop : 16,
		onStop : () => {
			console.log("stop");
			view.moveEnable = false;
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			amp += 0.5;
			console.log(event);
		}
	}); //mont
		
	sequencer.registerSequence({
		name : "Firstlights",
		start : 9+1/2,
		onStart : () => {
			lights1.isVisible = true;
			
		},
		stop : 10,
		onStop : () => {
			console.log("stop");
		},
			
		steps : [1+1/2], 
		onStep : (event)=>{
			lights1.isVisible = false;
		}
	}); //éclairs 1
	
	sequencer.registerSequence({
		name : "Secondlights",
		start : 10+1/2,
		onStart : () => {
			lights2.isVisible = true;
		},
		stop : 11,
		onStop : () => {
			console.log("stop");
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			lights2.isVisible = false;
		}
	}); //éclairs 2
	
	sequencer.registerSequence({
		name : "Thirdlights",
		start : 13+1/2,
		onStart : () => {
			lights1.isVisible = true;
		},
		stop : 14,
		onStop : () => {
			console.log("stop");
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			lights1.isVisible = false;
		}
	}); //éclairs 3
	
	sequencer.registerSequence({
		name : "Finallights",
		start : 14+1/2,
		onStart : () => {
			lights2.isVisible = true;
		},
		stop : 15,
		onStop : () => {
			console.log("stop");
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			lights2.isVisible = false;
		}
	}); //éclairs 4
	
	sequencer.registerSequence({
		name : "fleur1",
		start : 17+1/2,
		onStart : () => {
			imagesHolder[0].isVisible = true ;
		},
	
		stop : 20+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[0].isVisible = false ;
		},
		
	}); //fleur 1
	
	sequencer.registerSequence({
		name : "fleur2",
		start : 18+1/2,
		onStart : () => {
			imagesHolder[1].isVisible = true ;
		},
	
		stop : 22,
		onStop : () => {
			console.log("stop");
			imagesHolder[1].isVisible = false ;
		},
		}); //fleur 2
		
	sequencer.registerSequence({
		name : "fleur3",
		start : 19+1/2,
		onStart : () => {
			imagesHolder[2].isVisible = true ;
		},
	
		stop :22+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[2].isVisible = false ;
		},
		}); //fleur 3
			
	sequencer.registerSequence({
		name : "fleur4",
		start : 20+1/2,
		onStart : () => {
			imagesHolder[3].isVisible = true ;
		},
	
		stop : 23+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[3].isVisible = false ;
		},	
	}); //fleur 4
	
	sequencer.registerSequence({
		name : "pousse1",
		start : 21+1/2,
		onStart : () => {
			imagesHolder[4].isVisible = true ;
		},
	
		stop : 24+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[4].isVisible = false ;
		},	
	}); //pousse1
	
	sequencer.registerSequence({
		name : "pousse2",
		start : 23,
		onStart : () => {
			imagesHolder[5].isVisible = true ;
		},
	
		stop : 24+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[5].isVisible = false ;
		},	
	}); //pousse2
	
	sequencer.registerSequence({
		name : "pousse3",
		start : 23+1/2,
		onStart : () => {
			imagesHolder[6].isVisible = true ;
		},
	
		stop : 24+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[6].isVisible = false ;
		},	
	}); //pousse3
	
	sequencer.registerSequence({
		name : "pousse4",
		start : 24+1/2,
		onStart : () => {
			imagesHolder[7].isVisible = true ;
		},
	
		stop : 24+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[7].isVisible = false ;
		},	
	}); //pousse4
	
	sequencer.registerSequence({
		name : "pousse5",
		start : 25+1/2,
		onStart : () => {
			imagesHolder[8].isVisible = true ;
		},
	
		stop : 26+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[8].isVisible = false ;
		},	
	}); //pousse5
	
	sequencer.registerSequence({
		name : "pousse6",
		start : 25+1/2,
		onStart : () => {
			imagesHolder[9].isVisible = true ;
		},
	
		stop : 26+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[9].isVisible = false ;
		},	
	}); //pousse6
	
	sequencer.registerSequence({
		name : "pousse7",
		start : 25+1/2,
		onStart : () => {
			imagesHolder[10].isVisible = true ;
		},
	
		stop : 26+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[10].isVisible = false ;
		},	
	}); //pousse7
	
	sequencer.registerSequence({
		name : "pousse8",
		start : 25+1/2,
		onStart : () => {
			imagesHolder[11].isVisible = true ;
		},
	
		stop : 26+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[11].isVisible = false ;
		},	
	}); //pousse8
	
	sequencer.registerSequence({
		name : "pousse9",
		start : 27+1/2,
		onStart : () => {
			imagesHolder[12].isVisible = true ;
		},
	
		stop : 28+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[12].isVisible = false ;
		},	
	}); //pousse9
	
	sequencer.registerSequence({
		name : "pousse10",
		start : 27+1/2,
		onStart : () => {
			imagesHolder[13].isVisible = true ;
		},
	
		stop : 28+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[13].isVisible = false ;
		},	
	}); //pousse10
	
	sequencer.registerSequence({
		name : "pousse11",
		start : 27+1/2,
		onStart : () => {
			imagesHolder[14].isVisible = true ;
		},
	
		stop : 28+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[14].isVisible = false ;
		},	
	}); //pousse11
	
	sequencer.registerSequence({
		name : "pousse12",
		start : 27+1/2,
		onStart : () => {
			imagesHolder[15].isVisible = true ;
		},
	
		stop : 28+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[15].isVisible = false ;
		},	
	}); //pousse12
	
	sequencer.registerSequence({
		name : "pousse13",
		start : 29+1/2,
		onStart : () => {
			imagesHolder[16].isVisible = true ;
		},
	
		stop : 33,
		onStop : () => {
			console.log("stop");
			imagesHolder[16].isVisible = false ;
		},	
	}); //pousse13
	
	sequencer.registerSequence({
		name : "pousse14",
		start : 29+1/2,
		onStart : () => {
			imagesHolder[17].isVisible = true ;
		},
	
		stop : 33,
		onStop : () => {
			console.log("stop");
			imagesHolder[17].isVisible = false ;
		},	
	}); //pousse14
	
	sequencer.registerSequence({
		name : "pousse15",
		start : 29+1/2,
		onStart : () => {
			imagesHolder[18].isVisible = true ;
		},
	
		stop : 33,
		onStop : () => {
			console.log("stop");
			imagesHolder[18].isVisible = false ;
		},	
	}); //pousse15
	
	sequencer.registerSequence({
		name : "pousse16",
		start : 29+1/2,
		onStart : () => {
			imagesHolder[19].isVisible = true ;
		},
	
		stop : 33,
		onStop : () => {
			console.log("stop");
			imagesHolder[19].isVisible = false ;
		},	
	}); //pousse16
	
	sequencer.registerSequence({
		name : "brouilli",
		start : 34,
		onStart : () => {
			brouilli.isVisible = true;
		},
		stop : 50,
		onStop : () => {
			brouilli.isVisible = false;
			}
	}); //brouilli
	
	sequencer.registerSequence({
		name : "backgroundblanc",
		start : 50,
		onStart : () => {
			bgColor = 255;
			
		},
		stop : 88,
		onStop : () => {
			bgColor = 0;
		},
	});  //changement couleur bckgd
	
	//SEQUENCES BLANC
	sequencer.registerSequence({
		name : "oiseaux1",
		start : 51,
		onStart : () => {
			imagesHolder[20].isVisible = true ;
		},
	
		stop : 51,
		onStop : () => {
			imagesHolder[20].isVisible = false ;
		},
	});//oiseaux1
	
	sequencer.registerSequence({
		name : "oiseaux2",
		start : 52,
		onStart : () => {
			imagesHolder[21].isVisible = true ;
		},
	
		stop : 52,
		onStop : () => {
			imagesHolder[21].isVisible = false ;
		},
	});//oiseaux2
	
	sequencer.registerSequence({
		name : "nuage1",
		start : 52,
		onStart : () => {
			imagesHolder[25].isVisible = true ;
		},
	
		stop : 52,
		onStop : () => {
			imagesHolder[25].isVisible = false ;
		},
	});//nuage1
	
	sequencer.registerSequence({
		name : "oiseaux3",
		start : 53,
		onStart : () => {
			imagesHolder[22].isVisible = true ;
		},
	
		stop : 53,
		onStop : () => {
			imagesHolder[22].isVisible = false ;
		},
	});//oiseaux3
	
	sequencer.registerSequence({
		name : "nuage2",
		start : 53,
		onStart : () => {
			imagesHolder[26].isVisible = true ;
		},
	
		stop : 53,
		onStop : () => {
			imagesHolder[26].isVisible = false ;
		},
	});//nuage2
	
	sequencer.registerSequence({
		name : "oiseaux4",
		start : 54,
		onStart : () => {
			imagesHolder[23].isVisible = true ;
		},
	
		stop : 55,
		onStop : () => {
			imagesHolder[23].isVisible = false ;
		},
	});//oiseaux4
	
	sequencer.registerSequence({
		name : "nuage3",
		start : 54,
		onStart : () => {
			imagesHolder[27].isVisible = true ;
		},
	
		stop : 55,
		onStop : () => {
			imagesHolder[27].isVisible = false ;
		},
	});//nuage3
	
	sequencer.registerSequence({
		name : "oiseaux5",
		start : 56,
		onStart : () => {
			imagesHolder[24].isVisible = true ;
		},
	
		stop : 57,
		onStop : () => {
			imagesHolder[24].isVisible = false ;
		},
	});//oiseaux5

	sequencer.registerSequence({
		name : "nuage4",
		start : 56,
		onStart : () => {
			imagesHolder[28].isVisible = true ;
		},
	
		stop : 63,
		onStop : () => {
			imagesHolder[28].isVisible = false ;
		},
	});//nuage4
	
	sequencer.registerSequence({
		name : "transf1",
		start : 58,
		onStart : () => {
			imagesHolder[29].isVisible = true ;
		},
	
		stop : 60,
		onStop : () => {
			imagesHolder[29].isVisible = false ;
		},
	});//transf1
	
	sequencer.registerSequence({
		name : "transf2",
		start : 61,
		onStart : () => {
			imagesHolder[30].isVisible = true ;
		},
	
		stop : 63,
		onStop : () => {
			imagesHolder[30].isVisible = false ;
		},
	});//transf2
	
	sequencer.registerSequence({
		name : "transf3",
		start : 64,
		onStart : () => {
			imagesHolder[31].isVisible = true ;
		},
	
		stop : 66,
		onStop : () => {
			imagesHolder[31].isVisible = false ;
		},
	});//transf3
	
	sequencer.registerSequence({
		name : "transf4",
		start : 67,
		onStart : () => {
			imagesHolder[32].isVisible = true ;
		},
	
		stop : 68,
		onStop : () => {
			imagesHolder[32].isVisible = false ;
		},
	});//transf4
	
	sequencer.registerSequence({
		name : "lignes1",
		start : 69,
		onStart : () => {
			imagesHolder[33].isVisible = true ;
		},
	
		stop : 70,
		onStop : () => {
			imagesHolder[33].isVisible = false ;
		},
	});//lignes1
	
	sequencer.registerSequence({
		name : "lignes2",
		start : 71,
		onStart : () => {
			lignes2.isVisible = true ;
		},
	
		stop : 72,
		onStop : () => {
			lignes2.isVisible = false ;
		},
	});//lignes2
	
	sequencer.registerSequence({
		name : "mont2",
		start : 73,
		onStart : () => {
			view2.isVisible = true ;
		},
	
		stop : 88,
		onStop : () => {
			view2.isVisible = false ;
		},
	});//mont2
	
	sequencer.registerSequence({
		name : "orbe1a",
		start : 73+1/2,
		onStart : () => {
			imagesHolder[34].isVisible = true ;
		},
	
		stop : 73+1/2,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			imagesHolder[34].isVisible = false;
		},
	});//orbe1a
	
	sequencer.registerSequence({
		name : "orbe1b",
		start : 74,
		onStart : () => {
			imagesHolder[34].isVisible = true ;
		},
	
		stop : 74,
					
		steps : [1+6/24], 
		onStep : (event)=>{
			imagesHolder[34].isVisible = false;
		},
	});//orbe1b
	
	sequencer.registerSequence({
		name : "orbe2a",
		start : 77+1/2,
		onStart : () => {
			imagesHolder[34].isVisible = true ;
		},
	
		stop : 77+1/2,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			imagesHolder[34].isVisible = false;
		},
	});//orbe2a
	
	sequencer.registerSequence({
		name : "orbe2c",
		start : 78,
		onStart : () => {
			imagesHolder[34].isVisible = true ;
		},
	
		stop : 78,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			imagesHolder[34].isVisible = false;
		},
	});//orbe2c
	
	sequencer.registerSequence({
		name : "orbe3a",
		start : 81+1/2,
		onStart : () => {
			imagesHolder[34].isVisible = true ;
		},
	
		stop : 81+1/2,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			imagesHolder[34].isVisible = false;
		},
	});//orbe3a
	
	sequencer.registerSequence({
		name : "orbe3b",
		start : 82,
		onStart : () => {
			imagesHolder[34].isVisible = true ;
		},
	
		stop : 82,
					
		steps : [1+6/24], 
		onStep : (event)=>{
			imagesHolder[34].isVisible = false;
		},
	});//orbe3b
	
	sequencer.registerSequence({
		name : "masse1",
		start : 82+1/2,
		onStart : () => {
			imagesHolder[35].isVisible = true ;
		},
	
		stop : 83,
		onStop : () => {
			imagesHolder[35].isVisible = false ;
		}
	});//masse1
	
	sequencer.registerSequence({
		name : "masse2",
		start : 84,
		onStart : () => {
			imagesHolder[36].isVisible = true ;
		},
	
		stop : 84,
		onStop : () => {
			imagesHolder[36].isVisible = false ;
		}
	});//masse2
	
	sequencer.registerSequence({
		name : "masse3",
		start : 85,
		onStart : () => {
			imagesHolder[37].isVisible = true ;
		},
	
		stop : 85,
		onStop : () => {
			imagesHolder[37].isVisible = false ;
		}
	});//masse3
	
	sequencer.registerSequence({
		name : "masse4",
		start : 86,
		onStart : () => {
			imagesHolder[38].isVisible = true ;
		},
	
		stop : 86,
		onStop : () => {
			imagesHolder[38].isVisible = false ;
		}
	});//masse4
	
	sequencer.registerSequence({
		name : "masse5",
		start : 87,
		onStart : () => {
			imagesHolder[39].isVisible = true ;
		},
	
		stop : 87,
		onStop : () => {
			imagesHolder[39].isVisible = false ;
		}
	});//masse5
	
	sequencer.registerSequence({
		name : "masse6",
		start : 88,
		onStart : () => {
			imagesHolder[40].isVisible = true ;
		},
	
		stop : 88,
		onStop : () => {
			imagesHolder[40].isVisible = false ;
		}
	});//masse6
	
	//2EME PARTIE SEQUENCES NOIRES
	sequencer.registerSequence({
		name : "lignes3",
		start : 90,
		onStart : () => {
			imagesHolder[41].isVisible = true ;
		},
	
		stop : 90,
		onStop : () => {
			imagesHolder[41].isVisible = false ;
		}
	});//lignes3
	
	sequencer.registerSequence({
		name : "mont3visibility",
		start : 91,
		onStart : () => {
			view3.isVisible = true;
		
		},
		stop : 95,
		onStop : () => {
			view3.isVisible = false;
		},

	}); //mont3 visibility
	
	sequencer.registerSequence({
		name : "mont3",
		start : 91,
		onStart : () => {
			console.log("start");
			
		},
		stop : 95,
		onStop : () => {
			console.log("stop");
			view3.moveEnable = false;
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			amp += 0.5;
			console.log(event);
		}
	}); //mont3
	
	sequencer.registerSequence({
		name : "lignes3suite",
		start : 96,
		onStart : () => {
			imagesHolder[41].isVisible = true ;
		},
	
		stop : 156,
		onStop : () => {
			imagesHolder[41].isVisible = false ;
		}
	});//lignes3suite
	
	sequencer.registerSequence({
		name : "gardiens",
		start : 91,
		onStart : () => {
			imagesHolder[42].isVisible = true ;
		},
		stop : 155,
		onStop : () => {
			imagesHolder[42].isVisible = false ;
		},
		steps : (new Array(24)).fill(1).map((n, k)=>n + k / 10), //fluidité 
		onStep : (event)=>{
			let amt = event.amount*5; //vitesse
			//amt = min(max(amt, 0), 1)
			if(amt > 1){
				amt = 1;
			}
			if(amt < 0){
				amt = 0;
			}
			imagesHolder[42].y = lerp(20, -1, amt) // 0 >>> 1 //hauteur
		}
	});//gardiens anim
	
	sequencer.registerSequence({
		name : "fleur1bis",
		start : 105+1/2,
		onStart : () => {
			imagesHolder[43].isVisible = true ;
		},
	
		stop : 108+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[43].isVisible = false ;
		},	
	}); //fleur 1 2EME PARTIE
	
	sequencer.registerSequence({
		name : "fleur2bis",
		start : 106+1/2,
		onStart : () => {
			imagesHolder[44].isVisible = true ;
		},
	
		stop : 110,
		onStop : () => {
			console.log("stop");
			imagesHolder[44].isVisible = false ;
		},
		}); //fleur 2 2EME PARTIE
		
	sequencer.registerSequence({
		name : "fleur3bis",
		start : 107+1/2,
		onStart : () => {
			imagesHolder[45].isVisible = true ;
		},
	
		stop : 110+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[45].isVisible = false ;
		},
		}); //fleur 3 2EME PARTIE
			
	sequencer.registerSequence({
		name : "fleur4bis",
		start : 108+1/2,
		onStart : () => {
			imagesHolder[46].isVisible = true ;
		},
	
		stop : 111+1/2,
		onStop : () => {
			console.log("stop");
			imagesHolder[46].isVisible = false ;
		},	
	}); //fleur 4 2EME PARTIE
	
	sequencer.registerSequence({
		name : "pousse1bis",
		start : 109+1/2,
		onStart : () => {
			imagesHolder[47].isVisible = true ;
		},
	
		stop : 113,
		onStop : () => {
			console.log("stop");
			imagesHolder[47].isVisible = false ;
		},	
	}); //pousse1 2EME PARTIE
	
	sequencer.registerSequence({
		name : "pousse2bis",
		start : 111,
		onStart : () => {
			imagesHolder[48].isVisible = true ;
		},
	
		stop : 113,
		onStop : () => {
			console.log("stop");
			imagesHolder[48].isVisible = false ;
		},	
	}); //pousse2 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse3bis",
		start : 111+1/2,
		onStart : () => {
			imagesHolder[49].isVisible = true ;
		},
	
		stop : 113,
		onStop : () => {
			console.log("stop");
			imagesHolder[49].isVisible = false ;
		},	
	}); //pousse3 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse4bis",
		start : 112+1/2,
		onStart : () => {
			imagesHolder[50].isVisible = true ;
		},
	
		stop : 113,
		onStop : () => {
			console.log("stop");
			imagesHolder[50].isVisible = false ;
		},	
	}); //pousse4 2EME PARTIE

	sequencer.registerSequence({
	name : "pousse5bis",
		start : 114,
		onStart : () => {
			imagesHolder[51].isVisible = true ;
		},
	
		stop : 154,
		onStop : () => {
			console.log("stop");
			imagesHolder[51].isVisible = false ;
		},	
	}); //pousse5 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse6bis",
		start : 115,
		onStart : () => {
			imagesHolder[52].isVisible = true ;
		},
	
		stop : 153,
		onStop : () => {
			console.log("stop");
			imagesHolder[52].isVisible = false ;
		},	
	}); //pousse6 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse7bis",
		start : 116,
		onStart : () => {
			imagesHolder[53].isVisible = true ;
		},
	
		stop : 153,
		onStop : () => {
			console.log("stop");
			imagesHolder[53].isVisible = false ;
		},	
	}); //pousse7 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse8bis",
		start : 117,
		onStart : () => {
			imagesHolder[54].isVisible = true ;
		},
	
		stop : 153,
		onStop : () => {
			console.log("stop");
			imagesHolder[54].isVisible = false ;
		},	
	}); //pousse8 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse9bis",
		start : 118,
		onStart : () => {
			imagesHolder[55].isVisible = true ;
		},
	
		stop : 153,
		onStop : () => {
			console.log("stop");
			imagesHolder[55].isVisible = false ;
		},	
	}); //pousse9 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseaux1bis",
		start : 122,
		onStart : () => {
			imagesHolder[56].isVisible = true ;
		},
	
		stop : 123,
		onStop : () => {
			console.log("stop");
			imagesHolder[56].isVisible = false ;
		},	
	}); //oiseaux1 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseaux2bis",
		start : 124,
		onStart : () => {
			imagesHolder[57].isVisible = true ;
		},
	
		stop : 125,
		onStop : () => {
			console.log("stop");
			imagesHolder[57].isVisible = false ;
		},	
	}); //oiseaux2 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseaux3bis",
		start : 126,
		onStart : () => {
			imagesHolder[58].isVisible = true ;
		},
	
		stop : 150,
		onStop : () => {
			console.log("stop");
			imagesHolder[58].isVisible = false ;
		},	
	}); //oiseaux3 2EME PARTIE

	sequencer.registerSequence({
		name : "orbe1bis",
		start : 130,
		onStart : () => {
			imagesHolder[59].isVisible = true ;
		},
	
		stop : 147,
		onStop : () => {
			console.log("stop");
			imagesHolder[59].isVisible = false ;
		},	
	}); //orbe1 2EME PARTIE

	sequencer.registerSequence({
		name : "orbe2bis",
		start : 134,
		onStart : () => {
			imagesHolder[60].isVisible = true ;
		},
	
		stop : 145,
		onStop : () => {
			console.log("stop");
			imagesHolder[60].isVisible = false ;
		},	
	}); //orbe2 2EME PARTIE

	sequencer.registerSequence({
		name : "orbe3bis",
		start : 138,
		onStart : () => {
			imagesHolder[61].isVisible = true ;
		},
	
		stop : 148,
		onStop : () => {
			console.log("stop");
			imagesHolder[61].isVisible = false ;
		},	
	}); //orbe3 2EME PARTIE

	sequencer.registerSequence({
		name : "nuage1bis",
		start : 139,
		onStart : () => {
			imagesHolder[62].isVisible = true ;
		},
	
		stop : 149,
		onStop : () => {
			console.log("stop");
			imagesHolder[62].isVisible = false ;
		},	
	}); //nuage1 2EME PARTIE

	sequencer.registerSequence({
		name : "nuage2bis",
		start : 139,
		onStart : () => {
			imagesHolder[63].isVisible = true ;
		},
	
		stop : 149,
		onStop : () => {
			console.log("stop");
			imagesHolder[63].isVisible = false ;
		},	
	}); //nuage2 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseauxdisp1",
		start : 151,
		onStart : () => {
			imagesHolder[64].isVisible = true ;
		},
	
		stop : 151,
		onStop : () => {
			console.log("stop");
			imagesHolder[64].isVisible = false ;
		},	
	}); //oiseaux disp 1

	sequencer.registerSequence({
		name : "oiseauxdisp2",
		start : 152,
		onStart : () => {
			imagesHolder[65].isVisible = true ;
		},
	
		stop : 152,
		onStop : () => {
			console.log("stop");
			imagesHolder[65].isVisible = false ;
		},	
	}); //oiseaux disp 2

	sequencer.registerSequence({
		name : "fleurfinale",
		start : 156,
		onStart : () => {
			imagesHolder[66].isVisible = true ;
		},
	
		stop : 156,
		onStop : () => {
			console.log("stop");
			imagesHolder[66].isVisible = false ;
		},	
	}); //fleur finale1
	
	sequencer.registerSequence({
		name : "fleurfinale2",
		start : 157,
		onStart : () => {
			imagesHolder[67].isVisible = true ;
		},
	
		stop : 157,
		onStop : () => {
			console.log("stop");
			imagesHolder[67].isVisible = false ;
		},	
	}); //fleur finale2
	
	sequencer.registerSequence({
		name : "fleurfinale3",
		start : 158,
		onStart : () => {
			imagesHolder[68].isVisible = true ;
		},
	
		stop : 158,
		onStop : () => {
			console.log("stop");
			imagesHolder[68].isVisible = false ;
		},	
	}); //fleur finale3

}

	

	
	
function draw(){
	sequencer.update();
	background(bgColor);
	
	view.draw();
	lights1.draw();
	lights2.draw();
	view2.draw();
	lignes2.draw();
	view3.draw();
	
	for(let img of imagesHolder){
		img.draw();
	}
	
	brouilli.draw();
}


//CLASSES

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}