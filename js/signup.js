var namesignupinput = document.getElementById("name-signup");
var emailsignupinput = document.getElementById("email-signup");
var passwordsignupinput = document.getElementById("password-signup");

var userlist = [];
function adduser() {
	var user = {
		name: namesignupinput.value,
		email: emailsignupinput.value,
		password: passwordsignupinput.value,
	};


		if (emailcheck() != true && namecheck() && emailvalidator() && passwordvalidator()) {
            userlist.push(user);
		localStorage.setItem("users", JSON.stringify(userlist));
        document.getElementById("success-message").classList.remove("d-none");
        document.getElementById("email-message").classList.add("d-none");
        document.getElementById("password-message").classList.add("d-none");
        document.getElementById("name-message").classList.add("d-none");
        namesignupinput.value = "";
        emailsignupinput.value = "";
        passwordsignupinput.value = "";
        window.location.href = "../index.html";
        }
}
if (localStorage.getItem("users") != null) {
		var userlist = JSON.parse(localStorage.getItem("users"));

}
function emailcheck() {
	
		for (var i = 0; i < userlist.length; i++) {
			if (userlist[i].email == emailsignupinput.value) {
				document.getElementById("email-message").classList.remove("d-none");
                return true;
			}
            else{
                return false;
            }
		}
        
	}

    function namecheck() {
        var regex = /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})*$/
        if (regex.test(namesignupinput.value)) {
            document.getElementById("name-message").classList.add("d-none");
            return true;
        }
        else {
            document.getElementById("name-message").classList.remove("d-none");
            return false;
        }
    }
    function emailvalidator() {
        var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (regex.test(emailsignupinput.value)) {
            document.getElementById("email-alert").classList.add("d-none");
            return true;
        }
        else {
            document.getElementById("email-alert").classList.remove("d-none");
            return false;
        }
    }
    function passwordvalidator() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
    if (regex.test(passwordsignupinput.value)) {
        document.getElementById("password-message").classList.add("d-none");
        return true;}
        else{
            document.getElementById("password-message").classList.remove("d-none");
            return false;
        }
    }
