// Define the controls class
class Controls {

    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        // Call keyboardlistener method to check if a key is pressed.
        this.#addKeyboardListeners();
    }

    // Keyboard listener
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft": 
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }
        
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft": 
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }    
    }
}