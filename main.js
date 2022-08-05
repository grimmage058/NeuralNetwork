// Create a reference to the HTML canvas. Set height and width
const canvas = document.getElementById("myCanvas");
canvas.width = 200;


// Draw a "car" on the canvas
const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(ctx);

// Make the car move
animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}