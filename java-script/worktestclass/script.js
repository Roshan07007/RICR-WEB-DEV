function start() {
  console.log("start Game");

  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;

  document.getElementById("Restart").disabled = false;
  document.getElementById("Start").disabled = true;
}

function restart() {
  window.location.reload();
}

function player1() {
  console.log("player1palying");

  let score = Number(document.getElementById("ply1").innerText);

  const di = Math.floor(Math.random() * 6) + 1;
  score = score + di;
  document.getElementById("ply1").innerText = score;

  switch (di) {
    case 1: {
      document.getElementById("btn1").SRC = "./sourse//1.jpeg";
    }
    case 2: {
      document.getElementById("btn1").SRC = "./sourse//2.jpeg";
    }

    case 3: {
      document.getElementById("btn1").SRC = "./sourse//3.jpeg";
    }
    case 4: {
      document.getElementById("btn1").SRC = "./sourse//4.jpeg";
    }
    case 5: {
      document.getElementById("btn1").SRC = "./sourse//5.jpeg";
    }
    case 6: {
      document.getElementById("btn1").SRC = "./sourse//6.jpeg";
    }
  }

  if (di === 6) {
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
  } else {
    score = score + di;
    document.getElementById("ply1").innerText = score;
  }
}

function player2() {
  console.log("player2palying");

  let score = Number(document.getElementById("ply2").innerText);

  const di = Math.floor(Math.random() * 6) + 1;
  score = score + di;
  document.getElementById("ply2").innerText = score;
  ///
  if (di === 6) {
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
  } else {
    score = score + di;
    document.getElementById("ply2").innerText = score;
  }
}
