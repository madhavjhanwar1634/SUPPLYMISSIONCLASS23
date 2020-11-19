class Box{
    constructor(x,y,width, height){
       var Goption={
           isstatic:true
       }
       
        this.body=Bodies.rectangle(x,y,width,height,Goption)
World.add(world,this.body)
    }
    display(){

       fill ("red")
       
rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
    }
}