const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// original version
// const ulParent = document.createElement('ul');
// for(let game of warriorsGames) {
//     const {
//         homeTeam,
//         awayTeam
//     } = game;
//     const {
//         team: hTeam,
//         points: hPoints,
//     } = homeTeam;
//     const {
//         team: aTeam,
//         points: aPoints,
//     } = awayTeam;
//     const li = document.createElement('li');
//     const teamsPlaying = `${aTeam} @ ${hTeam}`;
//     let gameScore;
//     if(aPoints > hPoints) {
//         gameScore = `<b>${aPoints}</b> - ${hPoints}`;
//     }
//     else {
//         gameScore = `${aPoints} - <b>${hPoints}</b>`;
//     }
//     const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//     li.classList.add(warriors.isWinner ? 'win' : 'loss');
//     li.innerHTML = `${teamsPlaying} ${gameScore}`;
//     ulParent.appendChild(li);
// }

// document.body.prepend(ulParent);

// refactored version
const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  for(let game of games) {
      const li = document.createElement('li');
      li.innerHTML = getScoreLine(game);
      li.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
      ulParent.appendChild(li);
  }
  return ulParent;
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam,points: hPoints} = homeTeam;
  const {team: aTeam,points: aPoints} = awayTeam;
  const teamsPlaying = `${aTeam} @ ${hTeam}`;
  let gameScore;
  if(aPoints > hPoints) {
      gameScore = `<b>${aPoints}</b> - ${hPoints}`;
  }
  else {
      gameScore = `${aPoints} - <b>${hPoints}</b>`;
  }
  return `${teamsPlaying} ${gameScore}`;
}

const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');

const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);