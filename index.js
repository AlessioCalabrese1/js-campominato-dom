let grillGeneratorButton = document.getElementById("grillGenerator");
let min = 1;
let winCounter = 0;

grillGeneratorButton.addEventListener("click", function () {
    let difficultyOption = document.getElementById("difficulty").value;
    console.log(difficultyOption);
    let grillItemsNumber = 100;
    if (difficultyOption === "Difficulty 1") {
        grillItemsNumber = 100;
    } else if (difficultyOption === "Difficulty 2") {
        grillItemsNumber = 81;
    } else if (difficultyOption === "Difficulty 3") {
        grillItemsNumber = 49;
    }

    let grillContainer = document.getElementById("grillContainer");
    if (grillContainer.innerHTML != "") {
        grillContainer.innerHTML = "";
    }

    let bombContainer = bombCreator(grillItemsNumber);
    bubbleSort(bombContainer);
    console.table(bombContainer);

    grillCreator(grillItemsNumber, difficultyOption, bombContainer);
});


function randomNumber(max, min) {
    return Math.floor((Math.random() * max) + min);
}

function grillCreator(grillItemsNumber, difficultyOption, bombContainer) {
    let winScreen = document.createElement("div");
    winScreen.id = "winScreen";
    winScreen.classList.add("d-none");
    winScreen.append("Hai vinto!");

    let loseScreen = document.createElement("div");
    loseScreen.id = "loseScreen";
    loseScreen.classList.add("d-none");
    loseScreen.append("Hai perso!");
    
    for (let index = 0; index < grillItemsNumber; index++) {
        let grillItem = document.createElement("div");
        if (difficultyOption === "Difficulty 1") {
            grillItem.classList.add("grill-items-10", "d-inline-block", "bg-success", "gi-text");
            grillContainer.classList = "w_800px"
        } else if (difficultyOption === "Difficulty 2") {
            grillItem.classList.add("grill-items-9", "d-inline-block", "bg-success", "gi-text");
            grillContainer.classList = "w_720px"
        } else if (difficultyOption === "Difficulty 3") {
            grillItem.classList.add("grill-items-7", "d-inline-block", "bg-success", "gi-text");
            grillContainer.classList = "w_560px"
        }

        grillItem.innerHTML = index + 1;
        grillItem.addEventListener("click", function () {
            console.log(grillItem.innerHTML);
            grillItem.classList.remove("bg-success");

            if (bombContainer.indexOf(parseInt(grillItem.innerHTML)) != -1) {
                grillItem.classList.add("bg-danger");
                console.warn("Hai perso");
                loseScreen.classList.remove("d-none");
            } else {
                grillItem.classList.add("bg-info");
                winCounter++;
                console.log("Io sono wincounter: " + winCounter);
                if (winCounter === (grillItemsNumber - 16)) {
                    console.warn("Hai vinto! Il tuo punteggio è " + winCounter);
                    winCounter = 0;
                    winScreen.classList.remove("d-none");
                }
            }
        }, {once : true});
        grillContainer.append(grillItem);
    }

    grillContainer.append(winScreen);
    grillContainer.append(loseScreen);
}

/* function clickGrillItem(grillItem, bombContainer, grillItemsNumber) {
    console.log(grillItem.innerHTML);
    grillItem.classList.remove("bg-success");

    if (bombContainer.indexOf(parseInt(grillItem.innerHTML)) != -1) {
        grillItem.classList.add("bg-danger");
        console.warn("Hai perso");
    } else {
        grillItem.classList.add("bg-info");
        winCounter++;
        console.log("Io sono wincounter: " + winCounter);
        if (winCounter === (grillItemsNumber - 16)) {
            console.warn("Hai vinto! Il tuo punteggio è " + winCounter);
            winCounter = 0;
        }
    }
} */


function bombCreator(grillItemsNumber) {
    let bombContainer = [];
    let condition = true;
    for (let index = 0; index < 16; index++) {
        condition = true;
        while (condition) {
            bombItem = randomNumber(grillItemsNumber, min);
            console.log(bombItem);
            if (bombContainer.indexOf(bombItem) === -1) {
                bombContainer[index] = bombItem;
                console.log(bombContainer[index]);
                condition = false;
            }
        }
    }
    return bombContainer;
}


function bubbleSort(array) {
    let i;
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                i = array[j + 1];
                array[j + 1] = array[j];
                array[j] = i;
            }
        }
    }
}