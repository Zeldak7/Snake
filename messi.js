function Messi() {
  this.x;
  this.y;
 
 
  
  
  
  this.pickLocation = function() {
    this.y = (Math.floor(Math.random() *columns - 1) + 1) * scale;
    this.x = (Math.floor(Math.random() *rows - 1) + 1) * scale;
  }
  
  
  this.move =function(){
	 
	 switch (getRandomIntInclusive(0, 15)){
		 
		 case 0:
		 this.y=this.y+scale;
		 break;
	     
		 case 1:
		 this.x=this.x+scale;
		 break;
		 
		 case 2:
		 this.y=this.y-scale;
		 break;
		 
		 case 3:
		 this.x=this.x-scale;
		 break; 
		 
		 case 4:
		 break;
		 
		 case 5:
		 break;
		 
		 case 6:
		 break;
		 
		 case 7:
		 break; 
	 }
	 
	 
	 
	 
	 
	 if (this.x > canvas.width) {
			this.x=0;
			
		}
		
		if (this.y > canvas.height) {
			this.y=0;
			
		}
		
		if (this.x < 0) {
			this.x=canvas.width;
			
		}
		
		if (this.y < 0) {
			this.y=canvas.height;
			
		}
	 
	 
	 
     	 
	  
	  
  }

var imgf = new Image();


this.draw = function() {
		 
	 	 
    imgf.onload = this.draw;
    ctx.drawImage(imgf, this.x, this.y,scale,scale);
}

imgf.src ="img/messi.png";


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

}