// ubah ke local scope
function MyAnimal(param){
    const hewan = "Hewan Peliharaan saya : " + param
    return hewan
}
console.log(MyAnimal("Kucing"))

//ubah ke global scope
const age = 17

function MyAge(){
    return age
}
console.log(MyAge())
//ubah ke block scope
function orderCheck(param){
    let order
    if(param > 0){
        order = "Pesanan Dalam perjalanan"
        console.log(order)
    } else {
        order = "Pesanan tidak ada"
        console.log(order)
    }
}
orderCheck(1)