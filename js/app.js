function updateTime() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);

function login() {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    alert('로그인 되었습니다.');
    showWelcomeMessage(username);
    showLogoutButton();
    hideLoginForm();
    showTodoList();
}

function logout() {
    localStorage.removeItem('username');
    alert('로그아웃 되었습니다.');
    hideWelcomeMessage();
    hideLogoutButton();
    showLoginForm();
    hideTodoList();
}

function showWelcomeMessage(username) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `환영합니다, ${username} 님!`;
    welcomeMessage.style.display = 'block';
}

function hideWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = 'none';
}

function hideLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
}

function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
}

function showTodoList() {
    const todoListContainer = document.getElementById('todoListContainer');
    todoListContainer.style.display = 'block';
}

function hideTodoList() {
    const todoListContainer = document.getElementById('todoListContainer');
    todoListContainer.style.display = 'none';
}

function loadTodoList() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        toDos = JSON.parse(storedTodos);
        displayTodoList();
    }
}

function displayTodoList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    for (let i = 0; i < toDos.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = toDos[i];

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        deleteButton.onclick = function () {
            toDos.splice(i, 1); 
            localStorage.setItem('todos', JSON.stringify(toDos)); 
            displayTodoList();
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
}

function addTask() {
    const task = document.getElementById('task').value;
    if (task.trim() !== '') {
        toDos.push(task); 
        localStorage.setItem('todos', JSON.stringify(toDos)); 
        displayTodoList(); // Refresh the list
        document.getElementById('task').value = '';
    }
}

let toDos = []; 
loadTodoList(); 

function showLogoutButton() {
    const logoutButtonContainer = document.getElementById('logoutButtonContainer');
    logoutButtonContainer.style.display = 'block';
}

function hideLogoutButton() {
    const logoutButtonContainer = document.getElementById('logoutButtonContainer');
    logoutButtonContainer.style.display = 'none';
}

if (localStorage.getItem('username')) {
    const username = localStorage.getItem('username');
    showWelcomeMessage(username);
    showLogoutButton();
    hideLoginForm();
    showTodoList();
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "68b28847191453be030ecede48be7745";
console.log("hi");
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

const backgrounds = [
    './img/001.jpg',
    './img/002.png',
    './img/003.jpg'
];

const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const backgroundImage = document.getElementById('backgroundImage');
backgroundImage.style.backgroundImage = `url(${randomBackground})`;