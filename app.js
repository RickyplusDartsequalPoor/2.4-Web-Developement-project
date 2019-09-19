const userMiscMenu = document.querySelector(".user-menu-misc");
const userFoodMenu = document.querySelector(".user-menu-food");
const userToolsMenu = document.querySelector(".user-menu-tools");
const userCombatMenu = document.querySelector(".user-menu-combat");

const siteMiscMenu = document.querySelector(".site-menu-misc");
const siteFoodMenu = document.querySelector(".site-menu-food");
const siteToolsMenu = document.querySelector(".site-menu-tools");
const siteCombatMenu = document.querySelector(".site-menu-combat");

const userMisc = document.querySelector(".user-misc");
const userFood = document.querySelector(".user-food");
const userTools = document.querySelector(".user-tools");
const userCombat = document.querySelector(".user-combat");

const siteMisc = document.querySelector(".site-misc");
const siteFood = document.querySelector(".site-food");
const siteTools = document.querySelector(".site-tools");
const siteCombat = document.querySelector(".site-combat");

var imageArray = document.querySelectorAll(".item-area img"); //adds all the images in .item-area on the page into an array so that event listeners can be added

const userSelection = document.getElementById("user-selection");
const userSelected = document.getElementById("user-selected");
const siteSelected = document.getElementById("site-selected");
const siteSelection = document.getElementById("site-selection");

let siteCost = 0; //Changes to show the cost of the items in the site selected box
let userCost = 0;
const userCostH2 = document.getElementById("user-cost");
const siteCostH2 = document.getElementById("site-cost");

const acceptButton = document.querySelector(".accept-button")

function main() {
  //Makes the menus clickable and when clicked call the swap function passing in the specific menu that was clicked
  userMiscMenu.addEventListener('click', ()=> swap("userMisc"));
  userFoodMenu.addEventListener('click', ()=> swap("userFood"));
  userToolsMenu.addEventListener('click', ()=> swap("userTools"));
  userCombatMenu.addEventListener('click', ()=> swap("userCombat"));
  siteMiscMenu.addEventListener('click', ()=> swap("siteMisc"));
  siteFoodMenu.addEventListener('click', ()=> swap("siteFood"));
  siteToolsMenu.addEventListener('click', ()=> swap("siteTools"));
  siteCombatMenu.addEventListener('click', ()=> swap("siteCombat"));

  //Loops through all the images on the page making them clickable
  for (var i=0; i<imageArray.length; i++) {
    let num = i;
    let imageParent = imageArray[num].parentElement; //The specific parent is found so that it later can be returned back to this parent div in the html when deselected
    imageArray[num].addEventListener('click', ()=> move(imageArray[num], imageParent)); //On click activates the move function and passes in the specific image and its original parent div
  }

  //When accept button is clicked activates accept function
  acceptButton.addEventListener('click', ()=> accept());
}

function move(image, imageParent) {
  // These find which column this image is located in so that when clicked it can be sent to the correct menu
  var idUserSelection = userSelection.contains(image);
  var idSiteSelection = siteSelection.contains(image);
  var idUserSelected = userSelected.contains(image);
  var idSiteSelected = siteSelected.contains(image);

  if (idUserSelection === true) {
    let menu = "plus user"; //Indicates to the update cost function to plus or minus and which value should be increased
    userSelected.appendChild(image); //Appends the image to the above column
    updateCostTotal(image, menu); //Calls the update cost total function passing in the image (NOT USED would be if specific costs are added)
  }

  if (idSiteSelection === true) {
    let menu = "plus site";
    siteSelected.appendChild(image);
    updateCostTotal(image, menu);
  }

  if (idUserSelected === true) {
    let menu = "minus user";
    imageParent.appendChild(image); //This is where the image is sent back into its original parent (menu)
    updateCostTotal(image, menu);
  }

  if (idSiteSelected === true) {
    let menu = "minus site";
    imageParent.appendChild(image);
    updateCostTotal(image, menu);
  }
}

function swap(menuSelection) {
  //for this specific menu content it is made visible while also making the other menus content is made invisible while also changing its border and background colour to indicate that its active while reseting the other menus
  if (menuSelection === "userMisc") {
    userMisc.style.display = 'grid';
    userFood.style.display = 'none';
    userTools.style.display = 'none';
    userCombat.style.display = 'none';

    userMiscMenu.style.backgroundColor = '#388E3C';
    userMiscMenu.style.borderBottom = 'none';

    userFoodMenu.style.backgroundColor = '#4CAF50';
    userFoodMenu.style.borderBottom = '2px solid black';

    userToolsMenu.style.backgroundColor = '#4CAF50';
    userToolsMenu.style.borderBottom = '2px solid black';

    userCombatMenu.style.backgroundColor = '#4CAF50';
    userCombatMenu.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "userFood") {
    userMisc.style.display = 'none';
    userFood.style.display = 'grid';
    userTools.style.display = 'none';
    userCombat.style.display = 'none';

    userMiscMenu.style.backgroundColor = '#4CAF50';
    userMiscMenu.style.borderBottom = '2px solid black';

    userFoodMenu.style.backgroundColor = '#388E3C';
    userFoodMenu.style.borderBottom = 'none';

    userToolsMenu.style.backgroundColor = '#4CAF50';
    userToolsMenu.style.borderBottom = '2px solid black';

    userCombatMenu.style.backgroundColor = '#4CAF50';
    userCombatMenu.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "userTools") {
    userMisc.style.display = 'none';
    userFood.style.display = 'none';
    userTools.style.display = 'grid';
    userCombat.style.display = 'none';

    userMiscMenu.style.backgroundColor = '#4CAF50';
    userMiscMenu.style.borderBottom = '2px solid black';

    userFoodMenu.style.backgroundColor = '#4CAF50';
    userFoodMenu.style.borderBottom = '2px solid black';

    userToolsMenu.style.backgroundColor = '#388E3C';
    userToolsMenu.style.borderBottom = 'none';

    userCombatMenu.style.backgroundColor = '#4CAF50';
    userCombatMenu.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "userCombat") {
    userMisc.style.display = 'none';
    userFood.style.display = 'none';
    userTools.style.display = 'none';
    userCombat.style.display = 'grid';

    userMiscMenu.style.backgroundColor = '#4CAF50';
    userMiscMenu.style.borderBottom = '2px solid black';

    userFoodMenu.style.backgroundColor = '#4CAF50';
    userFoodMenu.style.borderBottom = '2px solid black';

    userToolsMenu.style.backgroundColor = '#4CAF50';
    userToolsMenu.style.borderBottom = '2px solid black';

    userCombatMenu.style.backgroundColor = '#388E3C';
    userCombatMenu.style.borderBottom = 'none';
  }

  if (menuSelection === "siteMisc") {
    siteMisc.style.display = 'grid';
    siteFood.style.display = 'none';
    siteTools.style.display = 'none';
    siteCombat.style.display = 'none';

    siteMiscMenu.style.backgroundColor = '#388E3C';
    siteMiscMenu.style.borderBottom = 'none';

    siteFoodMenu.style.backgroundColor = '#4CAF50';
    siteFoodMenu.style.borderBottom = '2px solid black';

    siteToolsMenu.style.backgroundColor = '#4CAF50';
    siteToolsMenu.style.borderBottom = '2px solid black';

    siteCombatMenu.style.backgroundColor = '#4CAF50';
    siteCombatMenu.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "siteFood") {
    siteMisc.style.display = 'none';
    siteFood.style.display = 'grid';
    siteTools.style.display = 'none';
    siteCombat.style.display = 'none';

    siteMiscMenu.style.backgroundColor = '#4CAF50';
    siteMiscMenu.style.borderBottom = '2px solid black';

    siteFoodMenu.style.backgroundColor = '#388E3C';
    siteFoodMenu.style.borderBottom = 'none';

    siteToolsMenu.style.backgroundColor = '#4CAF50';
    siteToolsMenu.style.borderBottom = '2px solid black';

    siteCombatMenu.style.backgroundColor = '#4CAF50';
    siteCombatMenu.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "siteTools") {
    siteMisc.style.display = 'none';
    siteFood.style.display = 'none';
    siteTools.style.display = 'grid';
    siteCombat.style.display = 'none';

    siteMiscMenu.style.backgroundColor = '#4CAF50';
    siteMiscMenu.style.borderBottom = '2px solid black';

    siteFoodMenu.style.backgroundColor = '#4CAF50';
    siteFoodMenu.style.borderBottom = '2px solid black';

    siteToolsMenu.style.backgroundColor = '#388E3C';
    siteToolsMenu.style.borderBottom = 'none';

    siteCombatMenu.style.backgroundColor = '#4CAF50';
    siteCombatMenu.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "siteCombat") {
    siteMisc.style.display = 'none';
    siteFood.style.display = 'none';
    siteTools.style.display = 'none';
    siteCombat.style.display = 'grid';

    siteMiscMenu.style.backgroundColor = '#4CAF50';
    siteMiscMenu.style.borderBottom = '2px solid black';

    siteFoodMenu.style.backgroundColor = '#4CAF50';
    siteFoodMenu.style.borderBottom = '2px solid black';

    siteToolsMenu.style.backgroundColor = '#4CAF50';
    siteToolsMenu.style.borderBottom = '2px solid black';

    siteCombatMenu.style.backgroundColor = '#388E3C';
    siteCombatMenu.style.borderBottom = 'none';
  }
}

function updateCostTotal(image, menu) {
  if (menu === "plus user") {
    userCost += 1; //increases the value of the user cost
    userCostH2.innerHTML = userCost; //updates the value in the html to the new calculated value
  }

  if (menu === "plus site") {
    siteCost += 1;
    siteCostH2.innerHTML = siteCost;
  }

  if (menu === "minus user") {
    userCost -= 1; //Lowers the value of the user cost
    userCostH2.innerHTML = userCost;
  }

  if (menu === "minus site") {
    siteCost -= 1;
    siteCostH2.innerHTML = siteCost;
  }

  if (siteCost === userCost) {
    acceptButton.style.backgroundColor = '#4CAF50'; //Changes the colour of the accept button to green to indicate that the trade can be compleated
  }

  if (siteCost === 0 && userCost === 0) {
    acceptButton.style.backgroundColor = '#D32F2F'; //Changes the colour of the accept button back to red as the trade can't be compleated as no items are selected
  }

  if (siteCost !== userCost) {
    acceptButton.style.backgroundColor = '#D32F2F';
  }
}

function accept() {
  // when site cost and user cost don't equal run this code
  if (siteCost !== userCost) {
    alert("The items selected are not of equal value!"); //Indictaes to the user that the items they have selected are not equal
  }

  // If both the site cost and user cost equal 0 then this code will run
  if (siteCost === 0 && userCost === 0) {
    alert("You haven't selected any items!"); //Alerts the user to the fact they haven't selected anything
  }

  if (siteCost === userCost && siteCost > 0) {
    alert("Successful Trade");
    location.reload(); //Reload page to reset page so that the user can trade again
  }
}

main();
