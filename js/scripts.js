const gridContainer = document.getElementById('grid-container');

const cellsGenerator = document.getElementById('cells-btn-generator');

const difficultySelect = document.getElementById('difficulty');

const arrLength = 16;
const bombe = [];

for (let i = 0; i < arrLength; i++) {
let rndNumber;
do {
    rndNumber = getRndInteger(1, 100);
} while (bombe.includes(rndNumber));

bombe.push(rndNumber);
}

console.log('bombe', bombe, bombe.length, typeof bombe);


cellsGenerator.addEventListener('click', function() {
    gridContainer.innerHTML = '';

    const difText = difficultySelect.options[difficultySelect.selectedIndex].text;
    let cellNumber;

    gridContainer.classList.remove('easy-dif', 'normal-dif', 'hard-dif');

    const scoreText = document.getElementById('score-text');

    scoreText.innerHTML = '';

    if (difText === 'Hard') {
        cellNumber = 49;
        gridContainer.classList.add('hard-dif');
    }

    else if (difText === 'Normal') {
        cellNumber = 81;
        gridContainer.classList.add('normal-dif');
    }

    else if (difText === 'Easy') {
        cellNumber = 100;
        gridContainer.classList.add('easy-dif');
    }
    
    for (let i = 0; i < cellNumber; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        gridContainer.append(cell);

        const cellNumber = document.createElement('div');
        cellNumber.innerHTML = i + 1;
        cellNumber.className = 'cell-number';

        cell.append(cellNumber);

        cell.addEventListener('click', function () {
        

            if (bombe.includes(parseInt(cellNumber.innerHTML))) {
                this.classList.add('bomb-cell');
                alert('HAI PERSO!');
                scoreText.innerText = 'Hai perso il tuo punteggio è:'
            }
            
            else {
                this.classList.add('new-bg-color');
                console.log(cellNumber.innerHTML);
            }
        
        })
    }
})

        
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;   
}


    


