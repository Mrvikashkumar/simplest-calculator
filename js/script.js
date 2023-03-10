let container = document.querySelector('.container');
let rstSc = document.getElementById('rst');
let btns = document.querySelectorAll('.btn');
let themeToggleBtn = document.querySelectorAll('.theme input')
let tempArr = []
btns.forEach(element => {
  element.addEventListener('click', (e) => {
    let inputValue = e.currentTarget.dataset.btnValue;
    calcFunctionality(inputValue);
  })
})

// addEventListener on window
window.addEventListener('keydown', (e) => {
  let inputValue = e.key;
  calcFunctionality(inputValue);
})

// calculator functionality
function calcFunctionality(value) {
  let keyArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Backspace", "+", "-", "*", "/", ".", "Delete", "Enter"];
  for(let key of keyArr){
    if (value == key) {
      let audio = new Audio("audio/click-sound.mp3");
      audio.play();
      if (value === "Backspace") {
        tempArr.pop()
        rstSc.value = tempArr.join('')
      } else if (value == "Delete") {
        rstSc.value = "";
        tempArr = []
      } else if (value == "Enter") {
        if (rstSc.value.length > 0) {
          let rstValue = eval(tempArr.join(""));
          tempArr = [...String(rstValue)]
          rstSc.value = rstValue
        }
      } else if (value == "+" || value == "-" || value == "*" || value == "/") {
        value = ` ${value} `;
        tempArr.push(value)
        rstSc.value = tempArr.join('');
      } else {
        tempArr.push(value)
        rstSc.value = tempArr.join('');
      }
      if (tempArr.length > 18) {
        rstSc.classList.add("above-18-digit")
      } else {
        rstSc.classList.remove("above-18-digit")
      }
      if (tempArr.length > 27) {
        rstSc.classList.add("above-27-digit")
      } else {
        rstSc.classList.remove("above-27-digit")
      }
      if (tempArr.length >= 40) {
        alert("Enough")
        return;
      }
    }
  }
}

// theme functionality
// default theme
window.addEventListener('DOMContentLoaded', ()=>{
  container.classList.add('theme-1')
})
// manually theme toggle
themeToggleBtn.forEach(element => {
  element.addEventListener('click', (e) => {
    let idValue = e.target.attributes.id.value;
    if(idValue == "blue-theme"){
      container.classList.remove("theme-2")
      container.classList.remove("theme-3")
      container.classList.add('theme-1')
    }else if(idValue == "light-theme"){
      container.classList.remove("theme-1")
      container.classList.remove("theme-3")
      container.classList.add('theme-2')
    }else{
      container.classList.remove("theme-1")
      container.classList.remove("theme-2")
      container.classList.add('theme-3')
    }
  })
})