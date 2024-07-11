// // Terdapat dua buah array yaitu array INPUT dan array QUERY, 
// // silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

// INPUT = ['xc', 'dz', 'bbb', 'dz']  
// QUERY = ['bbb', 'ac', 'dz']  

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

function countOccurences(input, query){
    return query.map(q => input.filter(item => item === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const OUTPUT = countOccurences(INPUT, QUERY);
console.log(OUTPUT);