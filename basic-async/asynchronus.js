function f1() {
    setTimeout(function(){
    console.log("Aku asynchronous!")
    }, 3000)
}
function f2() {
    setTimeout(function(){
    console.log("Panggil aku...")
    }, 3000)
}
    function f3() {
    console.log("Aku ketiga...")
    }