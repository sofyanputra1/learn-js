function searchAnimal(cari){
    const data = ['Butterfly','Elephant','Dog','Chicken','Fish','Lion']
    let hasil = ''

    if(cari === undefined){
        return data
    }

    for(let i = 0; i < data.length; i++){
        if(data[i] === cari){
            hasil = data[i]
        } else {
            hasil = 'Tidak Ditemukan'
        }
    }
    return hasil
}
console.log(searchAnimal('Lion'))
console.log(searchAnimal('Anjing'))
console.log(searchAnimal())