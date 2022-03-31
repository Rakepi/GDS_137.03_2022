function Player(){
    // starting location
        this.x = canvas.width/2;
        this.y = canvas.height/2
    
    //player dimensions
        this.width = 80
        this.height = 80
    
    //movement speeds
        this.vx = 0
        this.vy = 0
    
        this.color = 'coral'
    
    //drawing player function 
        this.draw = function(){
    
            context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y)
            context.beginPath();
            context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
            context.closePath();
            context.fill();
            context.restore();
            
        }
    
    // movement system
        this.move = function(){
    
            this.x += this.vx;
            this.y += this.vy;
    
        }
    
    }