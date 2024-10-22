let username = prompt("Can you enter your username?");

let password = prompt("Can you enter the password? (must be at least 8 characters, cannot contain spaces, cannot contain the username)");

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(" ")) {
        return false;
    }

    if (password.toLowerCase().includes(username.toLowerCase())) {
        return false;
    }

    return true;
}

let result = isValidPassword(password, username);

if (result) {
    console.log("Password is valid.");
} else {
    console.log("Password is not valid.");
}
