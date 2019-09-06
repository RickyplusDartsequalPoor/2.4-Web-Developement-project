const misc_div = document.getElementById("misc");
const food_div = document.getElementById("menu_food");
const tools_div = document.getElementById("tools");
const combat_div = document.getElementById("combat");


function main() {
  misc_div.addEventListener('click', ()=> swap("misc"));
  food_div.addEventListener('click', ()=> swap("food"));
  tools_div.addEventListener('click', ()=> swap("tools"));
  combat_div.addEventListener('click', ()=> swap("combat"));
}

function swap(menu_selection) {
  const menuSwap = document.getElementById('swap');

  if (menu_selection === "misc") {
    menuSwap.innerHTML = '<img src="img-misc/bamboo.png" alt="Minecraft Bamboo">';
  }

  if (menu_selection === "food") {
    // menuSwap.innerHTML = '<img src="img-food/apple.png" alt="Minecraft Apple">';
    const food = document.getElementById("food");
    menuSwap.HTMLElementObject.innerhtml = 'food';
  }

  if (menu_selection === "tools") {
    menuSwap.innerHTML = '<img src="img-tools/clock.png" alt="Minecraft Clock">';
    menuSwap.innerHTML = '<img src="img-tools/compass.png" alt="Minecraft Compass">';
  }

  if (menu_selection === "combat") {
    menuSwap.innerHTML = '<img src="img-combat/arrow.png" alt="Minecraft Arrow">';
  }
}

main()
