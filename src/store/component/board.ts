export default class Board {
  enable: boolean;

  board: string[];

  winCombinations: number[][];

  winner: any;

  gameStarting: boolean;

  turnCounter: number;

  winnerPlayer: number;

  winnerAi: number;

  constructor() {
    this.enable = true;
    this.board = ['', '', '', '', '', '', '', '', ''];

    this.winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    this.winner = null;
    this.gameStarting = false;
    this.winnerAi = 0;
    this.winnerPlayer = 0;
    this.turnCounter = 0;
    this.getLocalStorage();
    this.whoStart();

    if (this.gameStarting) {
      console.log("TÖÖTAB")
    }
  }

  enableSwitch() {
    this.gameStarting = true;
    return (this.enable = !this.enable);
  }
  //fetching W/L from LS
  getLocalStorage() {
    if (localStorage.getItem('winCount') !== null) {
      this.winnerPlayer = JSON.parse(localStorage.winCount);
    }
    if (localStorage.getItem('loseCount') !== null) {
      this.winnerAi = JSON.parse(localStorage.loseCount);
    }
  }

  whoStart() {
    // making sure that this method will be ran once
    let executed = false;
/*     this.enableSwitch() */
    if (!executed) {
      executed = true;

      const decideWhoStart: number = Math.ceil(Math.random() * 2);
      console.log(decideWhoStart);
      if (decideWhoStart === 1) {
        this.enableSwitch()
        console.log('Ai has first turn',this.gameStarting);
        
        this.calculateAITurn();
      }
      if (decideWhoStart === 2) {
        console.log('You have first turn',this.gameStarting);
      }
    }
  }

  checkProgress() {
    this.turnCounter++;
    // eslint-disable-next-line no-console
    console.log(this.board);

    if (this.turnCounter === 9) {
      this.winner = 'nooneWin';
    } else {
      const calculateDestiny = this.winCombinations.map(currentLine => currentLine
        .map(cell => this.board[cell]).join(''));
      calculateDestiny.forEach((line) => {
        const playerReg = /player/g;
        const playerLineMatch = line.match(playerReg);
        const playerLineMatchSum = playerLineMatch && playerLineMatch.length ? playerLineMatch.length : 0;

        const aiReg = /ai/g;
        const aiLineMatch = line.match(aiReg);
        const aiLineMatchSum = aiLineMatch && aiLineMatch.length ? aiLineMatch.length : 0;
        // Calculate winner
        if (playerLineMatchSum === 3) {
          this.winner = 'playerWin';
          const win = this.winnerPlayer + 1;
          localStorage.winCount = JSON.stringify(win);
        }

        if (aiLineMatchSum === 3) {
          this.winner = 'aiWin';
          const loss = this.winnerAi + 1;
          localStorage.loseCount = JSON.stringify(loss);
        }
      });
    }

    if (!this.winner) {
      this.enableSwitch();
    }
  }

  setCellProperty(property: string, index: number) {
    this.board.splice(index, 1, property);
    this.checkProgress();
  }

  setPlayerProperty(index: any) {
    this.setCellProperty('player', index);
    this.calculateAITurn();
  }

  shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  rand(items: any) {
    return items[~~(items.length * Math.random())];
  }

  calculateAITurn() {
    const topPriorityCells: any | undefined[] = [];
    const anotherCells: any | undefined[] = [];

    this.winCombinations.forEach((boardLine) => {
      let playerMarkCounter: number = 0;
      let aiMarkCell: number = 0;
      let opportunityCell: any;

      boardLine.forEach((cellIndex) => {
        switch (this.board[cellIndex]) {
          case 'player':
            return playerMarkCounter++;

          case 'ai':
            return aiMarkCell++;

          default:
            opportunityCell = cellIndex;
        }
      });

      if (opportunityCell >= 0) {
        switch (aiMarkCell) {
          case 2:
            return topPriorityCells.unshift(opportunityCell);

          case 1:
            return anotherCells.unshift(opportunityCell);
        }

        if (playerMarkCounter === 2) {
          return topPriorityCells.push(opportunityCell);
        }
        console.log('OPPURTUNITY CELL:', opportunityCell);
        console.log('TOP PRIORITY CELLS:', topPriorityCells);
        return anotherCells.push(opportunityCell);
      }
    });

    if (topPriorityCells.length) {
      // Combining best possible moves with available moves
      const movesCombined = [...topPriorityCells, ...anotherCells];
      const dumbMoves: any = this.rand(movesCombined);
      const smartMoves: any = topPriorityCells;
      /* console.log('Arr3:', arr3, 'Arr4:', arr4) */
      this.setCellProperty('ai', [smartMoves].shift());
    } else {
      anotherCells.length ? this.setCellProperty('ai', anotherCells.shift()) : '';
    }
  }
}
