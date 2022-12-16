let rstSc = document.getElementById('rst');
let btns = document.querySelectorAll('.btn');
let tempArr = []
btns.forEach(element => {
  element.addEventListener('click', (e) => {
    let inputValue = e.target.innerText;
    // let rstScValue = rstSc.value;
    if (inputValue === "DEL") {
      // console.log("hii")
      tempArr.pop()
      rstSc.value = tempArr.join('')
    } else if (inputValue == "RESET") {
      rstSc.value = "";
      tempArr = []
    }else if(inputValue == "="){
      if(rstSc.value.length > 0){
        let rstValue = eval(tempArr.join(""));
        tempArr = [...String(rstValue)]
        rstSc.value = rstValue
      }
    }else if(inputValue == "+" || inputValue == "-" || inputValue == "/"){
      inputValue = ` ${inputValue} `;
      tempArr.push(inputValue)
      rstSc.value = tempArr.join('');
    }else if(inputValue == "X"){
      tempArr.push(" * ")
      rstSc.value = tempArr.join('');
    }else {
      tempArr.push(inputValue)
      rstSc.value = tempArr.join('');
    }
  })
})

// addEventListener on window
window.addEventListener('keydown', (e)=>{
  let inputValue = e.key;
  // console.log(e)
  if(inputValue == 0 || inputValue == 1 || inputValue == 2 || inputValue == 3 || inputValue == 4 || inputValue == 5 || inputValue == 6 || inputValue == 7 || inputValue == 8 || inputValue == 9 || inputValue == "Backspace" || inputValue == "+" || inputValue == "-" || inputValue == "*" || inputValue == "/" || inputValue == "." || inputValue == "Delete" || inputValue == "Enter"){
    if (inputValue === "Backspace") {
      tempArr.pop()
      rstSc.value = tempArr.join('')
    } else if (inputValue == "Delete") {
      rstSc.value = "";
      tempArr = []
    }else if(inputValue == "Enter"){
      if(rstSc.value.length > 0){
        let rstValue = eval(tempArr.join(""));
        tempArr = [...String(rstValue)]
        rstSc.value = rstValue
      }
    }else if(inputValue == "+" || inputValue == "-" || inputValue == "*" || inputValue == "/"){
      inputValue = ` ${inputValue} `;
      tempArr.push(inputValue)
      rstSc.value = tempArr.join('');
    }else {
      tempArr.push(inputValue)
      rstSc.value = tempArr.join('');
    }
    // console.log(tempArr.length)
    if(tempArr.length > 18){
      rstSc.classList.add("above-18-digit")
    }else{
      rstSc.classList.remove("above-18-digit")
    }
    if(tempArr.length > 27){
      rstSc.classList.add("above-27-digit")
    }else{
      rstSc.classList.remove("above-27-digit")
    }
    if(tempArr.length >= 40){
      alert("Enough")
      return;
    }
  }
})