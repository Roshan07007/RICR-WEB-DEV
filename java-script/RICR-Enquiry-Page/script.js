function submit() {
  console.log("click to submit");

  const a = document.getElementById("username").value.trim();
  const b = document.getElementById("usernumber").value.trim();
  const c = document.getElementById("useremail").value.trim();
  const d = document.getElementById("userqualification").value.trim();
  const e = document.getElementById("usercollage").value.trim();
  const f = document.getElementById("useryear").value.trim();
  const g = document.getElementById("userbranch").value.trim();
  const h = document.getElementById("usersubject").value.trim();
  const i = document.getElementById("usersubjects").value.trim();
  const j = document.getElementById("Business").value.trim();
  const k = document.getElementById("java").value.trim();
  const l = document.getElementById("pythan").value.trim();
  const m = document.getElementById("datascience").value.trim();

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

  if (!/^[A-Za-z ]+$/.test(a)) {
    alert("worng name");
    return;
  }
  if (!/^[6-9]\d{9}$/.test(b)) {
    alert("Worng number");
    return;
  }

  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(c)) {
    alert("Worng email");
    return;
  }

  if (!/^[A-Za-z0-9 ]+$/.test(d)) {
    console.log("Invalid Qualification");
    return;
  }

  if (!/^[A-Za-z .-]{3,}$/.test(e)) {
    console.log("Invalid Name");
    return;
  }

  if (year === "other
    ") {
    console.log("Please select a year");
}
else if (/^(19[8-9][0-9]|20[0-9]{2})$/.test(f)) {
    console.log("Valid Year");
}


  const data = {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
  };

  console.log(data);

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
