
let x = document.querySelector('.msg');
let c = document.querySelector('input');
let b = document.querySelector('.btn');
let sWords = ['php', 'javascript', 'html', 'angular', 'css', 'react', 'python', 'nodejs']
let play = false;
const createWord = () => {
    const nIndex = Math.floor(Math.random() * sWords.length);
    return sWords[nIndex];
}
const scramble = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function startGame() {
    if (!play) {
        play = true;
        x.style.display = 'block';
        c.style.display = 'block';
        b.innerHTML = 'GUESS';
        newWords = createWord();
        scrambleWords = scramble(newWords.split(""))
        x.innerHTML = 'Guess the Word ' + scrambleWords.join("");
    } else {
        newWords === c.value ? x.innerHTML = 'Yeah !! It`s correct' : x.innerHTML = 'Sorry Incorrect !!';
        play = false;
    }
}