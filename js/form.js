class Form{
    constructor(){
      this.title = createElement("h2")
      this.input = createInput("Name")
      this.button = createButton("Play")
       this.greeting = createElement("h3")
    }



         display()
         {
         
          this.title.html("Car Racing Game")
          this.title.position(130,0)

           
           this.input.position(140,110)
           
           
           this.button.position(140,160)
           this.button.mousePressed(()=>{
               this.input.hide();
               this.button.hide();
           
               var name = this.input.value();

               
               this.greeting.html("Hello " +name )
               this.greeting.position(140,160)
               //player1, player2, player3
              playerCount = playerCount  + 1;
              player.updateCount(playerCount);
              player.name = name
              player.updateplayer()


           })
         
        }
    hideform()
    {
     this.greeting.hide();
     this.input.hide();
     this.button.hide();
    }    
}