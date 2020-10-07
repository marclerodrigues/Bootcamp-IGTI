import {promises as fs} from "fs";

init();
writeReadJson();

async function init(){
    try{
        await fs.writeFile("test.txt", "Hello, dear!");
        await fs.appendFile("test.txt","\ntest apend file");
        const data = await fs.readFile("test.txt", "utf-8");
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

async function writeReadJson(){
    try{
        let arrayCarros = ["Gol", "Palio", "Uno", "Chevete", "Opala"];
        const obj = {
            carros: arrayCarros
        };
        await fs.writeFile("test.json", JSON.stringify(obj));
        
        const data = JSON.parse(await fs.readFile("test.json"));
        
        data.carros.push("Civic");
        console.log(data);

        await fs.writeFile("test.json", JSON.stringify(data));
    }catch(err){
        console.log(err);
    }
}

//Promises

/*
fs.writeFile("test.txt", "Hello, dear!").then(() =>{
    fs.appendFile("test.txt","\ntest apend file").then(() =>{
        fs.readFile("test.txt", "utf-8").then((resp) => {
            console.log(resp);
        }).catch(error =>{
            console.log(error);
        })
    }).catch(error =>{
        console.log(error);
    })
}).catch(error => {
    console.log(error);
});
*/


//Usando callbacks;
/*fs.writeFile("test.txt", "Hello World!\n", (err) =>{
    if(err){
        console.log(err);
    } else{
        fs.appendFile("test.txt", "I am alive!", (err) =>{
            if(err){
                console.log(err);
            }
            else{
                fs.readFile("test.txt", "utf-8", (err, data) => {
                    if(err){
                        console.log(err);
                    } else{
                        console.log(data);
                    }
                });
            }
        });
    }
});
*/

//Maneira Syncrona (não recomendado)
/* try{
   console.log('1');
   fs.writeFileSync("test.txt", "I am alive!");
   console.log('2');
   const data = fs.readFileSync("test.txt", "utf-8");
   console.log(data);
   console.log('3');
} catch(error){
    console.log("Deu ruim" + error);
}*/