function Snake() {
	this.x=0;
	this.y=0;
	this.xspeed=scale*1;
	this.yspeed=0;
	this.total=0;
	this.tail=[];
	var hscore=0;
	var imgt = new Image();
	var imgh = new Image();
	imgh.src ="img/headR.png";
	imgt.src ="img/tail.png";
	
	this.draw = function()  {
		 
		imgh.onload = this.draw;
		imgt.onload = this.draw;
		
		for (let i=0; i<this.tail.length; i++) {
				ctx.drawImage(imgt, this.tail[i].x, this.tail[i].y,scale,scale);
		}
		ctx.drawImage(imgh, this.x, this.y,scale,scale);
	}
	
	this.update= function() {
		
		for (var i=0; i<this.tail.length-1; i++){
			this.tail[i] = this.tail[i+1];
		}
		
		this.tail[this.total-1] = { x: this.x, y: this.y };
		
		this.x = this.x+this.xspeed;
		this.y = this.y+this.yspeed;
		
		
		
	}
	let directionl="Right";
	 this.changeDirection = function(direction) {

    switch(direction) {
      case 'Up':
	    imgh.src ="img/headU.png";
        this.xspeed = 0;
        this.yspeed = -scale * 1;
		direction1="UP";
        break;
      case 'Down':
	    imgh.src ="img/headD.png";
        this.xspeed = 0;
        this.yspeed = scale * 1;
		  direction1="DOWN";
		
        break;
      case 'Left':
	  	 imgh.src ="img/headL.png"; 
        this.xspeed = -scale * 1;
        this.yspeed = 0;
		  direction1="LEFT";
		
        break;
      case 'Right':
	  	 imgh.src ="img/headR.png";  
        this.xspeed = scale * 1;
        this.yspeed = 0;
		 direction1="Right";
		
        break;
    }
  }
	
	
this.eat=function(fruit) {
 if (this.x == fruit.x && this.y== fruit.y){ //Wenn frucht aufgehoben wird
	// var sui= new Audio();
	// sui.src="sound/sui.mp3";
	// sui.play();
	 this.total++;
	 return true;
 }
     return false;
   
}	

this.meat=function(messi) {  //Wenn messi gegessen wird
 if (this.x == messi.x && this.y== messi.y){
	 var sui= new Audio();
	 sui.src="sound/sui.mp3";
	 sui.play();
	 delete messi.x;
	 delete messi.y;
	 
	 this.total=this.total+1;
	 return true;
 }
     return false;
   
}


	this.checkCollision= function() {
		for (var i=0; i<this.tail.length; i++) {
			
			 if (this.x == this.tail[i].x &&
			   this.y== this.tail[i].y){  
               this.gameover();	  
            }
				
		}
		
		
		if (this.x >= canvas.width) {
			this.gameover();
		}
		
		if (this.y >= canvas.height) {
			checkHighScore(this.total);			   
              this.gameover();
		
		if (this.x < 0-scale){
			checkHighScore(this.total);			   
               this.gameover();
		}
		
		if (this.y < 0-scale) {
			checkHighScore(this.total);			   
              this.gameover();
		}
	}
	
	 this.gameover=function(){
		checkHighScore(this.total);			   
               this.total=0;
               this.tail=[];
			   this.x=0;
			   this.y=0;
		
	}
	
	
}
}




