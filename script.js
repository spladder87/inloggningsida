let userName = "test";
let passWord = "1234";

function setLocalStorage () {
    localStorageIsSet = true;
    localStorage.setItem("test","1234");
}

function loginView (){
let loginView = document.getElementById('view');
let logoutBtn = document.createElement('button');
logoutBtn.textContent = "Logga ut";
logoutBtn.addEventListener('click',logOut);
loginView.innerHTML="<h1>Grattis du är nu inloggad</h1>";
loginView.appendChild(logoutBtn);
document.body.appendChild(loginView);
}

function errorView(){
let errorView = document.getElementById('view');
errorView.innerHTML="<p>Tyvärr, det blev något fel försök igen</p>";
document.body.appendChild(errorView);
}

function homeView(){
    let homeView = document.getElementById('view');
    homeView.innerHTML = "<h1>Välkommen</h1> <br/>"
    "<p>Vänligen ange användarnamn och lösenord för att logga in</p>";
    document.body.appendChild(homeView);
}
function logOut (){
    localStorage.clear();
    homeView();
}

function userIsLoggedIn () {
    console.log("userIsLoggedIn");
    for (let i = 0; i < localStorage.length; i++) {
            let lsUserName = localStorage.key(i);
            console.log(lsUserName);
            let lsPassWord = localStorage.getItem(lsUserName);
            if (lsUserName == userName && lsPassWord == passWord){
                loginView();
            }
        }
}

function validate(){
    let inpUserName = document.getElementById("username").value;
    let inpPassWord = document.getElementById("password").value;
    if (inpUserName == userName && inpPassWord == passWord){
        setLocalStorage();
        loginView();
    }
    else{
        errorView();
    }
}

if (localStorage.lenght) {
    userIsLoggedIn();
}
else
{
    homeView();
}