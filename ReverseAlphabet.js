// Terdapat string "NEGIE1", 
// silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseAlphabet(inputString) {
    // Pisahkan angka di akhir string
    let numberPart = inputString.match(/\d+$/)[0];

    // console.log(numberPart)
    // Ambil bagian string tanpa angka di akhir
    let alphaPart = inputString.replace(/\d+$/, '');
    // console.log(alphaPart)

    // Balik urutan huruf dalam bagian alfabet
    let reversedAlpha = alphaPart.split('').reverse().join('');
    // console.log(reversedAlpha)

    // Gabungkan kembali dengan angka di akhir
    let result = reversedAlpha + numberPart;
    
    return result;
}

// Contoh penggunaan
let inputString = "NEGIE1";
let hasil = reverseAlphabet(inputString);
console.log(hasil); // Output: "EIGEN1"
