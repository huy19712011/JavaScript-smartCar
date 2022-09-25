class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.controls = new Controls();

        //step 3
        this.speed = 0;
        this.acceleration = 0.2;

        // step 3a
        this.maxSpeed = 3;
        this.friction = 0.05;

        // step 4: advanced
        this.angle = 0;
    }

    draw(ctx) {
        // advanced
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);


        ctx.beginPath();

        ctx.rect(
            // advanced
            -this.width / 2,
            -this.height / 2,

            // this.x - this.width/2,
            // this.y - this.height/2,
            this.width,
            this.height
        );

        ctx.fillStyle = "red";
        ctx.fill();

        ctx.restore();
    }

    update() {
        this.#move();
    }

    #move() {
        if (this.controls.forward) {
            // this.y -=2;
            // step 3
            this.speed += this.acceleration;
        }

        if (this.controls.reverse) {
            // this.y += 2;
            // step 3
            this.speed -= this.acceleration;
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }

        if (this.speed < -this.maxSpeed / 3) {
            this.speed = -this.maxSpeed / 3;
        }

        if (this.speed > 0) {
            this.speed -= this.friction;
        }

        if (this.speed < 0) {
            this.speed += this.friction;
        }

        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }


        if (this.speed !== 0) {
            const flip = this.speed > 0 ? 1 : -1;

            // step 4: left and right
            if (this.controls.left) {
                // this.x -= 2;
                // advanced
                this.angle += 0.03 * flip;
            }

            if (this.controls.right) {
                // this.x += 2;
                // advanced
                this.angle -= 0.03 * flip;
            }
        }

        // advanced
        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;

        // this.y -= this.speed;
    }
}