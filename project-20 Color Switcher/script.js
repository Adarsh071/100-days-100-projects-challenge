const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'gray') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'indigo') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'violet') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aqua') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aquamarine') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'brown') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'chartreuse') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'crimson') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'darkmagenta') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'darkorange') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'deeppink') {
            body.style.backgroundColor = e.target.id;
        }
    })
})

