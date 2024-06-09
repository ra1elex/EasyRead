const bookContentElement = document.getElementById('book-content');
const bookText = `
<p></p>
<p></p>
<p></p>

<p></p>
<p></p>
<p></p>

<p></p>
<p></p>
<p></p>

<p></p>
`;
const pageSize = 3; 
let currentPage = 0;
let pages = [];

function paginateText(text) {
	const paragraphs = text.trim().split('</p>');
	const pageCount = Math.ceil(paragraphs.length / pageSize);
	for (let i = 0; i < pageCount; i++) {
		const start = i * pageSize;
		const end = start + pageSize;
		pages.push(paragraphs.slice(start, end).join('</p>') + '</p>');
	}
}

function showPage(page) {
	bookContentElement.innerHTML = pages[page];
}

function prevPage() {
	if (currentPage > 0) {
		currentPage--;
		showPage(currentPage);
	}
}

function nextPage() {
	if (currentPage < pages.length - 1) {
		currentPage++;
		showPage(currentPage);
	}
}

document.getElementById('toggle-menu').addEventListener('click', function () {
	const sideMenu = document.getElementById('side-menu');
	if (sideMenu.style.right === '0px') {
		sideMenu.style.right = '-250px';
	} else {
		sideMenu.style.right = '0px';
	}
});

document.getElementById('darkModeToggle').addEventListener('change', function () {
	document.body.classList.toggle('dark-mode');
});

document.getElementById('textSizeRange').addEventListener('input', function () {
	const bookContent = document.getElementById('book-content');
	bookContent.style.fontSize = this.value + 'px';
});

document.getElementById('brightnessRange').addEventListener('input', function () {
	const readerContainer = document.getElementById('reader-container');
	readerContainer.style.filter = `brightness(${this.value}%)`;
});

paginateText(bookText);
showPage(currentPage);