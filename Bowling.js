function bowling() {
    let score = 0;
    let spare = false;
    let strike = false;
    for (let round = 1; round <= 10; round++) {
        const first = Math.floor(Math.random() * 11);
        const second = Math.floor(Math.random() * (11 - first));
        if (round == 10 && strike) {
            const third = Math.floor(Math.random * 11);
            score += third;
        }

        if (first == 10) {
            //strike
            if (spare) {
                spare = false;
                score += 10;
            }
            score += 10;
            strike = true;
            console.log("X |", score);
        } else if (first + second == 10) {
            //spare
            if (strike) {
                score += 10;
            } else if (spare) {
                score += first;
            }
            spare = true;
            strike = false;
            score += 10;
            console.log(first, "/", "|", score);
        } else {
            if (strike) {
                score = score + first + second;
            } else if (spare) {
                score += first;
            }
            spare = false;
            strike = false;
            score = score + first + second;
            console.log(first, second, "|", score);
        }
    }
    console.log("Score", score);
}

bowling();