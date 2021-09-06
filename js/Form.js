class Form {
  
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementPosition(){
    this.titleImg.position(120, 70);
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);
  }

  setElementStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }
  
  handleMousePressed(){
    //This function will be activated where ever mouse is pressed on the screen 
    //To bind it with particular fuction we use arrow function

    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = ` Hello ${this.input.value()} </br> Wait for another player to join...`;
      //var message = 'Hello ${this.input.value()} </br> Wait for another player to join.... '
      this.greeting.html(message);
    })
  }

  display(){
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousePressed();
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
