function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


const toggleMenu = document.getElementById('toggle-menu');
const sideMenu = document.getElementById('side-menu');

toggleMenu.addEventListener('click', () => {
	if (sideMenu.style.left === '-250px') {
		sideMenu.style.left = '0';
	} else {
		sideMenu.style.left = '-250px';
	}
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
}