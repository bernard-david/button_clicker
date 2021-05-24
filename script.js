function changeColor() {
    var color = document.getElementById('color');
    var colorList = ['yellow', 'red', 'aqua', 'orange', 'grey', 'pink'];
    var randomColor = colorList[Math.floor(Math.random()*colorList.length)];
    color.style.backgroundColor = randomColor; 
}
var count = 0;
function countUp() {
    count++;
    console.log(count);
    return count;
}