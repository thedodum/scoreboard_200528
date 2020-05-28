import {ADD_PLAYER} from "../actionTypes";

let playerId = 4;

const playerInitialState = {
    title: 'My Scoreboard',
    players: [
        {name: 'LDK', score: 0, id: 1},
        {name: 'HONG', score: 0, id: 2},
        {name: 'KIM', score: 0, id: 3},
        {name: 'PARK', score: 0, id: 4},
    ],
    keyword: ''
};

export const playerReducer = (state = playerInitialState, action) => {
    let players = null;

    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [
                    ...state.players,
                    {
                        name: action.name,
                        score: 0,
                        id: ++playerId
                    }
                ]
            };
        case 'REMOVE_PLAYER':
            players = [...state.players];
            let index = players.findIndex(player => player.id === action.id);
            players.splice(index, 1);
            return {
                ...state,
                players
            };
        case 'CHANGE_SCORE':
            players = [...state.players];
            players.forEach(player => {
                if (player.id === action.id) {
                    player.score += action.delta
                }
            });
            return {
                ...state,
                players
            };
        case 'SEARCH_KEYWORD':
            return {
                ...state,
                keyword: action.keyword
            };
        default:
            return state;
    }
};


/*const handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  };

  const handleChangeScore = (id, delta) => {
    // console.log(id, delta);
    this.setState(prevState => {
      console.log(prevState);
      prevState.players.forEach(item => {
        if (item.id === id + 1) {
          item.score += delta;
        }
      });
      return {players: [...prevState.players]}
    })
  };

  const handleAddPlayer = (name) => {
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      }, 0);

      return {
        players: [
            ...prevState.players,
          {id: maxId + 1, name, score: 0}
        ]
      }
    })
  };*/
