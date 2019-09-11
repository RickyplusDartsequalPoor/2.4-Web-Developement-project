
const miscDiv = document.getElementById("menu-misc");
const foodDiv = document.getElementById("menu-food");
const toolsDiv = document.getElementById("menu-tools");
const combatDiv = document.getElementById("menu-combat");

const site_selected = document.getElementById("site-selected");
const site_selection = document.getElementById("site-selection");

var imageArray = document.querySelectorAll(".item-area img")

function main() {
  miscDiv.addEventListener('click', ()=> swap("misc"));
  foodDiv.addEventListener('click', ()=> swap("food"));
  toolsDiv.addEventListener('click', ()=> swap("tools"));
  combatDiv.addEventListener('click', ()=> swap("combat"));

  for (var i=0; i<imageArray.length; i++) {
    let num = i
    imageArray[i].addEventListener('click', ()=> move(imageArray[num]));
  }
}

function move(image) {
  console.log(image)
  console.log("success");
  site_selected.appendChild(image);
}

function swap(menuSelection) {
  const misc = document.getElementById("misc");
  const food = document.getElementById("food");
  const tools = document.getElementById("tools");
  const combat = document.getElementById("combat");

  if (menuSelection === "misc") {
    misc.style.display = 'initial';
    food.style.display = 'none';
    tools.style.display = 'none';
    combat.style.display = 'none';

    miscDiv.style.backgroundColor = '#388E3C';
    music_disc_stradiv.style.borderBottom = 'none';

    // There must be a more efficent way to reset
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
}


main()
