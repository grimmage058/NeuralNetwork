// Defining the car class and its attributes
class Car{

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;
        
        // Define some controls for the car
        this.controls = new Controls();
    }

    // Update the postition of the car if a key is pressed
    update(){
        this.#move();  
    }

    #move(){
         // Move the car
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        // Cap the speed
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed <- this.maxSpeed / 2){
            this.speed =- this.maxSpeed /2;
        }
        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }

        // Stop the car from moving on its own
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        // Flip directions for reverse
        if(this.speed != 0){
            const flip = this.speed > 0 ? 1 : -1;

            // Car rotation
            if(this.controls.left){
                this.angle += 0.03 * flip;
            }
            if(this.controls.right){
                this.angle -= 0.03 * flip;
            }
        }

        // 2 + 2 = 4 - 1 = 3 quick maths. Nobody understands whats going on, don't worry about it.
        // Based on the unit circle rotated 90 degrees counter clockwise. Since the unit circle has a radius of 1,
        // the sign is between -1 and 1, we need to scale this by the value of the speed. Same goes for the y value with the cosine.
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;

    }

    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();
    }

}