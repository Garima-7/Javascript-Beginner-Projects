// var some = document.querySelectorAll('.outer div');

// for (var i = 0; i < some.length; i++) {
//     some.addEventListener('transionend', function(e) {
//         some.classList.add('playing');
//     });
// }



window.addEventListener('keydown', function(e) {
    var k = e.key;
    const sound = document.querySelector(`audio[data-key="${k}"]`); /* `audio[data-key="${e.key}"]` Here we cannot use k directly bcoz it is a javascript variable and not a value of certain css property.*/
    const key = document.querySelector(`div[data-key="${k}"]`);
    sound.currentTime = 0;
    if (!sound) return;
    sound.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //we want this bcoz if there(in this case box-shadow and transform) transition times are different then we want to remove class only when tranform property has finished.
    //bcoz transitionend event will run for every property like tranform,box-shadow.so we want to end the class only when tranform is completed fully.
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.outer div');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransition);
}