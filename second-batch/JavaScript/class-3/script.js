// const todayConcept = document.querySelector('#todayConcept')
const todayConcept = document.getElementById('todayConcept')

todayConcept.textContent = "Hello World!"
todayConcept.style.color = 'green';


const btn = document.querySelector('#apply-btn');
btn.style.color = 'red';
btn.style.backgroundColor = 'black'


const inputBox = document.getElementById('input');
inputBox.value = 'Type here....';


const dontClickButton = document.getElementById('do-not-click');


dontClickButton.addEventListener('click', () => {

    todayConcept.textContent = "Danger";
    setTimeout(() => {
        alert("You are in danger so be safe.");
    }, 300);
})



const numberInput = document.getElementById('number');
let num = 1;
numberInput.addEventListener('input', () => {
    console.log('Typing...');
})



const myPara = document.getElementById('para');

function changeColorToGreen(){
    myPara.classList.add('color-green')
    // myPara.classList.toggle('color-green')

    setTimeout(() => {
        myPara.classList.remove('color-green')
    }, 3000);
}


function copyPassword(){
    navigator.clipboard.writeText("Rahul$123@money");
    alert("Password copied successfully.")
}


let userInput = prompt("Enter you number");
console.log(typeof userInput);
console.log(parseInt(userInput) + 2);

