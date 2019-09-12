
const miscDiv = document.getElementById("menu-misc");
const foodDiv = document.getElementById("menu-food");
const toolsDiv = document.getElementById("menu-tools");
const combatDiv = document.getElementById("menu-combat");

// const miscDiv1 = document.getElementById("menu-misc1");
// const foodDiv1 = document.getElementById("menu-food1");
// const toolsDiv1 = document.getElementById("menu-tools1");
// const combatDiv1 = document.getElementById("menu-combat1");

const misc = document.getElementById("misc");
const food = document.getElementById("food");
const tools = document.getElementById("tools");
const combat = document.getElementById("combat");

// const misc1 = document.getElementById("misc1");
// const food1 = document.getElementById("food1");
// const tools1 = document.getElementById("tools1");
// const combat1 = document.getElementById("combat1");


const userSelection = document.getElementById("user-selection");
const userSelected = document.getElementById("user-selected");
const siteSelected = document.getElementById("site-selected");
const siteSelection = document.getElementById("site-selection");

function main() {
  miscDiv.addEventListener('click', ()=> swap("misc"));
  foodDiv.addEventListener('click', ()=> swap("food"));
  toolsDiv.addEventListener('click', ()=> swap("tools"));
  combatDiv.addEventListener('click', ()=> swap("combat"));

  // miscDiv1.addEventListener('click', ()=> swap("misc1"));
  // foodDiv1.addEventListener('click', ()=> swap("food1"));
  // toolsDiv1.addEventListener('click', ()=> swap("tools1"));
  // combatDiv1.addEventListener('click', ()=> swap("combat1"));
  //

  var imageArray = document.querySelectorAll(".item-area img")

  for (var i=0; i<imageArray.length; i++) {
    let num = i
    let idDivMisc = misc.contains(imageArray[num]);
    let idDivFood = food.contains(imageArray[num]);
    let idDivTools = tools.contains(imageArray[num]);
    let idDivCombat = combat.contains(imageArray[num]);
    imageArray[i].addEventListener('click', ()=> move(imageArray[num], idDivMisc, idDivFood, idDivTools, idDivCombat));
  }
}

function move(image, idDivMisc, idDivFood, idDivTools, idDivCombat) {
  var idUserSelection = userSelection.contains(image);
  var idSiteSelection = siteSelection.contains(image);
  var idUserSelected = userSelected.contains(image);
  var idSiteSelected = siteSelected.contains(image);

  if (idUserSelection === true) {
    userSelected.appendChild(image);
  }

  if (idSiteSelection === true) {
    siteSelected.appendChild(image);
  }

  if (idUserSelected === true) {
    if (idDivMisc === true) {
      misc.appendChild(image);
    }
    if (idDivFood === true) {
      food.appendChild(image);
    }
    if (idDivTools === true) {
      tools.appendChild(image);
    }
    if (idDivCombat === true) {
      combat.appendChild(image);
    }
  }

  if (idSiteSelected === true) {
    if (idDivMisc === true) {
      misc.appendChild(image);
    }
    if (idDivFood === true) {
      food.appendChild(image);
    }
    if (idDivTools === true) {
      tools.appendChild(image);
    }
    if (idDivCombat === true) {
      combat.appendChild(image);
    }
  }
}

function swap(menuSelection) {
  if (menuSelection === "misc") {
    misc.style.display = 'initial';
    food.style.display = 'none';
    tools.style.display = 'none';
    combat.style.display = 'none';

    miscDiv.style.backgroundColor = '#388E3C';
    miscDiv.style.borderBottom = 'none';

    foodDiv.style.backgroundColor = '#4CAF50';
    foodDiv.style.borderBottom = '2px solid black';

    toolsDiv.style.backgroundColor = '#4CAF50';
    toolsDiv.style.borderBottom = '2px solid black';

    combatDiv.style.backgroundColor = '#4CAF50';
    combatDiv.style.borderBottom = '2px solid black';

  }

  if (menuSelection === "food") {
    misc.style.display = 'none';
    food.style.display = 'initial';
    tools.style.display = 'none';
    combat.style.display = 'none';

    miscDiv.style.backgroundColor = '#4CAF50';
    miscDiv.style.borderBottom = '2px solid black';

    foodDiv.style.backgroundColor = '#388E3C';
    foodDiv.style.borderBottom = 'none';

    toolsDiv.style.backgroundColor = '#4CAF50';
    toolsDiv.style.borderBottom = '2px solid black';

    combatDiv.style.backgroundColor = '#4CAF50';
    combatDiv.style.borderBottom = '2px solid black';

  }

  if (menuSelection === "tools") {
    misc.style.display = 'none';
    food.style.display = 'none';
    tools.style.display = 'initial';
    combat.style.display = 'none';

    miscDiv.style.backgroundColor = '#4CAF50';
    miscDiv.style.borderBottom = '2px solid black';

    foodDiv.style.backgroundColor = '#4CAF50';
    foodDiv.style.borderBottom = '2px solid black';

    toolsDiv.style.backgroundColor = '#388E3C';
    toolsDiv.style.borderBottom = 'none';

    combatDiv.style.backgroundColor = '#4CAF50';
    combatDiv.style.borderBottom = '2px solid black';
  }

  if (menuSelection === "combat") {
    misc.style.display = 'none';
    food.style.display = 'none';
    tools.style.display = 'none';
    combat.style.display = 'initial';

    miscDiv.style.backgroundColor = '#4CAF50';
    miscDiv.style.borderBottom = '2px solid black';

    foodDiv.style.backgroundColor = '#4CAF50';
    foodDiv.style.borderBottom = '2px solid black';

    toolsDiv.style.backgroundColor = '#4CAF50';
    toolsDiv.style.borderBottom = '2px solid black';

    combatDiv.style.backgroundColor = '#388E3C';
    combatDiv.style.borderBottom = 'none';
  }

  // if (menuSelection === "misc1") {
  //   misc1.style.display = 'initial';
  //   food1.style.display = 'none';
  //   tools1.style.display = 'none';
  //   combat1.style.display = 'none';
  //
  //   miscDiv1.style.backgroundColor = '#388E3C';
  //   miscDiv1.style.borderBottom = 'none';
  //
  //   foodDiv1.style.backgroundColor = '#4CAF50';
  //   foodDiv1.style.borderBottom = '2px solid black';
  //
  //   toolsDiv1.style.backgroundColor = '#4CAF50';
  //   toolsDiv1.style.borderBottom = '2px solid black';
  //
  //   combatDiv.style.backgroundColor = '#4CAF50';
  //   combatDiv.style.borderBottom = '2px solid black';
  //
  // }
  //
  // if (menuSelection === "food1") {
  //   misc1.style.display = 'none';
  //   food1.style.display = 'initial';
  //   tools1.style.display = 'none';
  //   combat1.style.display = 'none';
  //
  //   miscDiv1.style.backgroundColor = '#4CAF50';
  //   miscDiv1.style.borderBottom = '2px solid black';
  //
  //   foodDiv1.style.backgroundColor = '#388E3C';
  //   foodDiv1.style.borderBottom = 'none';
  //
  //   toolsDiv1.style.backgroundColor = '#4CAF50';
  //   toolsDiv1.style.borderBottom = '2px solid black';
  //
  //   combatDiv1.style.backgroundColor = '#4CAF50';
  //   combatDiv1.style.borderBottom = '2px solid black';
  //
  // }
  //
  // if (menuSelection === "tools1") {
  //   misc1.style.display = 'none';
  //   food1.style.display = 'none';
  //   tools1.style.display = 'initial';
  //   combat1.style.display = 'none';
  //
  //   miscDiv1.style.backgroundColor = '#4CAF50';
  //   miscDiv1.style.borderBottom = '2px solid black';
  //
  //   foodDiv1.style.backgroundColor = '#4CAF50';
  //   foodDiv1.style.borderBottom = '2px solid black';
  //
  //   toolsDiv1.style.backgroundColor = '#388E3C';
  //   toolsDiv1.style.borderBottom = 'none';
  //
  //   combatDiv1.style.backgroundColor = '#4CAF50';
  //   combatDiv1.style.borderBottom = '2px solid black';
  // }
  //
  // if (menuSelection === "combat1") {
  //   misc1.style.display = 'none';
  //   food1.style.display = 'none';
  //   tools1.style.display = 'none';
  //   combat1.style.display = 'initial';
  //
  //   miscDiv1.style.backgroundColor = '#4CAF50';
  //   miscDiv1.style.borderBottom = '2px solid black';
  //
  //   foodDiv1.style.backgroundColor = '#4CAF50';
  //   foodDiv1.style.borderBottom = '2px solid black';
  //
  //   toolsDiv1.style.backgroundColor = '#4CAF50';
  //   toolsDiv1.style.borderBottom = '2px solid black';
  //
  //   combatDiv1.style.backgroundColor = '#388E3C';
  //   combatDiv1.style.borderBottom = 'none';
  // }
}


main()
