let TIME = 0;
const increaseValue = 0.01;
let finished = false;
const path = [];

function setup() {
    createCanvas(800, 800);
}

function draw() {
    for (let i = 0; i < 1 / increaseValue; i++) {
        background(150);
        let a = new Point(100, 100);
        let b = new Point(200, 50);
        let c = new Point(300, 100);
        let d = new Point(400, 50);
        const resultPos = CubicCurve(a.pos, b.pos, c.pos, d.pos, TIME);
        const resultPoint = new Point(resultPos.x, resultPos.y, TIME);

        strokeWeight(3);
        noFill();
        b.draw(color('red'));
        c.draw(color('red'));

        beginShape();
        path.forEach(p => {
            stroke(0, 255, 0);
            p.vertex();
        })
        endShape();
        a.draw(0);
        d.draw(0);
        path.push(resultPoint);
        TIME += increaseValue;
        if (finished) {
            noLoop();
            break;
        }
        if (TIME > 1) {
            path.push(d);
            finished = true;
        }
    }
}
/**
 * @typedef {Object} Vector
 * @property {Number} x
 * @property {Number} y
 * 
 */

/**
 * 
 * @param {Vector} a 
 * @param {Vector} b 
 * @param {Number} t 
 * @returns {Vector}
 */
function lerp2d(a, b, t) {
    return createVector(lerp(a.x, b.x, t), lerp(a.y, b.y, t));
}
/**
 * 
 * @param {Vector} a 
 * @param {Vector} b 
 * @param {Vector} c 
 * @param {Number} t 
 * @returns {Vector}
 */
function QuadraticCurve(a, b, c, t) {
    const p0 = lerp2d(a, b, t);
    const p1 = lerp2d(b, c, t);
    return lerp2d(p0, p1, t);
}
/**
 * 
 * @param {Vector} a 
 * @param {Vector} b 
 * @param {Vector} c 
 * @param {Vector} d 
 * @param {Number} t 
 * @returns {Vector}
 */
function CubicCurve(a, b, c, d, t) {
    const p0 = QuadraticCurve(a, b, c, t);
    const p1 = QuadraticCurve(b, c, d, t);
    return lerp2d(p0, p1, t);
}