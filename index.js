let username = prompt("Can you enter your username?");
let password = prompt("Can you enter the password? (must be at least 8 characters, cannot contain spaces, cannot contain the username)");
function isValidPassword(username, password) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(" ")) {
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}
    console.log(isValidPassword(username,password));
