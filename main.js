const canvas = document.getElementById("myCanvas");
// canvas.height = window.innerHeight; // step 1, move into animate function
canvas.width = 200;

const ctx = canvas.getContext("2d");

// Road
const road = new Road(canvas.width / 2, canvas.width * 0.9);

const car = new Car(road.getLaneCenter(3), 100, 30, 50);
// car.draw(ctx); // step 1, move into animate function

animate();

function animate() {
    car.update();

    canvas.height = window.innerHeight; // step 2

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx); // step 2

    ctx.restore();
    requestAnimationFrame(animate);
}