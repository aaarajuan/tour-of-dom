console.log('first file');

const allLi = document.getElementById('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';


// document.querySelectorAll
// document.querySelector

const secondList = document.getElementById('second-list');
const li1 = document.createElement('li');
li1.innerText = 'My dynamic items';
secondList.appendChild(li1);

const main = document.getElementById('main-container');
const section1 = document.createElement('section');
section1.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra test added inside paragraphs.</p>
<ul>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
    <li>Item 1</li>
</ul>
`
main.appendChild(section1);