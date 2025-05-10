console.log(document);

console.dir(document);

console.log(document.URL);

console.log(document.domain);

console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.images);
console.log(document.links);
console.log(document.scripts);

console.log(document.lastModified)
console.log(document.readyState)
console.log(document.cookie)
console.log(document.all)


document.title = "New Title";


const body = document.body;


const h1 = document.getElementsByTagName('h1');
console.log(h1)
h1[0].style.textAlign = 'center'
h1[0].style.backgroundColor = 'yellow'
h1[0].style.color = 'green'
h1[1].style.textAlign = 'center'


h1[1].remove();


// h1[1].remove()


const paragraph = document.createElement('p');
paragraph.textContent = "This is a new paragraph created by JavaScript"
body.appendChild(paragraph);
paragraph.style.textAlign = 'center'


const newDiv = document.createElement('div');

const list = document.createElement('li');
list.innerText = 'First Item';

const list2 = document.createElement('li');
list2.innerText = 'Second Item';


newDiv.appendChild(list);
newDiv.appendChild(list2);

body.appendChild(newDiv)

// newDiv.remove()

newDiv.removeChild(list2);
// newDiv.removeChild(list);






