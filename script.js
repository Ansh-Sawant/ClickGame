var counter = 0;

var mainCounter = document.getElementsByClassName('mainCounter');



// Hiding
for(var i=0; i<3; i++){
    mainCounter[i].style.display = 'none';
}
document.getElementById('startAgain').style.display = 'none';


//On clicking 'Start Game'
document.getElementById('startGame').addEventListener('click', main);


function show() {
    document.getElementById('final').style.display = '';
    document.getElementById('startAgain').style.display = '';
    
    document.getElementById('clickHere').removeEventListener('click', mainThing);
};

function mainThing() {

    // Add Counter
    counter++;
    document.getElementById('countNum').textContent = counter;
};

//    START AGAIN
document.getElementById('startAgain').addEventListener('click', function() {

    counter = 0;
    
    document.getElementById('countNum').textContent = 0;
    document.getElementById('timeCount').textContent = 10;

    // Hiding
    for(var i=0; i<3; i++){
        mainCounter[i].style.display = 'none';
    }
    document.getElementById('startAgain').style.display = 'none';

    main();
    
});

function main() {

    var name = document.getElementById('name').value;

    //hide name
    document.getElementById('totalName').style.display = 'none';

    //1. Show the Hiding Part
    for(var i=0; i<2; i++){
        mainCounter[i].style.display = '';
    }

    //Hide Start Game button
    document.getElementById('startGame').style.display = 'none';

    // On clicking 'Click Here'
    document.getElementById('clickHere').addEventListener('click', mainThing);

    // When time is over, show the Result add display the start again button
    var time = 9;
    var timer = setInterval(function() {
        if(time < 0){
            clearInterval(timer);
            document.getElementById('finalScore').innerHTML = name + " Score: " + counter;
            show();

        }else{
            document.getElementById('timeCount').innerHTML = time;
            time--;
        }

    }, 1000);
}