class Form{
    constructor(){
         this.input = createInput("Name");
         this.button = createButton("Play");
         this.title = createElement("h1"); 
         this.greeting = createElement("h2");
    }

    display(){
        this.title.html("MultiCar Racing");
        this.title.position(130, 0);
        this.input.position(130, 160);
        this.button.position(250, 200);
        this.button.mousePressed(()=>{
             this.input.hide();
             this.button.hide();
             player.name = this.input.value();
             playerCount++;
             player.index = playerCount;
             player.update();
             player.updateCount(playerCount);
             this.greeting.html("Hello" + player.name);
             this.greeting.position(130, 100);    
             
        })
    }
}