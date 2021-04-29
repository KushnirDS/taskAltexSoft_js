let arrletter = [];
let oneLetterNameClient;

let select = document.getElementById('arrLetter');
let buttonSearch = document.getElementById('buttonSearch');
let buttonClear = document.getElementById('buttonClear');
let list = document.getElementById('listName');

buttonClear.addEventListener('click', delitList);

function buttonClick() {
    let selectValue = select.options[select.selectedIndex].value;
    mySearch(selectValue);
    
}

function addListName(name) {
    let content = name;
    let addElement = document.createElement('li');
    addElement.textContent = content;
    list.appendChild(addElement);
    
}

function delitList() {
    let element = document.querySelectorAll('#listName li');
    for (let i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);     
    }
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
for (let i = 0; i <= 4; i++) {
    arrletter.push(String.fromCharCode(myRandom(97,122)).toUpperCase());
}

console.log(arrletter);



function mySearch(valueOfSelect) {
    let notFound = false;

    for (let i = 0; i < clients.length; i++) {
        oneLetterNameClient = clients[i].name[0];
        if (oneLetterNameClient === valueOfSelect) {
            addListName(clients[i].name);
            // window.alert('Id:' + ' ' + clients[i]._id + ' ' + 'Name:' + ' ' + clients[i].name);
            notFound = true
        } 
    }
    if (!notFound) {
        window.alert('data not found');
    }
}



// window.alert('Id:' + ' ' + clients[1]._id + ' ' + 'Name:' + ' ' + clients[1].name)
pushHTMLSelect();
buttonSearch.addEventListener('click', buttonClick);
