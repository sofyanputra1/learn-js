let animal = ["Bebek", "Ayam", "Mentok", "Harimau"];

function deleteElement(index, totalElement){
return animal.splice(index, totalElement);
}
deleteElement(1, 1);
console.log(animal);