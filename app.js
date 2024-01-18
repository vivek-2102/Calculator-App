let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", btnpress);
}
let inp = document.querySelector("input");

function btnpress() {
  let btn = this;
  if (btn.innerText == "AC") {
    inp.value = "";
  } else if (btn.innerText == "X") {
    let str = inp.value;
    let ch = str.slice(0, str.length - 1);
    inp.value = ch;
  } else if (btn.innerText != "=") inp.value += btn.innerText;
  else {
    let str = inp.value;
    console.log(str);
    if (str.includes("+")) {
      let x = str.split("+");
      let ans = Number(x[0]) + Number(x[1]);
      inp.value = ans;
    } else if (str.includes("-")) {
      let x = str.split("-");
      let ans = Number(x[0]) - Number(x[1]);
      inp.value = ans;
    } else if (str.includes("*")) {
      let x = str.split("*");
      let ans = Number(x[0]) * Number(x[1]);
      inp.value = ans;
    } else if (str.includes("/")) {
      let x = str.split("/");
      let ans = Number(x[0]) / Number(x[1]);
      inp.value = ans;
    } else if (str.includes("%")) {
      let x = str.split("%");
      let ans = Number(x[0]) % Number(x[1]);
      inp.value = ans;
    }
  }
}
