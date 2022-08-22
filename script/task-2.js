const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elemUl = document.querySelector('#ingredients');

const printElements = ingredients.map(ingredient => {
    const el = document.createElement('li');
    el.classList.add('.item');
    el.textContent = ingredient;
    return el;
});

elemUl.prepend(...printElements);