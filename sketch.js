function setup() {
    createCanvas(600, 600);
     background("#FAA7C3");
  }
  
  
  function draw() {
    
    stroke ("withe");
    fill ("rgb(211,101,211)");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }