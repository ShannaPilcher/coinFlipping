function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;    
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();        
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (headsCount === 5 && attempts <100) {
            resolve("Yay! The coin has landed on heads 5 times in a row!")
        }
        else {
            reject ("Sorry, the coin hasn't landed on heads 5 times in a row")
        }
    });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );