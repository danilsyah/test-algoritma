// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, 
// jika ada kata dengan panjang yang sama silahkan ambil salah satu
// Contoh:
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// longest(sentence) 
// mengerjakan: 11 character

function longest(sentence){
    // memecah kalimat menjadi array kata-kata
    const words = sentence.split(" ");

    // inisialisasi variabel untuk menyimpan kata terpanjang
    let longestWord = "";

    // loop melalui setiap kata dalam array
    words.forEach(word => {
        // memeriksa apakah panjang kata saat ini lebih besar dari panjang kata terpanjang yang disimpan pada variabel longesWord
        if(word.length > longestWord.length) {
            longestWord = word; // mengganti kata terpanjang jika ditemukan kata yang lebih panjang
        }
    });

    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence));
