var emailLoginInput = document.getElementById("email-login");
var passwordLoginInput = document.getElementById("password-login");

function login() {
	checklogin()
		if (localStorage.getItem("users") != null) {
			var userlist = JSON.parse(localStorage.getItem("users"));
			for (let i = 0; i < userlist.length; i++) {
				if (userlist[i].email == emailLoginInput.value && userlist[i].password == passwordLoginInput.value) {
					document.getElementById("error-message").classList.add("d-none");
					document.getElementById("incorrect-message").classList.add("d-none");
					localStorage.setItem("currentuser", JSON.stringify(userlist[i]));
					emailLoginInput.value = "";
					passwordLoginInput.value = "";
					window.location.href = "html/home.html";
				}
				checklogin();

			}
		}
	}

function checklogin() {
	if ( emailLoginInput.value == '' ||  passwordLoginInput.value == '') {
					document.getElementById("error-message").classList.remove("d-none");
					document.getElementById("incorrect-message").classList.add("d-none");
				}
				else  {
					document.getElementById("incorrect-message").classList.remove("d-none");
					document.getElementById("error-message").classList.add("d-none");
				}
}