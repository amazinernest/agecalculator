let currentyear = 2022;

document.querySelector("#check").addEventListener("click", run);

function run() {
  const age = document.querySelector("#birthYear").value;

  document.querySelector("#Age").innerText = currentyear - age;
}
