class Casino {
    constructor(name, isFakeCoin) {
        this.name = name;
        this.timesPlayed = 0;
        this.isFakeCoin = isFakeCoin;
    }

    playGame(betAmount) {
        if(Math.random() <= 0.5 || this.isFakeCoin === true) {
            console.log(this.name + 'wins! try again');
        }
        else{
            console.log('You win!' + betAmount * 2 + 'dollars! Good Job');
        }
        this.timesPlayed += 1;
    }
};

   

// TESTS
const myCasino = new Casino("HackerU Casino", true);
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
