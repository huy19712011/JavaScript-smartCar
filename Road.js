class Road {
    constructor(x, width, lane = 3) {
        this.x = x;
        this.width = width;
        this.lane = lane;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width / this.lane;
        return this.left + laneWidth / 2 + Math.min(laneIndex, this.lane - 1) * laneWidth;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.lane; i++) {
            const x = lerp(
                this.left,
                this.right,
                i / this.lane
            );

            if (i > 0 && i < this.lane) {
                ctx.setLineDash([20, 20]);
            } else {
                ctx.setLineDash([]);
            }

            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        // ctx.beginPath();
        // ctx.moveTo(this.right, this.top);
        // ctx.lineTo(this.right, this.bottom);
        // ctx.stroke();
    }
}

