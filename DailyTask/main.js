let tasks = [];

//fungsi tambah tugas
function addTasks(task){
    tasks.push(task);
    console.log(`Tugas ${task} Berhasil di tambahkan`);
}
addTasks("Belajar js");
console.log(tasks);

//Fungsi Menampilkan Tugas
function ShowTask() {
    if(tasks.length == 0){
        console.log("Belom terdapat tugas saat ini");
    } else {
        for (let i = 0;  i < tasks.length; i++) {
            console.log(`${i + 1}. ${tasks[i]}`);
        }
    }
}

//Fungsi Hapus Tugas
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        let deletedTasks = tasks.splice(index, 1);
        console.log('Tugas ${deletedTasks} berhasil dihapus');
    } else {
        console.log("Indeks tugas tidak valis");
    }
}