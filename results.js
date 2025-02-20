let loveResu = '';

function loveResult() {
    var loveScore = Math.floor(Math.random() * 101);
    var message;

    if (loveScore <= 25) {
        message = 'Your love score is ' + loveScore + '% and your love is still young, just beginning to blossom. Nurture it with care and patience, and watch it grow beautifully.';
    } else if (loveScore <= 50){
        message = 'Your love score is ' + loveScore + '% and your love is mid way building a strong foundation. Keep cherishing each moment, and enjoy the journey of growing closer together.';
    } else if (loveScore <= 75){
        message = 'Your love score is ' + loveScore + '% and keep your love burning bright, filled with passion and joy. Continue to fuel the flames with affection and understanding, and your love will thrive.';
    } else {
        message = 'Your love score is ' + loveScore + '% and your love is perfect a harmonious and beautiful bond. Treasure this wonderful connection, and let it inspire you to create even more magical memories together.';
    }
    
    return message;
}

document.querySelector('.result1').innerHTML = loveResult()
const test = 'love grip'
document.querySelector('.name-heading').innerHTML = test