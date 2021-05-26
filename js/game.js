class Game{
    constructor(){}

    getState()
    {
        var dbref = database.ref("gameState")
            dbref.on("value",function(data)
            {
                gameState =data.val()
            })
    }
    update(state)
    {
        database.ref("/").update({gameState : state})
    }
    startGame()
    {

        if(gameState===0)
        {
            player = new Player();
            player.getPlayercount();
            form = new Form();
            form.display();
        }

    }


    play()
    {
      form.hideform();
      Player.getAllPlayersInfo();
      textSize(25)
      text("Game Started", 140,160)
      if(allPlayers!==undefined)
      { var y = 200
          for(var plr in allPlayers)
          {
              console.log(plr, player.index)

              if (plr === "player" + player.index)
              fill("red")
            else
              fill("black");

              text(allPlayers[plr].name + " : " + allPlayers[plr].distance,100,y)
              y=y+50
          }

      }
      if(keyIsDown(UP_ARROW)&&player.index!==null)
      {
        player.distance+=50;
        player.update()
      }

    }
}

