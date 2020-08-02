const tbody = document.querySelector('tbody');

let requestURL = 'https://dovgaldima.pp.ua/books.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const tableBooks = request.response;
    showBooks(tableBooks);
}

function showBooks(jsonObj) {
    const books = jsonObj['books'];

    for(let i = 0; i < books.length; i++) {
        const trVar = document.createElement('tr');
        
        const directionVar = document.createElement('td');
        const nameAndYearVar = document.createElement('td');
        const authorVar = document.createElement('td');
		const tdLinksVar = document.createElement('td');
        const linksVar  = document.createElement('a');

        directionVar.textContent = books[i].direction;
        nameAndYearVar.textContent = books[i].nameAndYear;
		authorVar.textContent = books[i].author;
		
		linksVar.href = books[i].links;
		linksVar.appendChild(document.createTextNode('Читать'));
        tdLinksVar.appendChild(linksVar);
        
        trVar.appendChild(directionVar);
        trVar.appendChild(nameAndYearVar);
        trVar.appendChild(authorVar);
		trVar.appendChild(tdLinksVar);
        
        tbody.appendChild(trVar);
    }
}