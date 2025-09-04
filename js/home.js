var user = JSON.parse(localStorage.getItem("currentuser"));
document.getElementById("user-name").innerHTML = user.name;
function logout() {
	localStorage.removeItem("currentuser");
	window.location.href = "../index.html";
}