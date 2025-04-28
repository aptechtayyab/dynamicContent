document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();

  let data = localStorage.getItem("data");
  data = JSON.parse(data);
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  let localEmail = data.email;
  let localPass = data.pass;
  let error = document.getElementById("error")
  if (localEmail !== email.value || localPass !== pass.value) {
    error.innerHTML = "Email or password is incorrect!";
    email.style.border = "1px solid red";
    pass.style.border = "1px solid red";
  }
  else{
    error.innerHTML = "";
    email.style.border = "1px solid green";
    pass.style.border = "1px solid green";
    window.location.href = "middleware.html"
  }
});
