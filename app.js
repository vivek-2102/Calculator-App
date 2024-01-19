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
  } else if (btn.innerText != "=") 
  inp.value += btn.innerText;
  else {
    let str = inp.value;
    try{
    inp.value=eval(str);}
    catch(err)
    {
      inp.value="Syntax Error";
      setTimeout(()=>{
        inp.value="";
      },1000);
       
    }
  }
}
