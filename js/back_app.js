// 실시간 시계
function updateTime() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);

// 로컬 스토리지를 사용한 로그인
function login() {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    alert('로그인 되었습니다.');

    // 사용자가 이미 로그인한 경우 환영 메시지와 로그아웃 버튼만 표시
    showWelcomeMessage(username);
    showLogoutButton();
    hideLoginForm();
    showTodoList();
}

// 로그아웃 버튼 클릭 시 로그아웃
function logout() {
    localStorage.removeItem('username');
    alert('로그아웃 되었습니다.');
    hideWelcomeMessage();
    hideLogoutButton();
    showLoginForm();
    hideTodoList();
}

// 환영 메시지 표시
function showWelcomeMessage(username) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `환영합니다, ${username} 님!`;
    welcomeMessage.style.display = 'block';
}

// 환영 메시지 숨김
function hideWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.display = 'none';
}

// 로그인 폼 숨김
function hideLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
}

// 로그인 폼 표시
function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
}

// To-Do List를 표시
function showTodoList() {
    const todoListContainer = document.getElementById('todoListContainer');
    todoListContainer.style.display = 'block';
}

// To-Do List를 숨김
function hideTodoList() {
    const todoListContainer = document.getElementById('todoListContainer');
    todoListContainer.style.display = 'none';
}

// Load To-Do list from local storage on page load
function loadTodoList() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        toDos = JSON.parse(storedTodos);
        displayTodoList();
    }
}

// Display the To-Do list
function displayTodoList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the list first

    for (let i = 0; i < toDos.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = toDos[i];

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        // Attach event handler to delete task and update local storage
        deleteButton.onclick = function () {
            toDos.splice(i, 1); // Remove the task from the array
            localStorage.setItem('todos', JSON.stringify(toDos)); // Update local storage
            displayTodoList(); // Refresh the list
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
}

// Add a task to the To-Do list
function addTask() {
    const task = document.getElementById('task').value;
    if (task.trim() !== '') {
        toDos.push(task); // Add the task to the array
        localStorage.setItem('todos', JSON.stringify(toDos)); // Update local storage
        displayTodoList(); // Refresh the list
        document.getElementById('task').value = '';
    }
}

// Initialize To-Do list
let toDos = []; // Initialize the array
loadTodoList(); // Load tasks from local storage on page load


// 로그아웃 버튼을 표시
function showLogoutButton() {
    const logoutButtonContainer = document.getElementById('logoutButtonContainer');
    logoutButtonContainer.style.display = 'block';
}

// 로그아웃 버튼을 숨김
function hideLogoutButton() {
    const logoutButtonContainer = document.getElementById('logoutButtonContainer');
    logoutButtonContainer.style.display = 'none';
}

// 사용자가 이미 로그인한 경우 환영 메시지와 로그아웃 버튼만 표시
if (localStorage.getItem('username')) {
    const username = localStorage.getItem('username');
    showWelcomeMessage(username);
    showLogoutButton();
    hideLoginForm();
    showTodoList();
}


// 랜덤 배경 이미지
const backgrounds = [
    '001.jpg',
    '002.png',
    '003.jpg'
    // 추가 이미지 URL을 여기에 추가하세요
];

const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const backgroundImage = document.getElementById('backgroundImage');
backgroundImage.style.backgroundImage = `url(${randomBackground})`;

