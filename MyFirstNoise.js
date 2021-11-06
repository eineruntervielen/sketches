function setup() {
    let canvas = createCanvas(600, 600);
    background(33, 65, 33);
    canvas.parent('canvasForHtml');

    randomSeed(1);
    for (var j = 0; j < height; j++){
        var points = [];
        for (var i = 0; i < width; i++){
            randx = random(30);
            randy = random(40);
            append(points, createVector(i*10+randx, 80*j/2+randy));
        }
        for (var i = 0; i < width-1; i++){
            strokeWeight(0.5);
            //stroke(random(0),random(0),random(255));  //for blue
            stroke(random(0),random(0),random(0));  // for green
            line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
        }
    }
}

function draw() {
}
