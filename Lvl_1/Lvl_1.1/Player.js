function Player(){

    // Location -->
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    // Size (w,h) -->
    this.width = 100;
    this.height = 100;

    // Player speed
    this.vx = 0;
    this.vy = 0;

    // Player color
    this.color = 'Purple';

    this.draw = function(){

        context.save();
           context.fillstyle = this.color;
           context.translate(this.x, this.y);
           context.fillRect((-this.width/2),(-this.height/2));
        context.restore();
    } 

    // make player movement function here vvvv

    




}