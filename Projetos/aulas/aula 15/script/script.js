window.addEventListener('load', function(){
    const div = document.querySelector('#timer');
    let count = 0;

    const interval = setInterval(() => {
        timer.textContent = ++count;

        if(count === 20){
            this.clearInterval(interval);
            return;
        }
        if(count % 5 === 0){
            setTimeout(() => {
                timer.textContent = count + '0,5';
            }, 500);
        }
    }, 1000);
})