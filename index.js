let grillGeneratorButton = document.getElementById("grillGenerator");

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
});




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
