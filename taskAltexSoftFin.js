let arrletter = [];
let oneLetterNameClient;

let select = document.getElementById('arrLetter');
let list = document.getElementById('listName');

function buttonClick() {
    let element = document.querySelectorAll('#listName li');
    for (let i = 0; i < element.length; i++) {
    element[i].parentNode.removeChild(element[i]);
    }

    let selectValue = select.options[select.selectedIndex].value;
    mySearch(selectValue);
    
}

function addListName(name) {
    
    let content = name;
    let addElement = document.createElement('li');
    addElement.textContent = content;
    list.appendChild(addElement);
    
}

function pushHTMLSelect() {
    for (let i = 0; i < arrletter.length; i++) {
        let content = arrletter[i];
        let addElement = document.createElement('option');
        addElement.textContent = content;
        // addElement.value = content;
        select.appendChild(addElement);
    }
}

//random number
function myRandom(min, max) {
    let randomToLimit = Math.round(min + Math.random() * (max - min));
    return randomToLimit
}


//push the array with letters  
for (let i = 0; i < 5; i++) {
    arrletter.push(String.fromCharCode(myRandom(97,122)).toUpperCase());
}

console.log(arrletter);



function mySearch(valueOfSelect) {
    let notFound = false;

    for (let i = 0; i < clients.length; i++) {
        oneLetterNameClient = clients[i].name[0];
        if (oneLetterNameClient === valueOfSelect) {
            addListName(clients[i].name);
            notFound = true
        } 
    }
    if (!notFound) {
        addListName('Data not found');
    }
}




pushHTMLSelect();

