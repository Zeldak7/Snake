function Block() {
    this.x = -50;
	this.y = -50;
	this.total = 0;
    this.yarr=[50];
    this.xarr=[50];

    for (i=0; i<50; i++){
		this.yarr[i]=-50;
    }
 
    for (i=0; i<50; i++){
		this.xarr[i]=-50;
    }
    var img = new Image();
	img.src = "img/block.png";

    this.draw = function () {
		img.onload = this.draw;
        for (i=0; i<50; i++){
		ctx.drawImage(img, this.xarr[i], this.yarr[i], scale, scale);
        }
	}

    this.addBlock = function(){
        this.yarr[this.total] = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.xarr[this.total] = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.total=this.total+1;
    }
}