function firstGuess() {
    return new Promise(resolve => {
        for (let letter of "lucas") {
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
    const solution = data.state.solution;
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
