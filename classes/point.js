/**
 * @author Ataberk ASLAN <aslanataberk06@gmail.com>
 */
class Point{
    constructor(x,y,t=undefined) {
        this.pos = createVector(x,y);
        this.time = t;
    }
    draw(color){
        stroke(color);
        point(this.pos.x,this.pos.y);
    }
    vertex(){
        vertex(this.pos.x,this.pos.y);
    }
}