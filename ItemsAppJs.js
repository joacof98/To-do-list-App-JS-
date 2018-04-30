$("#error").hide();
var formAgregar = document.getElementById("formAgregar");
var listaItems = document.getElementById("listaItems");
var filtro = document.getElementById("filtro");

// Función al agregar item
formAgregar.addEventListener("submit",agregarItem);
// Función al borrar un item
listaItems.addEventListener("click",removerItem);
// Función al buscar tareas, filtra por cada letra escrita
filtro.addEventListener("keyup",buscarItem);

function agregarItem(e) {
	e.preventDefault();

	var input = document.getElementById("inputAgregar").value;

	if(input == "") {
		$("#error").show();
	} else {
		
	$("#error").hide();

	//Ahora creamos el elemento li en el doc
	var li = document.createElement("li");
	// le damos la clase que tienen las li en el doc.
	li.className = "list-group-item";
	// Agregar nodo de texto en el li con el input
	li.appendChild(document.createTextNode(input));

	//creamos el boton X
	var btnBorrar = document.createElement("button");
	//le damos clase igual a los demas.
	btnBorrar.className = "btn btn-danger float-right btn-sm";
	// Agregar nodo de texto, cada vez que se crea uno debe mostrar X
	btnBorrar.appendChild(document.createTextNode("X"));

	// Cada botón pertenece a una li, con su respectivo input.
	li.appendChild(btnBorrar);

	//agregamos nuestra li y el boton X a ul
	listaItems.appendChild(li);
	

	}

}


function removerItem(e) {

	if(e.target.classList.contains("btn")) {
		if(confirm("Estás seguro de borrar la tarea?")) {
			var liPorBorrar = e.target.parentElement;
			listaItems.removeChild(liPorBorrar);
		}
	}
}

function buscarItem(e) {
	//El buscador debe ignorar si ingresamos mayúsculas, para encontrar mas facilmente
	var texto = e.target.value.toLowerCase();
	//obtener todas las li
	var lis = listaItems.getElementsByTagName("li");
	// las convertimos a un array para iterar
	Array.from(lis).forEach(function(item) {
		//Voy recorriendo cada una de las li (c/u equivale al actual 'item'), y mostrándolas si coinciden con lo buscado
		var nombreItem = item.firstChild.textContent;
		if(nombreItem.toLowerCase().indexOf(texto) != -1) {
			item.style.display = "block";
		} else {
			//Si no coinciden con lo buscado
			item.style.display = "none";
		}

	});
}