// Preso vari elementi dal HTML e aggiunti a javascript tramite il dom.
const gridContainer = document.getElementById('grid-container');

const cellsGenerator = document.getElementById('cells-btn-generator');

const difficultySelect = document.getElementById('difficulty');

// Array vuota.
let bombe = [];

// Variabile score con valore 0;
let score = 0;

/* 
    Aggiunto evenlistener alla varibile con il valore del button,
    nel momento che l'utente clicka il button genera una fuzione
    anonima con le instruzione al suo interno.
*/
cellsGenerator.addEventListener('click', function() {
    // Svuota il contenuto cosi da non sommare le griglie ogni volta che l'utente clicca.
    gridContainer.innerHTML = '';

    /* 
        Richiamato le 2 variabili al interno del eventlistner per poter
        resettare l'array/score ogni volta che si clicca sul bottone.
    */
    bombe = [];
    score = 0;


    const arrLength = 16;
    /* 
        Fatto un ciclo for che itera 16 volte,
        dichiarato una variabile rndNumber vuota, successivamente
        entro in un ciclo do while che genera un numero randomico tra 1 e 100
        usando la funzione getRndInteger(); e lo assegno a rndNumber,
        il ciclo do while continua a rigenerare rndNumber finchè il
        numero generato non è già presente nell'array, una volta
        generato un numero che non era nel'array esce dal ciclo.
    */
    for (let i = 0; i < arrLength; i++) {
        let rndNumber;
        do {
            rndNumber = getRndInteger(1, 100);
        } while (bombe.includes(rndNumber));
        
        bombe.push(rndNumber);
        }
        
        console.log('bombe', bombe, bombe.length, typeof bombe);
        // ------------------------------------------------------------------

    // Variabile che serve per selezione il testo delle opzioni dentro un select.
    const difText = difficultySelect.options[difficultySelect.selectedIndex].text;
    
    // Dichiarato variabile vuota.
    let cell;
    
    /* 
        Rimosso le varie classi in modo che quando si clicca resetta
        senza mantenere la divisione della width del ultima utilizzata.
    */ 
    gridContainer.classList.remove('easy-dif', 'normal-dif', 'hard-dif');

    const scoreText = document.getElementById('score-text');

    scoreText.innerHTML = 'Punteggio: 0';

    score = 0;

    /* 
        Se diftext è uguale alla scritta delle opzioni dentro il tag select
        aggiungi il numero di celle e una classe di una difficoltà che cambia
        la divisione delle celle tramite css.
    */
    if (difText === 'Hard') {
        cell = 49;
        gridContainer.classList.add('hard-dif');
    }

    else if (difText === 'Normal') {
        cell = 81;
        gridContainer.classList.add('normal-dif');
    }

    else if (difText === 'Easy') {
        cell = 100;
        gridContainer.classList.add('easy-dif');
    }
    
    /*  
        Creato un ciclo for che itera tot volte in base al valore che li assegniamo
        alla variable cell
    */  

    for (let i = 0; i < cell; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        // Variabile con valore booleano falso che usero dopo.
        let clicked = false;

        gridContainer.append(cell);

        const cellNumber = document.createElement('div');
        // Ho aggiunto al html i numeri per ogni idex iterato + 1 in modo avere un conteggio.
        cellNumber.innerHTML = i + 1;
        cellNumber.className = 'cell-number';

        cell.append(cellNumber);

        cell.addEventListener('click', function () {
            /* 
                Se si trova un numero che è uguale sia per l'array che per la variabile cell number,
                al evento del click aggiungi una classe bomb-cell un alert e un h3.
            */ 
            if (bombe.includes(parseInt(cellNumber.innerHTML))) {
                this.classList.add('bomb-cell');
                alert('HAI PERSO!');
                scoreText.innerText = 'Hai perso il tuo punteggio è: ' + score;
            }
            /* 
                Altrimenti se il numero dentro l'array non viene cliccato,
                aggiungi classe safe-cell e incrementa il numero del punteggio dentro l'html.
            */
            else if (!clicked) {
                this.classList.add('safe-cell');
                score++;
                scoreText.innerHTML = 'Punteggio: ' + score;
                clicked = true;
            }
        
        })
    }
})

// Funzione che genera un numero tra un valore minimo e un massimo.
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;   
}


    


