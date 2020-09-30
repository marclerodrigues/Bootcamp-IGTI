window.addEventListener('load', start);

var globalAlunos = [];
var isEditing = false;
var inputName = null;
var currentIndex = null;

function start(){
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();
}

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput(){
    function insertName(newName){
        globalAlunos.push(newName);

        render();
    }

    function updateName(newName){
        globalAlunos[currentIndex] = newName;
    }

    function handleTyping(event) {
        var hasText = !!event.target.value && event.target.value.trim() !== '';

        if(!hasText){
            clearInput();
            return;
        }

        if(event.key === 'Enter'){
            if(isEditing){
                updateName(event.target.value);
            }else{
                insertName(event.target.value);
            }

            render();
            isEditing = false;
            clearInput();
        }
    }

    inputName.addEventListener('keyup', handleTyping);
    inputName.focus();
}

function render(){
    function createDeleteButton(index){
        function deleteName(){
            console.log('delete');
            globalAlunos.splice(index, 1);
            render();
        }

        var button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'X';
        button.addEventListener('click', deleteName);

        return button;
    }

    function createSpan(name, index){
        function editItem(){
            inputName.value = name;
            inputName.focus();
            
            isEditing = true;

            currentIndex = index;
        }

        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem);

        return span;
    }

    var divNames = document.querySelector('#alunos');
    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for(var i = 0; i < globalAlunos.length; i++){
        var currentNames = globalAlunos[i];

        var li = document.createElement('li');
        var button = createDeleteButton(i);
        var span = createSpan(currentNames, i);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();
}

function clearInput(){
    inputName.value = '';
    inputName.focus();
}