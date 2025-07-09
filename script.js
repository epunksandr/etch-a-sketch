const grid = document.querySelector(".grid");
const buttons = document.querySelectorAll(".options button");
const clearButton = document.querySelector("#clearBtn");

const gridOptions = [
    {
        option: 16,
        width: "32px",
        height: "32px",
        count: 256
    },
    {
        option: 32,
        width: "16px",
        height: "16px",
        count: 1024
    },
    {
        option: 64,
        width: "8px",
        height: "8px",
        count: 4096
    }

];

let isMouseDown = false;
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);


function createGrid(option) {
    grid.innerHTML = "";

    const selectedOption = gridOptions.find(opt => opt.option == option);

    if (!selectedOption) return;

    for (let i = 0; i < selectedOption.count; i++) {
        const square = document.createElement("div");
        square.style.width = selectedOption.width;
        square.style.height = selectedOption.height;

        square.addEventListener("mousedown", () => square.style.backgroundColor = "black");
        
        square.addEventListener("mousemove", () => {
            if (isMouseDown) {
                square.style.backgroundColor = "black"
            }
        });

        grid.appendChild(square);
    }
}

buttons.forEach(button => button.addEventListener("click", () => createGrid(button.value)));

function clearGrid() {
    grid.innerHTML = "";
}

clearButton.addEventListener("click", () => clearGrid())

