function login() {
  console.log("Order Detail");

  const pi1 = document.getElementById("submitOrder").value;
  const name1 = document.getElementById("name").value;
  const lastname1 = document.getElementById("lastname").value;
  const email1 = document.getElementById("email").value;
  const number1 = document.getElementById("number").value;
  const date1 = document.getElementById("date").value;
  const comment1 = document.getElementById("comment").value;
  console.log(pi1);
  console.log(name1);
  console.log(lastname1);
  console.log(email1);
  console.log(number1);
  console.log(date1);
  console.log(comment1);

  alert("submit done");

  document.getElementById("submitOrder").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("date").value = "";
  document.getElementById("comment").value = "";
}

