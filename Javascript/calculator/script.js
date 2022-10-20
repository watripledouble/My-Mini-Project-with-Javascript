(function(){
    //declare everythin tinkerbell
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const equal = document.querySelector('.btn-equal');
    const clear = document.querySelector('.btn-clear');

    //button number event
    buttons.forEach(button => {
        button.addEventListener('click', n => {
            const value = n.target.dataset.num;
            screen.value += value;
        })
    });

    //button equal event
    equal.addEventListener('click', e => {
        if (screen.value === '') {
            screen.value = "Please Enter Number";
        }else{
            const answer = eval(screen.value);
            screen.value = answer;
        }
    });

    //button clear event
    clear.addEventListener('click', c => {
        screen.value = "";
    });

})();