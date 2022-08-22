const printCategories = () => {
    const categoryItem = document.querySelectorAll('.item');
    console.log('Number of categories:', categoryItem.length);
    
    categoryItem.forEach(category => {
        console.log('Category:', category.firstElementChild.textContent);
        console.log('Elements:', category.lastElementChild.children.length);
    });
};

printCategories();