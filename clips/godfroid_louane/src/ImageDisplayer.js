
//CLASSES
class ImageDisplayer{
	constructor(imgpath, x, y, w, h){
		this.img = loadImage(imgpath);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.isVisible = false;
        this.isDancing = false;
        this.isDancingW = false;
        this.isDancingH = false;
	}
	draw(){
		if(this.isVisible){
		
            if(this.isDancing){
                this.w = random(70);
                this.h = random(70);
            }
            
            if(this.isDancingW){
                this.w = random(60);
            }
            
            if(this.isDancingH){
                this.h = random(60);
            }
			image(this.img, this.x,  this.y,  this.w,  this.h);
		}
	}
}