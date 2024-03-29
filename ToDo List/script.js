// *** Setting Date *** //
// Get day of the month
const now = new Date().getDate();

const monthDay = now.toLocaleString();

// Get Day of the Week
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekDay;
days.forEach((day, index) => {
    if(index == new Date().getDay()){
        weekDay = day;
    }
})

//Get Month of the year
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let monthYear = months[d.getMonth()];

// Set day and Month in HTML
const setDates = document.querySelector('.monthDay');
const setMonth = document.querySelector('.monthYear');

setDates.textContent = `${weekDay}, ${monthDay}`;
setMonth.textContent = `${monthYear}`;
// ***  *** //


// *** Deactivation Functions *** //

const addTask = document.getElementById('submit');

//Function to clear input fields
function clearInput(){
    description.value = '';
}

// ***  *** //

const taskLibrary = [];
addTask.addEventListener('click', createTask);

// Constructor
function Tasks(description){
    this.description = description;
}

const inputField = document.querySelector('#description');

function createTask(event){
    event.preventDefault();

    if(inputField.value === ""){
        alert('You must write something...');
    } else {
        let newTask = new Tasks(
            document.getElementById('description').value,
        );
    
        taskLibrary.push(newTask);
        clearInput();
        getTask();
    }
}

let newTask = document.querySelector('.newTask');

//let teste = document.querySelector('.teste')

function getTask(){
    let newDiv = document.createElement('div');
    newDiv.classList.add('taskAction');

    let para = document.createElement('h4');
    para.classList.add('taskDesc');

    let lastTask = taskLibrary[taskLibrary.length - 1];
    para.appendChild(document.createTextNode(Object.values(lastTask)[0]));

    let completed = document.createElement('img');
    completed.classList.add('completed');
    completed.setAttribute('src', 'done_FILL0_wght400_GRAD0_opsz24.svg');

    let deleted = document.createElement('img');
    deleted.classList.add('deleted');
    deleted.setAttribute('src', 'delete_FILL0_wght400_GRAD0_opsz24.svg');

    newDiv.appendChild(para);
    newDiv.appendChild(completed);
    newDiv.appendChild(deleted);
    newTask.appendChild(newDiv);
}

// Text Decoration 
document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("completed")){
        parentEl.classList.toggle('taskCompleted');
    }

    if(targetEl.classList.contains("deleted")){
        parentEl.remove();
    }
})