let sketch = document.querySelector(".sketch");
let sizeSelector = document.querySelector(".size");
let colourBtn = document.querySelector(".colour");
let clearBtn = document.querySelector(".clear");
let grid = document.querySelector("#grid");

let createSketchPad = (pixels) => {
	console.log("Sketch pad created");
	clearScreen();
	for (let i = 0; i < pixels ** 2; i++) {
		let div = document.createElement("div");
		div.classList.add("block");
		div.classList.add("grid");
		sketch.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
		sketch.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;
		sketch.appendChild(div);
	}
	pencilIn(colourBtn.value);
};

let clearScreen = () => {
	grid.checked = true;
	console.log("cleared");
	let blocks = document.querySelectorAll(".block");
	blocks.forEach((block) => {
		block.remove();
	});
};

let pencilIn = (color) => {
	let blocks = document.querySelectorAll(".block");
	blocks.forEach((box) => {
		box.addEventListener("mouseover", () => {
			box.style.background = `${color}`;
		});
	});
};

grid.addEventListener("click", () => {
	let blocks = document.querySelectorAll(".block");
	blocks.forEach((block) => {
		block.classList.toggle("grid");
	});
});

clearBtn.addEventListener("click", () => {
	createSketchPad(sizeSelector.value);
});

colourBtn.oninput = () => {
	pencilIn(colourBtn.value);
};

sizeSelector.oninput = () => {
	document.querySelector(
		"#label"
	).innerHTML = `${sizeSelector.value} x ${sizeSelector.value}`;
	createSketchPad(sizeSelector.value);
};

sketch.addEventListener("mouseover", pencilIn(colourBtn.value));

createSketchPad(35);
pencilIn("black");
