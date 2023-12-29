let shoppingList = ["hp","laptop","macbook"];
// fungsi tambah item
const addItem = (itemName) => {
shoppingList.push(itemName);
console.log(`${itemName} telah ditambahkan`);
};

// fungsi untuk hapus item
const removeItem = (item) => {
    const removeIndex = shoppingList.indexOf(item);
    shoppingList.splice(removeIndex,1);
    console.log(`${item} berhasil dihapus`);
};


//function tampilkan item
const showItem = () => {
    shoppingList.forEach((item, index) =>{
        console.log(`${index + 1}. ${item}`)
    })
}
    addItem("makan")
    showItem()
    deleteItem("makan")
    showItem()