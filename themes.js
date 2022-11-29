let yoda = document.querySelector('.yoda')
let trooper = document.querySelector('.trooper')
let gruvbox = document.querySelector('.gruvbox')
let def = document.querySelector('.default')

const theme = localStorage.getItem('currentTheme');
updateUI();

function updateUI(){
  if (theme == "yoda") {
    document.body.style.setProperty("--bg", "#2B2A33")
    document.body.style.setProperty("--accent", "#4a5334")
    document.body.style.setProperty("--second-accent", "#573e37")
    document.getElementsByClassName("image")[0].src = "pictures/yoda.jpg";
  }
  else if (theme == "trooper") {
    document.body.style.setProperty("--bg", "#2B2A33")
    document.body.style.setProperty("--accent", "white")
    document.body.style.setProperty("--second-accent", "black")
    document.getElementsByClassName("image")[0].src = "pictures/trooper.jpg";
  }
  else if (theme == "gruvbox") {
    document.body.style.setProperty("--bg", "#2B2A33")
    document.body.style.setProperty("--accent", "#628912")
    document.body.style.setProperty("--second-accent", "#cb8c18")
    document.getElementsByClassName("image")[0].src = "pictures/gruvbox.jpg";
  }
}

def.addEventListener('click' ,()=>{
  localStorage.setItem("currentTheme" , "")
});

yoda.addEventListener('click',()=>{
  localStorage.setItem("currentTheme" , "yoda")
  updateUI();
});

trooper.addEventListener('click',()=>{
  localStorage.setItem("currentTheme" , "trooper")
  updateUI();
});

gruvbox.addEventListener('click',()=>{
  localStorage.setItem("currentTheme" , "gruvbox")
  updateUI();
});
