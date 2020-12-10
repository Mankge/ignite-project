const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  searchedResults: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "FETCH_SEARCHED_SUGGESTIONS":
      return {
        ...state,
        searchedResults: action.payload.searchedResults,
      };
    case "CLEAR_SEARCHED_SUGGESTIONS":
      return {
        ...state,
        searchedResults: [],
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
        searchedResults: [],
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
