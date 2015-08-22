//water
function Water(vars){
    
    this.Container_constructor();
    
    setupVars.call(this);
    setupComponents.call(this);
    
    function setupVars(){
        
        this.source = vars.source;
        
        this.x = vars.x;
        this.y = vars.y;
        this.vector = vars.vector;
        this.speed = 25;
        
        this.hitbox = {
            type: 'water',
            collidesWith: ['target'],
            x: 0,
            y: 0,
            width: 15,
            height: 15
        };
    };
    
    function setupComponents(){

        var shape = new createjs.Shape();
        shape.graphics.beginFill('#88F').drawCircle(0, 0, 10);
        this.addChild(shape);
    };
};

(function(){
        
    var prototype = createjs.extend(Water, createjs.Container);
      
    prototype.tick = function(){
        
        this.x += this.vector.x * this.speed;
        this.y += this.vector.y * this.speed;   

        if(this.x < 0 || this.y < 0 || this.x > 1200 || this.y > 900)
        	this.destroy();     
    };
    
    prototype.handleCollision = function(obj){

        this.destroy();        
    };
    
    prototype.destroy = function(){
        
        this.parent.removeChild(this);
    };
    
    Water = createjs.promote(Water, 'Container');
})();