function Submit() {
  console.log("submit button clik");

  const a = document.getElementById("username").value;
  const b = document.getElementById("useremail").value;
  const c = document.getElementById("usernumber").value;
  const d = document.getElementById("userbirth").value;
  const e = document.getElementById("qualification").value;
  const f = document.getElementById("userPercentage").value;
  const g = document.getElementById("preferredCourse").value;
  const k = document.getElementById("useraddress").value;
  const l = document.getElementById("usercity").value;
  const j = document.getElementById("userpincode").value;
  const i = document.getElementById("guardianName").value;
  const h = document.getElementById("GuardianContactNumber").value;
  const z = document.getElementById("refSource").value;

  console.log("Name:", a);
  console.log("email:", b);
  console.log("number", c);
  console.log("birth date", e);
  console.log(" qualification", f);
  console.log("userPercentage ", g);
  console.log("course", k);
  console.log("useraddress", l);
  console.log("usercity", j);
  console.log("pincode", i);
  console.log("guardianName", h);
  console.log("GuardianContactNumber", z);
  console.log("referSource", d);

  alert("submit done");

  document.getElementById("username").value = "";
  document.getElementById("useremail").value = "";
  document.getElementById("usernumber").value = "";
  document.getElementById("userbirth").value = " ";
  document.getElementById("qualification").value = "";
  document.getElementById("userPercentage").value = "";
  document.getElementById("preferredCourse").value = "";
  document.getElementById("useraddress").value = "";
  document.getElementById("usercity").value = "";
  document.getElementById("userpincode").value = "";
  document.getElementById("guardianName").value = "";
  document.getElementById("GuardianContactNumber").value = "";
  document.getElementById("refSource").value = "";
}
