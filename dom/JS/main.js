
let title = document.getElementById("title");
console.log(title.innerText);

let mainDiv = document.querySelector(".main-div");
let listItems = document.querySelectorAll("ul.list > li");


title.innerText = "MI LISTA DE TAREAS.";


let image = document.querySelector("img");
image.setAttribute("src", "bun-logo.svg");
image.classList.add("img-responsive");

mainDiv.style.backgroundColor = "#ffcc00";





let oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);




let button = document.querySelector("button");
button.addEventListener("click", function () {
	alert("Espera un momento");
});


function showMessage(message) {
	alert(message);
}

button.addEventListener("click", function () {
	showMessage("Se agrego con exito ;)");
});

// agregar mas elementos a la lista
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("dynamicList");

addButton.addEventListener("click", function () {
	if (input.value.trim() !== "") {
		let newItem = document.createElement("li");
		newItem.innerText = input.value;
		list.appendChild(newItem);
		input.value = ""; 
	}
});


const filterInput = document.getElementById("filterInput");
const itemsList = document.getElementById("itemsList");

filterInput.addEventListener("keyup", function () {
	const term = filterInput.value.toLowerCase();
	const items = itemsList.getElementsByTagName("li");

	Array.from(items).forEach(function (item) {
		if (item.textContent.toLowerCase().indexOf(term) !== -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
});


const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', function() {
    setTimeout(() => { this.style.display = 'none'; }, 0);
});

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', function() {
    draggable.style.display = 'block';
    this.append(draggable);
});


//    <input type="text" id="filterInput" placeholder="Filtrar ítems...">
//<ul id="itemsList">
//<li>xd</li>
//<li>Python</li>
//<li>Ruby</li>
//<li>Java</li>
//<li>PHP</li>
//</ul>


//<div id="draggable" draggable="true">Arrástrame</div>
//<div id="dropzone">Zona para soltar</div>

