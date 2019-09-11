//Global vars
let userName = "test";
let passWord = "1234";

//Functions
function setLocalStorage () {
    localStorage.setItem("test","1234");
}

function loggedInView (){
let loggedInView = document.getElementById('view');
let logoutBtn = document.createElement('button');
logoutBtn.textContent = "Logga ut";
logoutBtn.addEventListener('click',logOut);
loggedInView.innerHTML="<h1>Grattis du är nu inloggad</h1>";
loggedInView.appendChild(logoutBtn);
document.body.appendChild(loggedInView);
}

function errorView(){
let errorView = document.getElementById('view');
errorView.innerHTML="<p>Tyvärr, det blev något fel försök igen</p>";
document.body.appendChild(errorView);
}

function homeView(){
    let homeView = document.getElementById('view');
    homeView.innerHTML = "<h1>Välkommen</h1> <br/>";
    homeView.innerHTML += "<p>Vänligen ange användarnamn och lösenord för att logga in</p>";
    document.body.appendChild(homeView);
}
function logOut (){
    localStorage.clear();
    homeView();
}

function userIsLoggedIn () {
    for (let i = 0; i < localStorage.length; i++) {
            let lsUserName = localStorage.key(i);
            let lsPassWord = localStorage.getItem(lsUserName);
            if (lsUserName == userName && lsPassWord == passWord){
                loggedInView();
            }
        }
}

function validate(){
    let inpUserName = document.getElementById("username").value;
    let inpPassWord = document.getElementById("password").value;
    if (inpUserName == userName && inpPassWord == passWord){
        setLocalStorage();
        loggedInView();
    }
    else{
        errorView();
    }
}
//Main starts here
if (localStorage.length) {
    userIsLoggedIn();
}
else
{
    homeView();
}