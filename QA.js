var dropDownContentArray = document.querySelectorAll(".dropdown-content") //collects all the dropdown content which is waiting to be activated
var dropDownArray = document.querySelectorAll(".dropbtn") // collects all the drop buttons which open the dropdown content

function main() {
  // .length is used so that more questions can be added into the future
  for (var i=0; i<dropDownArray.length; i++) {
    let num = i;
    dropDownArray[num].addEventListener('click', ()=> dropDown(dropDownContentArray[num])); //adds event listeners that activate on click to the drop btns which activated the dropDown function and pass in the specific drop content that will be revealed
  }
}

function dropDown(dropDownContent) {
  dropDownContent.classList.toggle("show"); //makes the specific dropdown content visisble
}

main(); //activates the main function starting the code
