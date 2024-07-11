/**
 * Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
 */

function diagonalDifference(matrix){
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let n = matrix.length;
    console.log(n)

    for (let i = 0; i < n; i++){
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }

    console.log(`Diagonal pertama: ${primaryDiagonalSum}`);
    console.log(`Diagonal kedua: ${secondaryDiagonalSum}`);
    console.log(`Pengurangan diagonal: ${primaryDiagonalSum} - ${secondaryDiagonalSum}`);

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(`Hasil = ${diagonalDifference(matrix)}`);