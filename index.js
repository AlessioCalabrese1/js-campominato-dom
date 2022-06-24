let grillGeneratorButton = document.getElementById("grillGenerator");
let min = 1;

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

    grillCreator(grillItemsNumber, difficultyOption);

    let bombContainer = bombCreator(grillItemsNumber);
    bubbleSort(bombContainer);
    console.table(bombContainer);
});


function randomNumber(max ,min){
    return Math.floor((Math.random() * max) + min);
}

function grillCreator(grillItemsNumber, difficultyOption) {
    for (let index = 0; index < grillItemsNumber; index++) {
        let grillItem = document.createElement("div");
        if (difficultyOption === "Difficulty 1") {
            grillItem.classList.add("grill-items-10", "d-inline-block", "bg-success", "gi-text");
        } else if (difficultyOption === "Difficulty 2") {
            grillItem.classList.add("grill-items-9", "d-inline-block", "bg-success", "gi-text");
        } else if (difficultyOption === "Difficulty 3") {
            grillItem.classList.add("grill-items-7", "d-inline-block", "bg-success", "gi-text");
        }

        grillItem.innerHTML = index + 1;
        grillItem.addEventListener("click", function () {
            console.log(grillItem.innerHTML);
            grillItem.classList.remove("bg-success");
            grillItem.classList.add("bg-info");
        });
        grillContainer.append(grillItem);
    }
}


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