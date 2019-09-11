
const misc_div = document.getElementById("menu_misc");
const food_div = document.getElementById("menu_food");
const tools_div = document.getElementById("menu_tools");
const combat_div = document.getElementById("menu_combat");

const site_selected = document.getElementById("site-selected");
const site_selection = document.getElementById("site-selection");


function main() {
  misc_div.addEventListener('click', ()=> swap("misc"));
  food_div.addEventListener('click', ()=> swap("food"));
  tools_div.addEventListener('click', ()=> swap("tools"));
  combat_div.addEventListener('click', ()=> swap("combat"));


}

function swap(menu_selection) {
  const misc = document.getElementById("misc");
  const food = document.getElementById("food");
  const tools = document.getElementById("tools");
  const combat = document.getElementById("combat");

  if (menu_selection === "misc") {
    misc.style.display = 'initial';
    food.style.display = 'none';
    tools.style.display = 'none';
    combat.style.display = 'none';

    misc_div.style.backgroundColor = '#388E3C';
    misc_div.style.borderBottom = 'none';

    // There must be a more efficent way to reset
    food_div.style.backgroundColor = '#4CAF50';
    food_div.style.borderBottom = '2px solid black';

    tools_div.style.backgroundColor = '#4CAF50';
    tools_div.style.borderBottom = '2px solid black';

    combat_div.style.backgroundColor = '#4CAF50';
    combat_div.style.borderBottom = '2px solid black';

  }

  if (menu_selection === "food") {
    misc.style.display = 'none';
    food.style.display = 'initial';
    tools.style.display = 'none';
    combat.style.display = 'none';

    misc_div.style.backgroundColor = '#4CAF50';
    misc_div.style.borderBottom = '2px solid black';

    food_div.style.backgroundColor = '#388E3C';
    food_div.style.borderBottom = 'none';

    tools_div.style.backgroundColor = '#4CAF50';
    tools_div.style.borderBottom = '2px solid black';

    combat_div.style.backgroundColor = '#4CAF50';
    combat_div.style.borderBottom = '2px solid black';

  }

  if (menu_selection === "tools") {
    misc.style.display = 'none';
    food.style.display = 'none';
    tools.style.display = 'initial';
    combat.style.display = 'none';

    misc_div.style.backgroundColor = '#4CAF50';
    misc_div.style.borderBottom = '2px solid black';

    food_div.style.backgroundColor = '#4CAF50';
    food_div.style.borderBottom = '2px solid black';

    tools_div.style.backgroundColor = '#388E3C';
    tools_div.style.borderBottom = 'none';

    combat_div.style.backgroundColor = '#4CAF50';
    combat_div.style.borderBottom = '2px solid black';
  }

  if (menu_selection === "combat") {
    misc.style.display = 'none';
    food.style.display = 'none';
    tools.style.display = 'none';
    combat.style.display = 'initial';

    misc_div.style.backgroundColor = '#4CAF50';
    misc_div.style.borderBottom = '2px solid black';

    food_div.style.backgroundColor = '#4CAF50';
    food_div.style.borderBottom = '2px solid black';

    tools_div.style.backgroundColor = '#4CAF50';
    tools_div.style.borderBottom = '2px solid black';

    combat_div.style.backgroundColor = '#388E3C';
    combat_div.style.borderBottom = 'none';
  }
}


main()
