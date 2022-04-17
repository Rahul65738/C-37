class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "players/player"+ this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=>{
        playerCount = data.val()
        });
    }

    getPlayerInfo(){
        var playerInfoRef = databse.ref("players");
        playerInfoRef.on("value", (data)=>{
        allPlayers = data.val()
        
    });
    
}
}