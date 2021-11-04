 const prompt = require("prompt-sync")();

class Player {
    constructor(name){
        this.name = name;
        this.handGestures = ['Rock','Paper','Scissors','Lizard','Spock'];
        this.pointTally = 0;
    }

    pointChange(){
        this.pointTally = this.pointTally + 1;
        console.log(this.pointTally);
        return this.pointTally
    }

    selectHandGesture(){
        console.log("Please enter your gesture selection: \n 1 - Rock, 2 - Paper, 3 - Scissors, 4 - Lizard, 5 - Spock.");
        let playerSelectedHandGesture = prompt();
        if(playerSelectedHandGesture == 1){
            playerSelectedHandGesture = this.handGestures[0];
            console.log(playerSelectedHandGesture);
            return playerSelectedHandGesture[0]
        }
        else if(playerSelectedHandGesture == 2) {
            playerSelectedHandGesture = this.handGestures[1];
            console.log(playerSelectedHandGesture);
            return playerSelectedHandGesture[1]
        }
        else if(playerSelectedHandGesture == 3) {
            playerSelectedHandGesture = this.handGestures[2];
            console.log(playerSelectedHandGesture);
            return playerSelectedHandGesture[2]
            }
        else if(playerSelectedHandGesture == 4) {
            playerSelectedHandGesture = this.handGestures[3];
            console.log(playerSelectedHandGesture);
            return playerSelectedHandGesture[3]
            }
        else if(playerSelectedHandGesture == 5) {
            playerSelectedHandGesture = this.handGestures[4];
            console.log(playerSelectedHandGesture);
            return playerSelectedHandGesture[4]
        } 
        else {
            console.log("Invalid selection, please try again!");
            return
        }
    }
}

module.exports = {
    GamePlayer: Player
}