console.log(process.argv);

const number = parseInt(process.argv[2]);
let multiple = [];

for(let i = 3; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
        multiple.push(i);
    }
}

console.log(multiple);