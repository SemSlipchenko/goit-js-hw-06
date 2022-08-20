const numberOfCategories = document.querySelectorAll('#categories > .item');
const categorieName = document.querySelectorAll('h2');
const numbersOfCategorieItems = document.querySelectorAll('.item ul');
const childrenElementsOfUl = numbersOfCategorieItems.children;

console.log(numbersOfCategorieItems.children);

const printCategories = () => {
    
    console.log('Number of categories:', numberOfCategories.length);
    
    for (const item of categorieName) { 
        console.log('Category:',item.textContent);
    };
};

printCategories();