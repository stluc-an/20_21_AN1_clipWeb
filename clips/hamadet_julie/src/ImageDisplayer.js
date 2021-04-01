
//CLASSES
class ImageDisplayer{
	constructor(imgpath, x, y, w, h){
		this.img = loadImage(imgpath);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.isVisible = false;
	}
	draw(){
		if(this.isVisible){
		
			image(this.img, this.x,  this.y,  this.w,  this.h);
		}
	}
}