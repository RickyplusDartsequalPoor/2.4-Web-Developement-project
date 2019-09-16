var dropDownContentArray = document.querySelectorAll(".dropdown-content")
var dropDownArray = document.querySelectorAll(".dropbtn")

function main() {
  for (var i=0; i<dropDownArray.length; i++) {
    let num = i;
    dropDownArray[num].addEventListener('click', ()=> dropDown(dropDownContentArray[num]));
  }
}

function dropDown(dropDownContent) {
  console.log(dropDownContent);
  dropDownContent.classList.toggle("show");
}

main();
