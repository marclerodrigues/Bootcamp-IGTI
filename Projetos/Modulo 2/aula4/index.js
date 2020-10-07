import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

questions();

function questions(){
    rl.question("Digite um número: ", number =>{
        if(parseInt(number) === -1){
            rl.close();
        }else{
            const multi = [];
            for(let i = 3; i < parseInt(number); i++){
                if((i % 3 === 0) || (i % 5 ===0)){
                    multi.push(i);
                }
            }
            console.log(multi);

            questions();
        }
    });
}