let score = JSON.parse(localStorage.getItem('score')) || 
      {
        wins: 0,
        losses: 0,
        ties: 0
      };
      console.log(score);
      const resultbutton = document.querySelector('.js-result')
      function results(rslt) {
        if (rslt === 'Win') {
          resultbutton.innerHTML = 'You win!';
        } else if (rslt === 'Lose') {
          resultbutton.innerHTML = 'You lose!';
        } else resultbutton.innerHTML = 'This is a tie';
      }
      function pickComputerMove() {
        let computerMove = '';

        let randm = Math.random()


        if (randm >= 0 && randm <= 1/3) {
          computerMove = 'Rock';
        } else if (randm > 1/3 && randm <= 2/3) {
          computerMove = 'Scissor';
        } else if (randm > 2/3 && randm <= 1) {
          computerMove = 'Paper';
        }
        return computerMove;
      }
      function winORlose(yourmove) {
        const computerMove = pickComputerMove();
        let result = '';
        console.log(computerMove);
        if (yourmove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie.';
          } else if (computerMove === 'Scissor') {
            result = 'Win';
          } else result = 'Lose';
        } else if (yourmove === 'Paper') {
          if (computerMove === 'Paper') {
            result = 'Tie.';
          } else if (computerMove === 'Rock') {
            result = 'Win';
          } else result = 'Lose';
        } else if (yourmove === 'Scissor') {
          if (computerMove === 'Scissor') {
            result = 'Tie.';
          } else if (computerMove === 'Paper') {
            result = 'Win';
          } else result = 'Lose';
        }
        results(result);
        if (result === 'Win') {
          score.wins += 1;
        } else if (result === 'Lose') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        let scorestring = JSON.stringify(score);
        localStorage.setItem('score', scorestring);
        viewMoves(yourmove, computerMove);
        updatewins();
      }
      function updatewins() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},   Ties: ${score.ties}`
    }
      function viewMoves(move , computermove) {
        document.querySelector('.js-moves')
        .innerHTML = `You chose:
      <img src = "images/${move}-emoji.png" class = "move-icon">
      Computer chose: <img src = "images/${computermove}-emoji.png" class ="move-icon">`;
      }
      updatewins();