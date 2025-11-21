function submit() {
  console.log("click to submit");

  const a = document.getElementById("username").value;
  const b = document.getElementById("usernumber").value;
  const c = document.getElementById("useremail").value;
  const d = document.getElementById("userqualification").value;
  const e = document.getElementById("usercollage").value;
  const f = document.getElementById("useryear").value;
  const g = document.getElementById("userbranch").value;
  const h = document.getElementById("usersubject").value;
  const i = document.getElementById("usersubjects").value;
  const j = document.getElementById("Business").value;
  const k = document.getElementById("java").value;
  const l = document.getElementById("pythan").value;
  const m = document.getElementById("datascience").value;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
  console.log(h);
  console.log(i);
  console.log(j);
  console.log(k);
  console.log(l);
  console.log(m);

  alert("submit done");

  document.getElementById("username").value = "";
  document.getElementById("usernumber").value = "";
  document.getElementById("useremail").value = "";
  document.getElementById("userqualification").value = "";
  document.getElementById("usercollage").value = " ";
  document.getElementById("useryear").value = " ";
  document.getElementById("userbranch").value = "";
  document.getElementById("usersubject").value = " ";
  document.getElementById("usersubjects").value = " ";
  document.getElementById("Business").value = "";
  document.getElementById("java").value = " ";
  document.getElementById("pythan").value = " ";
  document.getElementById("datascience").value = "";
}
