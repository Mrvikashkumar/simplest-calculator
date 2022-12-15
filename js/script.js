let rstSc = document.getElementById('rst');
let btns = document.querySelectorAll('.btn');
let tempArr = []
btns.forEach(element => {
  element.addEventListener('click', (e)=>{
    let inputValue = e.target.innerText;
    if(inputValue === "DEL"){
      console.log("hii")
      tempArr.pop()
      rstSc.value = tempArr.join('')
    }else if(inputValue == "RESET"){
      rstSc.value = "";
      tempArr = []
    }else{
      tempArr.push(inputValue)
      rstSc.value = tempArr.join('');
    }

  })
})