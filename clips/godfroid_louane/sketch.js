let audioPath = "./assets/audio/daydreamer.mp3";
let sequencer;

let imagesHolder =[];

function preload() {
	//butterfly 0-17 gauche
	imagesHolder.push(new ImageDisplayer('butterfly.png', -500 , -300, 200, 200));//0
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -640 , -370, 450, 450));//1
	imagesHolder.push(new ImageDisplayer('butterfly3.png', -560 , -300, 300, 300));//2
	imagesHolder.push(new ImageDisplayer('insecte2.png', -680 , -700, 400, 400));//3
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -650 , -300, 150, 150));//4
    imagesHolder.push(new ImageDisplayer('butterfly7.png', -950 , -600, 550, 550));//5
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -850 , -700, 450, 450));//6
    imagesHolder.push(new ImageDisplayer('butterfly4.png', -400 , -700, 600, 600));//7
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -760 , -450, 450, 450));//8
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -760 , -350, 200, 200));//9
	imagesHolder.push(new ImageDisplayer('insecte.png', -610 , -700, 400, 400));//10
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -580 , -450, 450, 450));//11
    imagesHolder.push(new ImageDisplayer('butterfly3.png', -550 , -460, 250, 250));//12
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -420 , -470, 350, 350));//13
	imagesHolder.push(new ImageDisplayer('butterfly8.png', -440 , -440, 250, 250));//14
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -780 , -350, 300, 300));//15
	imagesHolder.push(new ImageDisplayer('butterfly7.png', -610 , -440, 300, 300));//16
    imagesHolder.push(new ImageDisplayer('butterfly2.png', -750 , -300, 150, 150));//17
    imagesHolder.push(new ImageDisplayer('insecte.png', -620 , -420, 200, 200));//18
    imagesHolder.push(new ImageDisplayer('insecte2.png', -550 , -500, 350, 350));//19
    imagesHolder.push(new ImageDisplayer('butterfly.png', -350 , -400, 250, 250));//20
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -740 , -370, 400, 400));//21
	imagesHolder.push(new ImageDisplayer('butterfly3.png', -460 , -400, 300, 300));//22
	imagesHolder.push(new ImageDisplayer('insecte2.png', -780 , -500, 400, 400));//23
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -550 , -330, 250, 250));//24
    imagesHolder.push(new ImageDisplayer('butterfly7.png', -450 , -300, 150, 150));//25
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -550 , -600, 220, 220));//26
    imagesHolder.push(new ImageDisplayer('butterfly4.png', -790 , -650, 600, 600));//27
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -660 , -390, 350, 450));//28
	imagesHolder.push(new ImageDisplayer('butterfly2.png', -760 , -350, 200, 200));//29
	imagesHolder.push(new ImageDisplayer('insecte.png', -510 , -400, 340, 340));//30
    imagesHolder.push(new ImageDisplayer('butterfly8.png', -780 , -650, 350, 350));//31
    imagesHolder.push(new ImageDisplayer('butterfly3.png', -410 , -430, 150, 150));//32
    imagesHolder.push(new ImageDisplayer('butterfly5.png', -330 , -510, 450, 450));//33
	imagesHolder.push(new ImageDisplayer('butterfly8.png', -840 , -640, 250, 250));//34
	imagesHolder.push(new ImageDisplayer('butterfly.png',  -780 , -350, 300, 300));//35
	imagesHolder.push(new ImageDisplayer('butterfly7.png', -650 , -340, 200, 200));//36
    imagesHolder.push(new ImageDisplayer('butterfly2.png', -620 , -400, 250, 250));//37
    imagesHolder.push(new ImageDisplayer('insecte.png', -600 , -420, 300, 300));//38
    imagesHolder.push(new ImageDisplayer('insecte2.png', -350 , -380, 350, 350));//39
    //butterfly 18-37 droite
    imagesHolder.push(new ImageDisplayer('butterfly.png', 200 , -300, 200, 200));//40
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 140 , -370, 450, 450));//41
	imagesHolder.push(new ImageDisplayer('butterfly3.png', 360 , -300, 300, 300));//42
	imagesHolder.push(new ImageDisplayer('insecte2.png', 480 , -650, 400, 400));//43
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 350 , -300, 150, 150));//44
    imagesHolder.push(new ImageDisplayer('butterfly7.png', 150 , -600, 550, 550));//45
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 250 , -710, 450, 450));//46
    imagesHolder.push(new ImageDisplayer('butterfly4.png', 180 , -700, 600, 600));//47
	imagesHolder.push(new ImageDisplayer('butterfly.png',  260 , -450, 450, 450));//48
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 360 , -350, 200, 200));//49
	imagesHolder.push(new ImageDisplayer('insecte.png', 10 , -700, 400, 400));//50
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 380 , -350, 450, 450));//51
    imagesHolder.push(new ImageDisplayer('butterfly3.png', 250 , -460, 250, 250));//52
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 320 , -470, 350, 350));//53
	imagesHolder.push(new ImageDisplayer('butterfly8.png', 240 , -440, 250, 250));//54
	imagesHolder.push(new ImageDisplayer('butterfly.png',  200 , -250, 300, 300));//55
	imagesHolder.push(new ImageDisplayer('butterfly7.png', 190 , -440, 300, 300));//56
    imagesHolder.push(new ImageDisplayer('butterfly2.png', 350 , -300, 150, 150));//57
    imagesHolder.push(new ImageDisplayer('insecte.png', 420 , -400, 200, 200));//58
    imagesHolder.push(new ImageDisplayer('insecte2.png', 450 , -500, 350, 350));//59
    imagesHolder.push(new ImageDisplayer('butterfly.png', 300 , -450, 200, 200));//60
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 220 , -450, 450, 450));//61
	imagesHolder.push(new ImageDisplayer('butterfly3.png', 460 , -600, 300, 300));//62
	imagesHolder.push(new ImageDisplayer('insecte2.png', 280 , -450, 400, 400));//63
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 550 , -340, 150, 150));//64
    imagesHolder.push(new ImageDisplayer('butterfly7.png', 450 , -400, 450, 450));//65
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 450 , -310, 350, 350));//66
    imagesHolder.push(new ImageDisplayer('butterfly4.png', 280 , -600, 300, 300));//67
	imagesHolder.push(new ImageDisplayer('butterfly.png',  160 , -550, 450, 450));//68
	imagesHolder.push(new ImageDisplayer('butterfly2.png', 240 , -345, 230, 230));//69
	imagesHolder.push(new ImageDisplayer('insecte.png', 110 , -500, 300, 300));//70
    imagesHolder.push(new ImageDisplayer('butterfly8.png', 480 , -650, 450, 450));//71
    imagesHolder.push(new ImageDisplayer('butterfly3.png', 150 , -360, 250, 250));//72
    imagesHolder.push(new ImageDisplayer('butterfly5.png', 620 , -370, 350, 350));//73
	imagesHolder.push(new ImageDisplayer('butterfly8.png', 540 , -340, 250, 250));//74
	imagesHolder.push(new ImageDisplayer('butterfly.png',  250 , -350, 300, 300));//75
	imagesHolder.push(new ImageDisplayer('butterfly7.png', 140 , -640, 300, 300));//76
    imagesHolder.push(new ImageDisplayer('butterfly2.png', 250 , -700, 150, 150));//77
    imagesHolder.push(new ImageDisplayer('insecte.png', 620 , -600, 200, 200));//78
    imagesHolder.push(new ImageDisplayer('insecte2.png', 450 , -500, 250, 250));//79
    //mushroom
    imagesHolder.push(new ImageDisplayer('+.png', -400 , 110, 400, 400));//80
    imagesHolder.push(new ImageDisplayer('+.png', -300 , 120, 390, 390));//81
    imagesHolder.push(new ImageDisplayer('+2.png', -200 , 110, 400, 400));//82
    imagesHolder.push(new ImageDisplayer('+.png', -100 , 110, 400, 400));//83
    imagesHolder.push(new ImageDisplayer('+.png',  -50 , 120, 390, 390));//84
    imagesHolder.push(new ImageDisplayer('+.png', -150 , 110, 400, 400));//85
    imagesHolder.push(new ImageDisplayer('+2.png', -250 , 115, 400, 400));//86
    imagesHolder.push(new ImageDisplayer('+.png', -350 , 110, 390, 390));//87
    imagesHolder.push(new ImageDisplayer('+.png', -340 , 120, 400, 400));//88
    imagesHolder.push(new ImageDisplayer('+.png', -360 , 110, 400, 400));//89
    imagesHolder.push(new ImageDisplayer('+2.png', -380 , 110, 390, 390));//90
    imagesHolder.push(new ImageDisplayer('+.png', -240 , 115, 400, 400));//91
    imagesHolder.push(new ImageDisplayer('+.png', -260 , 110, 400, 400));//92
    imagesHolder.push(new ImageDisplayer('+2.png', -280 , 115, 390, 390));//93
    imagesHolder.push(new ImageDisplayer('+2.png', -160 , 110, 400, 400));//94
    imagesHolder.push(new ImageDisplayer('+.png', -420 , 120, 400, 400));//95
    imagesHolder.push(new ImageDisplayer('+.png', -320 , 120, 390, 390));//96
    imagesHolder.push(new ImageDisplayer('+2.png', -220 , 110, 400, 400));//97
    imagesHolder.push(new ImageDisplayer('+.png', -120 , 110, 400, 400));//98
    imagesHolder.push(new ImageDisplayer('+.png',  -70 , 120, 390, 390));//99
    imagesHolder.push(new ImageDisplayer('+.png', -130 , 110, 400, 400));//100
    imagesHolder.push(new ImageDisplayer('+2.png', -230 , 115, 400, 400));//101
    imagesHolder.push(new ImageDisplayer('+.png', -330 , 110, 390, 390));//102
    imagesHolder.push(new ImageDisplayer('+.png', -330 , 120, 400, 400));//103
    imagesHolder.push(new ImageDisplayer('+.png', -380 , 110, 400, 400));//104
    imagesHolder.push(new ImageDisplayer('+2.png', -405 , 110, 390, 390));//105
    imagesHolder.push(new ImageDisplayer('+.png', -210 , 115, 400, 400));//106
    imagesHolder.push(new ImageDisplayer('+.png', -245 , 110, 400, 400));//107
    imagesHolder.push(new ImageDisplayer('+2.png', -180 , 115, 390, 390));//108
    imagesHolder.push(new ImageDisplayer('+2.png', -60 , 110, 400, 400));//109
     imagesHolder.push(new ImageDisplayer('+.png', -140 , 115, 400, 400));//110
    imagesHolder.push(new ImageDisplayer('+.png', -168 , 110, 400, 400));//111
    imagesHolder.push(new ImageDisplayer('+2.png', -180 , 115, 390, 390));//112
    imagesHolder.push(new ImageDisplayer('+2.png', -160 , 110, 400, 400));//113
    imagesHolder.push(new ImageDisplayer('+.png', -220 , 120, 400, 400));//114
    imagesHolder.push(new ImageDisplayer('+.png', -245 , 120, 390, 390));//115
    imagesHolder.push(new ImageDisplayer('+2.png', -268 , 110, 400, 400));//116
    imagesHolder.push(new ImageDisplayer('+.png', -125 , 110, 400, 400));//117
    imagesHolder.push(new ImageDisplayer('+.png',  -80 , 120, 390, 390));//118
    imagesHolder.push(new ImageDisplayer('+.png',  -30 , 110, 400, 400));//119
    imagesHolder.push(new ImageDisplayer('+2.png', -270 , 115, 400, 400));//120
    imagesHolder.push(new ImageDisplayer('+.png', -390 , 110, 390, 390));//121
    imagesHolder.push(new ImageDisplayer('+.png', -219 , 120, 400, 400));//122
    imagesHolder.push(new ImageDisplayer('+.png', -284 , 110, 400, 400));//123
    imagesHolder.push(new ImageDisplayer('+2.png', -415 , 110, 390, 390));//124
    imagesHolder.push(new ImageDisplayer('+.png', -217 , 115, 400, 400));//125
    imagesHolder.push(new ImageDisplayer('+.png', -239 , 110, 400, 400));//126
    imagesHolder.push(new ImageDisplayer('+2.png', -167 , 115, 390, 390));//127
    imagesHolder.push(new ImageDisplayer('+2.png', -50 , 110, 400, 400));//128
    
};
function setup(){
	createCanvas (window.innerWidth, window.innerHeight, WEBGL);
		
	sequencer = new Sequencer(audioPath, 28, false);
	
    //Gauche
	sequencer.registerSequence({
		name : "papillon1",
		start : 3,
		onStart : () => {
			imagesHolder[5].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[5].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon2",
		start : 4,
		onStart : () => {
			imagesHolder[2].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[2].isVisible = false;
            console.log("stop");
		},

	});	
    
     sequencer.registerSequence({
		name : "papillon3",
		start : 5,
		onStart : () => {
			imagesHolder[0].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[0].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon4",
		start : 6,
		onStart : () => {
			imagesHolder[3].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[3].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon5",
		start : 7,
		onStart : () => {
			imagesHolder[4].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[4].isVisible = false;
            console.log("stop");
		},

	});	
    
       sequencer.registerSequence({
		name : "papillon6",
		start : 8,
		onStart : () => {
			imagesHolder[1].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[1].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon7",
		start : 9,
		onStart : () => {
			imagesHolder[6].isVisible = true;
            console.log("start");
		},
		stop :100,
		onStop : () => {
			imagesHolder[6].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur",
		start : 10,
		onStart : () => {
			imagesHolder[7].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[7].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur2",
		start : 11,
		onStart : () => {
			imagesHolder[8].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[8].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur3",
		start : 12,
		onStart : () => {
			imagesHolder[9].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[9].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur4",
		start : 13,
		onStart : () => {
			imagesHolder[10].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[10].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur5",
		start : 14,
		onStart : () => {
			imagesHolder[11].isVisible = true;
            console.log("start");
		},
		stop : 200,
		onStop : () => {
			imagesHolder[11].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur6",
		start : 15,
		onStart : () => {
			imagesHolder[12].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[12].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon8",
		start : 16,
		onStart : () => {
			imagesHolder[13].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[13].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon9",
		start : 17,
		onStart : () => {
			imagesHolder[14].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[14].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon10",
		start : 18,
		onStart : () => {
			imagesHolder[15].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[15].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon12",
		start : 19,
		onStart : () => {
			imagesHolder[16].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[16].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 20,
		onStart : () => {
			imagesHolder[17].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[17].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 21,
		onStart : () => {
			imagesHolder[18].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[18].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 22,
		onStart : () => {
			imagesHolder[19].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[19].isVisible = false;
            console.log("stop");
		},

	});
    
    	sequencer.registerSequence({
		name : "papillon1",
		start : 23,
		onStart : () => {
			imagesHolder[20].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[20].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon2",
		start : 24,
		onStart : () => {
			imagesHolder[21].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[21].isVisible = false;
            console.log("stop");
		},

	});	
    
     sequencer.registerSequence({
		name : "papillon3",
		start : 25,
		onStart : () => {
			imagesHolder[22].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[22].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon4",
		start : 26,
		onStart : () => {
			imagesHolder[23].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[23].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon5",
		start : 27,
		onStart : () => {
			imagesHolder[24].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[24].isVisible = false;
            console.log("stop");
		},

	});	
    
       sequencer.registerSequence({
		name : "papillon6",
		start : 28,
		onStart : () => {
			imagesHolder[25].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[25].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon7",
		start : 29,
		onStart : () => {
			imagesHolder[26].isVisible = true;
            console.log("start");
		},
		stop :100,
		onStop : () => {
			imagesHolder[26].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur",
		start : 30,
		onStart : () => {
			imagesHolder[27].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[27].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur2",
		start : 31,
		onStart : () => {
			imagesHolder[28].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[28].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur3",
		start : 32,
		onStart : () => {
			imagesHolder[29].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[29].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur4",
		start : 33,
		onStart : () => {
			imagesHolder[30].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[30].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur5",
		start : 34,
		onStart : () => {
			imagesHolder[31].isVisible = true;
            console.log("start");
		},
		stop : 200,
		onStop : () => {
			imagesHolder[31].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur6",
		start : 35,
		onStart : () => {
			imagesHolder[32].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[32].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon8",
		start : 36,
		onStart : () => {
			imagesHolder[33].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[33].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon9",
		start : 37,
		onStart : () => {
			imagesHolder[34].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[34].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon10",
		start : 38,
		onStart : () => {
			imagesHolder[35].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[35].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon12",
		start : 39,
		onStart : () => {
			imagesHolder[36].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[36].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 40,
		onStart : () => {
			imagesHolder[37].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[37].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 41,
		onStart : () => {
			imagesHolder[38].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[38].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 42,
		onStart : () => {
			imagesHolder[39].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[39].isVisible = false;
            console.log("stop");
		},

	});

     //droite
	sequencer.registerSequence({
		name : "papillon1",
		start : 3,
		onStart : () => {
			imagesHolder[40].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[40].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon2",
		start : 4,
		onStart : () => {
			imagesHolder[41].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[41].isVisible = false;
            console.log("stop");
		},

	});	
    
     sequencer.registerSequence({
		name : "papillon3",
		start : 5,
		onStart : () => {
			imagesHolder[42].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[42].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon4",
		start : 6,
		onStart : () => {
			imagesHolder[43].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[43].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon5",
		start : 7,
		onStart : () => {
			imagesHolder[44].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[44].isVisible = false;
            console.log("stop");
		},

	});	
    
       sequencer.registerSequence({
		name : "papillon6",
		start : 8,
		onStart : () => {
			imagesHolder[45].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[45].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon7",
		start : 9,
		onStart : () => {
			imagesHolder[46].isVisible = true;
            console.log("start");
		},
		stop :100,
		onStop : () => {
			imagesHolder[46].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur",
		start : 10,
		onStart : () => {
			imagesHolder[47].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[47].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur2",
		start : 11,
		onStart : () => {
			imagesHolder[48].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[48].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur3",
		start : 12,
		onStart : () => {
			imagesHolder[49].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[49].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur4",
		start : 13,
		onStart : () => {
			imagesHolder[50].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[50].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur5",
		start : 14,
		onStart : () => {
			imagesHolder[51].isVisible = true;
            console.log("start");
		},
		stop : 200,
		onStop : () => {
			imagesHolder[51].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur6",
		start : 15,
		onStart : () => {
			imagesHolder[52].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[52].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon8",
		start : 16,
		onStart : () => {
			imagesHolder[53].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[53].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon9",
		start : 17,
		onStart : () => {
			imagesHolder[54].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[54].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon10",
		start : 18,
		onStart : () => {
			imagesHolder[55].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[55].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon12",
		start : 19,
		onStart : () => {
			imagesHolder[56].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[56].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 20,
		onStart : () => {
			imagesHolder[57].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[57].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 21,
		onStart : () => {
			imagesHolder[58].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[58].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 22,
		onStart : () => {
			imagesHolder[59].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[59].isVisible = false;
            console.log("stop");
		},

	});
    
    	sequencer.registerSequence({
		name : "papillon1",
		start : 23,
		onStart : () => {
			imagesHolder[60].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[60].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon2",
		start : 24,
		onStart : () => {
			imagesHolder[61].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[61].isVisible = false;
            console.log("stop");
		},

	});	
    
     sequencer.registerSequence({
		name : "papillon3",
		start : 25,
		onStart : () => {
			imagesHolder[62].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[62].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon4",
		start : 26,
		onStart : () => {
			imagesHolder[63].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[63].isVisible = false;
            console.log("stop");
		},

	});	
    
    sequencer.registerSequence({
		name : "papillon5",
		start : 27,
		onStart : () => {
			imagesHolder[64].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[64].isVisible = false;
            console.log("stop");
		},

	});	
    
       sequencer.registerSequence({
		name : "papillon6",
		start : 28,
		onStart : () => {
			imagesHolder[65].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[65].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon7",
		start : 29,
		onStart : () => {
			imagesHolder[66].isVisible = true;
            console.log("start");
		},
		stop :100,
		onStop : () => {
			imagesHolder[66].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur",
		start : 30,
		onStart : () => {
			imagesHolder[67].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[67].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur2",
		start : 31,
		onStart : () => {
			imagesHolder[68].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[68].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur3",
		start : 32,
		onStart : () => {
			imagesHolder[69].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[69].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "fleur4",
		start : 33,
		onStart : () => {
			imagesHolder[70].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[70].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur5",
		start : 34,
		onStart : () => {
			imagesHolder[71].isVisible = true;
            console.log("start");
		},
		stop : 200,
		onStop : () => {
			imagesHolder[71].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "fleur6",
		start : 35,
		onStart : () => {
			imagesHolder[72].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[72].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon8",
		start : 36,
		onStart : () => {
			imagesHolder[73].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[73].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon9",
		start : 37,
		onStart : () => {
			imagesHolder[74].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[74].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon10",
		start : 38,
		onStart : () => {
			imagesHolder[75].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[75].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon12",
		start : 39,
		onStart : () => {
			imagesHolder[76].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[76].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 40,
		onStart : () => {
			imagesHolder[77].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[77].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 41,
		onStart : () => {
			imagesHolder[78].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[78].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 42,
		onStart : () => {
			imagesHolder[79].isVisible = true;
            console.log("start");
		},
		stop : 100,
		onStop : () => {
			imagesHolder[79].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 44+1/2,
		onStart : () => {
			imagesHolder[80].isVisible = true;
            console.log("start");
		},
		stop : 60,
		onStop : () => {
			imagesHolder[80].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 45,
		onStart : () => {
			imagesHolder[81].isVisible = true;
            console.log("start");
		},
		stop : 60+1/2,
		onStop : () => {
			imagesHolder[81].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 45+1/2,
		onStart : () => {
			imagesHolder[82].isVisible = true;
            console.log("start");
		},
		stop : 61,
		onStop : () => {
			imagesHolder[82].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 46,
		onStart : () => {
			imagesHolder[83].isVisible = true;
            console.log("start");
		},
		stop : 61+1/2,
		onStop : () => {
			imagesHolder[83].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 46+1/2,
		onStart : () => {
			imagesHolder[84].isVisible = true;
            console.log("start");
		},
		stop : 62,
		onStop : () => {
			imagesHolder[84].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 47,
		onStart : () => {
			imagesHolder[85].isVisible = true;
            console.log("start");
		},
		stop : 62+1/2,
		onStop : () => {
			imagesHolder[85].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 47+1/2,
		onStart : () => {
			imagesHolder[86].isVisible = true;
            console.log("start");
		},
		stop : 63,
		onStop : () => {
			imagesHolder[86].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 48,
		onStart : () => {
			imagesHolder[87].isVisible = true;
            console.log("start");
		},
		stop : 63+1/2,
		onStop : () => {
			imagesHolder[87].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 48+1/2,
		onStart : () => {
			imagesHolder[88].isVisible = true;
            console.log("start");
		},
		stop : 64,
		onStop : () => {
			imagesHolder[88].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 49,
		onStart : () => {
			imagesHolder[89].isVisible = true;
            console.log("start");
		},
		stop : 64+1/2,
		onStop : () => {
			imagesHolder[89].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 49+1/2,
		onStart : () => {
			imagesHolder[90].isVisible = true;
            console.log("start");
		},
		stop : 65,
		onStop : () => {
			imagesHolder[90].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 50,
		onStart : () => {
			imagesHolder[91].isVisible = true;
            console.log("start");
		},
		stop : 65+1/2,
		onStop : () => {
			imagesHolder[91].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 50+1/2,
		onStart : () => {
			imagesHolder[92].isVisible = true;
            console.log("start");
		},
		stop : 66,
		onStop : () => {
			imagesHolder[92].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 51,
		onStart : () => {
			imagesHolder[93].isVisible = true;
            console.log("start");
		},
		stop : 66+1/2,
		onStop : () => {
			imagesHolder[93].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 51+1/2,
		onStart : () => {
			imagesHolder[94].isVisible = true;
            console.log("start");
		},
		stop : 67,
		onStop : () => {
			imagesHolder[94].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 52,
		onStart : () => {
			imagesHolder[95].isVisible = true;
            console.log("start");
		},
		stop : 67+1/2,
		onStop : () => {
			imagesHolder[95].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 52+1/2,
		onStart : () => {
			imagesHolder[96].isVisible = true;
            console.log("start");
		},
		stop : 68,
		onStop : () => {
			imagesHolder[96].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 53,
		onStart : () => {
			imagesHolder[97].isVisible = true;
            console.log("start");
		},
		stop : 68+1/2,
		onStop : () => {
			imagesHolder[97].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 53+1/2,
		onStart : () => {
			imagesHolder[98].isVisible = true;
            console.log("start");
		},
		stop : 69,
		onStop : () => {
			imagesHolder[98].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 54,
		onStart : () => {
			imagesHolder[99].isVisible = true;
            console.log("start");
		},
		stop : 69+1/2,
		onStop : () => {
			imagesHolder[99].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 54+1/2,
		onStart : () => {
			imagesHolder[100].isVisible = true;
            console.log("start");
		},
		stop : 70,
		onStop : () => {
			imagesHolder[100].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 55,
		onStart : () => {
			imagesHolder[101].isVisible = true;
            console.log("start");
		},
		stop : 70+1/2,
		onStop : () => {
			imagesHolder[101].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 55+1/2,
		onStart : () => {
			imagesHolder[102].isVisible = true;
            console.log("start");
		},
		stop : 71,
		onStop : () => {
			imagesHolder[102].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 56,
		onStart : () => {
			imagesHolder[103].isVisible = true;
            console.log("start");
		},
		stop : 71+1/2,
		onStop : () => {
			imagesHolder[103].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 56+1/2,
		onStart : () => {
			imagesHolder[104].isVisible = true;
            console.log("start");
		},
		stop : 72,
		onStop : () => {
			imagesHolder[104].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 57,
		onStart : () => {
			imagesHolder[105].isVisible = true;
            console.log("start");
		},
		stop : 72+1/2,
		onStop : () => {
			imagesHolder[105].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 57+1/2,
		onStart : () => {
			imagesHolder[106].isVisible = true;
            console.log("start");
		},
		stop : 73,
		onStop : () => {
			imagesHolder[106].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 58,
		onStart : () => {
			imagesHolder[107].isVisible = true;
            console.log("start");
		},
		stop : 73+1/2,
		onStop : () => {
			imagesHolder[107].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 58+1/2,
		onStart : () => {
			imagesHolder[108].isVisible = true;
            console.log("start");
		},
		stop : 74,
		onStop : () => {
			imagesHolder[108].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 59,
		onStart : () => {
			imagesHolder[109].isVisible = true;
            console.log("start");
		},
		stop : 74+1/2,
		onStop : () => {
			imagesHolder[109].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 59+1/2,
		onStart : () => {
			imagesHolder[110].isVisible = true;
            console.log("start");
		},
		stop : 75,
		onStop : () => {
			imagesHolder[110].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 60,
		onStart : () => {
			imagesHolder[111].isVisible = true;
            console.log("start");
		},
		stop : 75+1/2,
		onStop : () => {
			imagesHolder[111].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 60+1/2,
		onStart : () => {
			imagesHolder[112].isVisible = true;
            console.log("start");
		},
		stop : 76,
		onStop : () => {
			imagesHolder[112].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 61,
		onStart : () => {
			imagesHolder[113].isVisible = true;
            console.log("start");
		},
		stop : 76+1/2,
		onStop : () => {
			imagesHolder[113].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 61+1/2,
		onStart : () => {
			imagesHolder[114].isVisible = true;
            console.log("start");
		},
		stop : 77,
		onStop : () => {
			imagesHolder[114].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 62,
		onStart : () => {
			imagesHolder[115].isVisible = true;
            console.log("start");
		},
		stop : 77+1/2,
		onStop : () => {
			imagesHolder[115].isVisible = false;
            console.log("stop");
		},

	});
    
      sequencer.registerSequence({
		name : "papillon13",
		start : 62+1/2,
		onStart : () => {
			imagesHolder[116].isVisible = true;
            console.log("start");
		},
		stop : 78,
		onStop : () => {
			imagesHolder[116].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 63,
		onStart : () => {
			imagesHolder[117].isVisible = true;
            console.log("start");
		},
		stop : 78+1/2,
		onStop : () => {
			imagesHolder[117].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 63+1/2,
		onStart : () => {
			imagesHolder[118].isVisible = true;
            console.log("start");
		},
		stop : 179,
		onStop : () => {
			imagesHolder[118].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 64,
		onStart : () => {
			imagesHolder[119].isVisible = true;
            console.log("start");
		},
		stop : 79+1/2,
		onStop : () => {
			imagesHolder[119].isVisible = false;
            console.log("stop");
		},

	});
    
    sequencer.registerSequence({
		name : "papillon13",
		start : 64+1/2,
		onStart : () => {
			imagesHolder[120].isVisible = true;
            console.log("start");
		},
		stop : 80,
		onStop : () => {
			imagesHolder[120].isVisible = false;
            console.log("stop");
		},

	});
    
     sequencer.registerSequence({
		name : "papillon13",
		start : 65,
		onStart : () => {
			imagesHolder[121].isVisible = true;
            console.log("start");
		},
		stop : 80+1/2,
		onStop : () => {
			imagesHolder[121].isVisible = false;
            console.log("stop");
		},

	});
    
    
    
    
    
    
    
    
};



function draw(){
	sequencer.update();
	
	for(let img of imagesHolder){
		img.draw();
	}
    

};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};






























