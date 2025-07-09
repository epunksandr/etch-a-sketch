const grid = document.querySelector(".grid");
const randomBtn = document.querySelector("#randomBtn");

const gridOptions = [
    { option: 16, width: "32px", height: "32px", count: 256 },
    { option: 32, width: "16px", height: "16px", count: 1024 },
    { option: 48, width: "10.66px", height: "10.66px", count: 2304 },
    { option: 64, width: "8px", height: "8px", count: 4096 }
];

let useRandomColor = false;

randomBtn.addEventListener("click", () => {
    useRandomColor = !useRandomColor;
    randomBtn.textContent = useRandomColor ? "Black" : "Random color";
});

let isMouseDown = false;

// track the mouse globally to enable draw painting
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);


function generateColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(value) {
    grid.innerHTML = "";

    const selectedOption = gridOptions.find(opt => opt.option === Number(value));

    if (!selectedOption) return;

    for (let i = 0; i < selectedOption.count; i++) {
        const fragment = document.createElement("div");
        fragment.style.width = selectedOption.width;
        fragment.style.height = selectedOption.height;

        fragment.addEventListener("mousedown", () => fragment.style.backgroundColor = useRandomColor ? generateColor() : "black");

        fragment.addEventListener("mousemove", () => {
            if (isMouseDown) {
                fragment.style.backgroundColor = useRandomColor ? generateColor() : "black"
            }
        });

        grid.appendChild(fragment);
    }
}

const value = document.querySelector("#value");
const input = document.querySelector("#input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    createGrid(input.value)
});

function clearGrid() {
    grid.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    input.value = 16;
    value.textContent = "16";
    createGrid(16);
})