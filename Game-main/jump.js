class Box {
    constructor(x,y,w,h){
        var options  = {
            isStatic: false,
            'restitution':0.2,
            // 'friction':20,
            // 'density':1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.w,this.h);
    }
}