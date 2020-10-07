import ev from "./eventTest.js"

//on deve estar antes de emit

ev.on('testEvent', () =>{
    console.log('Listen too!');
});

ev.emit('testEvent', 'Hello');
