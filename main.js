function firstGuess() {
    return new Promise(resolve => {
        let guessWord = ["lucas", "sofia"][Math.floor(Math.random() * 2)]
        for (let letter of guessWord) {
            setTimeout(() => {
                document.getElementById(`kbd_${letter}`).click();
            }, 100);
        }
        setTimeout(() => {
            document.getElementById("kbd_enter").click();
            console.log("%cPor favor, espere...", "color: gray; font-size: 30px;");
        }, 700);
        setTimeout(() => {
            resolve("OK!");
        }, 3000)
    });
}

function secondGuess() {
    const data = JSON.parse(localStorage.getItem("termo"));
    const solution = data.state.solution.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let letter of solution) {
        setTimeout(() => {
            document.getElementById(`kbd_${letter}`).click();
        }, 100);
    }
    setTimeout(() => {
        document.getElementById("kbd_enter").click();
    }, 700);
    setTimeout(() => {
        console.log("%cVitória!", "color: green; font-size: 30px;");
    }, 2200);
}

firstGuess().then(() => { secondGuess(); });
