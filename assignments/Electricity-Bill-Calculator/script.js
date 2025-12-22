function calculateBill() {
  let units = document.getElementById("units").value;
  let bill = 0;

  if (units <= 0 || units === "") {
    document.getElementById("result").innerHTML = "Please enter valid units!";
    return;
  }

  units = Number(units);

  if (units <= 100) {
    bill = units * 10;
  } else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
  } else {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  }

  document.getElementById("result").innerHTML = "Total Bill: ₹ " + bill;
}
