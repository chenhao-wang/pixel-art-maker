// Select color input
let color = document.getElementById("colorPicker");

// Select size input
let sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(e) {
	e.preventDefault();
	makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
	let table = document.getElementById("pixel_canvas");
	table.innerHTML = "";
	let height = document.getElementById("input_height").value;
	let width = document.getElementById("input_width").value;
	for (let i = 0; i < height; i++) {
		let row = document.createElement("tr");
		table.appendChild(row);
		let j = 0;
		while (j < width) {
			let ceil = document.createElement("td");
			row.appendChild(ceil);
			ceil.addEventListener("click", function() {
				this.style.background = color.value;
			});
			j++;
		}
	}
}
