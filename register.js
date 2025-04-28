document.getElementById("register").addEventListener("submit", (event) => {
  event.preventDefault();
  let fullname = document.getElementById("fullname");
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");
  let error = document.getElementById("error");

  if (pass.value !== cpass.value) {
    error.innerHTML = "Passwrod and Confirm Password doesn't matched!";
    pass.style.border = "1px solid red";
    cpass.style.border = "1px solid red";
  } else {
    error.innerHTML = "";
    pass.style.border = "1px solid green";
    cpass.style.border = "1px solid green";
    let data = {
      fullname: fullname.value,
      email: email.value,
      pass: pass.value,
      cpass: cpass.value,
    };
    data = JSON.stringify(data);
    console.log(data);
    localStorage.setItem("data", data);
    fullname.value = "";
    email.value = "";
    pass.value = "";
    cpass.value = "";
    window.location.href = "login.html"
  }
});


