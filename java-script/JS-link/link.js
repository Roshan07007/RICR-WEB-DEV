function login() {
  console.log("login button clik");

  const en = document.getElementById("email").value ;
  const pass = document.getElementById("password").value ;

  console.log(en);
  console.log(pass);

  alert("login done");
   document.getElementById("email").value = " ";
  document.getElementById("password").value = " ";
  
}
