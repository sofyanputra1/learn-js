const Angkringan = {
    name: "Antotea",
    menu: {
        Peanapletea: 8,
        icetea: 5,
        spagheti: 15,
        magmacoffe: 10,
    },
    order(){
        this.menu.Peanapletea -= 1
        this.menu.icetea -= 3
        this.menu.spagheti -= 3
        return{
            "Sisa Stok Peanaple Tea : ": this.menu.Peanapletea,
            "Sisa Stok ice tea : ": this.menu.icetea,
            "Sisa Stok Spagheti : ": this.menu.spagheti,
            "Sisa Stok Magma Coffe : ": this.menu.magmacoffe,
        }
    }
}
const SisaStok = Angkringan.order()
console.log(SisaStok)