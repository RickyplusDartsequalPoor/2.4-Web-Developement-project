// var miscMenuArray = document.querySelectorAll(".menu-misc");
// var foodMenuArray = document.querySelectorAll(".menu-food");
// var toolsMenuArray = document.querySelectorAll(".menu-tools");
// var combatMenuArray = document.querySelectorAll(".menu-combat");

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

var imageArray = document.querySelectorAll(".item-area img");

const userSelection = document.getElementById("user-selection");
const userSelected = document.getElementById("user-selected");
const siteSelected = document.getElementById("site-selected");
const siteSelection = document.getElementById("site-selection");

let siteCost = 0;
let userCost = 0;
const userCostH2 = document.getElementById("user-cost");
const siteCostH2 = document.getElementById("site-cost");

const acceptButton = document.querySelector(".accept-button")

function main() {
  userMiscMenu.addEventListener('click', ()=> swap("userMisc"));
  userFoodMenu.addEventListener('click', ()=> swap("userFood"));
  userToolsMenu.addEventListener('click', ()=> swap("userTools"));
  userCombatMenu.addEventListener('click', ()=> swap("userCombat"));
  siteMiscMenu.addEventListener('click', ()=> swap("siteMisc"));
  siteFoodMenu.addEventListener('click', ()=> swap("siteFood"));
  siteToolsMenu.addEventListener('click', ()=> swap("siteTools"));
  siteCombatMenu.addEventListener('click', ()=> swap("siteCombat"));

  for (var i=0; i<imageArray.length; i++) {
    let num = i;
    let imageParent = imageArray[num].parentElement;
    imageArray[num].addEventListener('click', ()=> move(imageArray[num], imageParent));
  }
  acceptButton.addEventListener('click', ()=> accept());
}

function move(image, imageParent) {
  var idUserSelection = userSelection.contains(image);
  var idSiteSelection = siteSelection.contains(image);
  var idUserSelected = userSelected.contains(image);
  var idSiteSelected = siteSelected.contains(image);

  if (idUserSelection === true) {
    let menu = "plus user";
    userSelected.appendChild(image);
    updateCostTotal(image, menu);
  }

  if (idSiteSelection === true) {
    let menu = "plus site";
    siteSelected.appendChild(image);
    updateCostTotal(image, menu);
  }

  if (idUserSelected === true) {
    let menu = "minus user";
    imageParent.appendChild(image);
    updateCostTotal(image, menu);
  }

  if (idSiteSelected === true) {
    let menu = "minus site";
    imageParent.appendChild(image);
    updateCostTotal(image, menu);
  }
}

function swap(menuSelection) {
  if (menuSelection === "userMisc") {
    userMisc.style.display = 'initial';
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
    userFood.style.display = 'initial';
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
    userTools.style.display = 'initial';
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
    userCombat.style.display = 'initial';

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
    siteMisc.style.display = 'initial';
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
    siteFood.style.display = 'initial';
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
    siteTools.style.display = 'initial';
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
    siteCombat.style.display = 'initial';

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
    userCost += 1;
    userCostH2.innerHTML = userCost;
  }

  if (menu === "plus site") {
    siteCost += 1;
    siteCostH2.innerHTML = siteCost;
  }

  if (menu === "minus user") {
    userCost -= 1;
    userCostH2.innerHTML = userCost;
  }

  if (menu === "minus site") {
    siteCost -= 1;
    siteCostH2.innerHTML = siteCost;
  }

  if (siteCost === userCost) {
    acceptButton.style.backgroundColor = '#4CAF50';
  }

  if (siteCost === 0 && userCost === 0) {
    acceptButton.style.backgroundColor = '#D32F2F';
  }

  if (siteCost !== userCost) {
    acceptButton.style.backgroundColor = '#D32F2F';
  }
}
// function accept(siteSelectedImageArray, userSelectedImageArray, imageUserParentArray, imageSiteParentArray) {
function accept() {
  console.log("success");
  if (siteCost !== userCost) {
    alert("The items selected are not of equal value!");
  }

  if (siteCost === 0 && userCost === 0) {
    alert("You haven't selected any items!");
  }

  if (siteCost === userCost) {
    alert("Successful Trade")
    location.reload()
  }
}

main();
