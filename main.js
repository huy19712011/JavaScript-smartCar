const canvas = document.getElementById("myCanvas");
// canvas.height = window.innerHeight; // step 1, move into animate function
canvas.width = 200;

const ctx = canvas.getContext("2d");

const car = new Car(100, 100, 30, 50);
// car.draw(ctx); // step 1, move into animate function

animate();

function animate() {
    car.update();

    canvas.height = window.innerHeight; // step 2
    car.draw(ctx); // step 2
    requestAnimationFrame(animate);
}