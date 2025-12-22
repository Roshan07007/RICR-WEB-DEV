async function getjoke() {
  document.getElementById("lorem1").innerText = "loading.....";
  document.getElementById("btn").Disabled = true;

  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  console.log(response);

  const data = await response.json();
  //   console.log(data);

  document.getElementById("lorem1").innerText = data.setup;
  document.getElementById("lorem2").innerText = data.punchline;
}
