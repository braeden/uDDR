const arrows = ['←', '↑', '→', '↓']
let board, score, dir
let highscore = 0
const setup = () => {
    board = Array(20).fill('_')
    score = 0;
    dir = null;
}
setup()
setInterval(() => {
    if (dir != null && arrows[dir] == board[0]) {
        score++
    } else if (board[0] != '_') {
        if (score > highscore) highscore = score
        setup()
    }
    board.shift()
    board.push(Math.random() > .2 + score * .01 ? '_' : arrows[Math.floor(Math.random() * arrows.length)])
    history.replaceState({}, '', `${window.location.origin}#${board.join('')}`)
    document.title = `${score}|${highscore}`;
}, 200);
document.addEventListener('keydown', (e) => {
    if (Math.abs(e.keyCode - 37) <= 4)
        dir = e.keyCode - 37
});
// document.addEventListener('keyup', () => dir = null)