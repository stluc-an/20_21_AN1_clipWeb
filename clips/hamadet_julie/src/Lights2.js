class lights2{
		constructor(){
			this.isVisible = false;
		}
	
	draw(){
		if(this.isVisible){
		
		strokeWeight(1);
		stroke(255);
		
		this.a = noise(frameCount) * 10;
		push()
		scale(0.01);
		push();
		translate(this.a, 8);	
		beginShape();
		vertex(-1900,-1000);
		vertex(-2100,-800);
		vertex(-1900,-600);
		vertex(-2030,-580);
		vertex(-2030,-300);
		vertex(-1900,-300);
		vertex(-1900,-100);
		vertex(-2050,-100);
		vertex(-2050,200);
		vertex(-1850,200);
		vertex(-1850,300);
		vertex(-2050,300);
		vertex(-2050,300);
		vertex(-2050,300);
		vertex(-2050,400);
		vertex(-1900,390);
		vertex(-1910,950);
		endShape();
		pop();

		
		push()
		translate(this.a, 8);
		beginShape();
		vertex(-2000,-1050);
		vertex(-2000,850);
		endShape();
		pop();
		
		beginShape();
		vertex(-1980,-500);
		vertex(-1980,500);
		endShape();
	
		beginShape();
		vertex(-1980,-900);
		vertex(-1980,-600);
		endShape();
		
		beginShape();
		vertex(-1980,550);
		vertex(-1980,750);
		endShape();
	
	
		
	/*2e moitié*/	
		push()
		translate(this.a, 16);
		beginShape();
		vertex(0,-1000);
		vertex(0,950);
		endShape();
		pop();
		
		push()
		translate(this.a, 16);
		beginShape();
		vertex(20,-950);
		vertex(30,-700);
		vertex(-20,-800);
		vertex(-20,-500);
		vertex(50,-550);
		vertex(-50,-200);
		vertex(50,0);
		vertex(-50,100);
		vertex(-50,100);
		vertex(50,150);
		vertex(-50,200);
		vertex(50,250);
		vertex(-50,300);
		vertex(-50,1000);
		endShape();
		pop();
		
		beginShape();
		vertex(60,330);
		vertex(60,1000);
		endShape();
		
		beginShape();
		vertex(30,400);
		vertex(30,1000);
		endShape();
		
		beginShape();
		vertex(-30,600);
		vertex(-30,1000);
		endShape();
		pop();
		
	}
}
}
