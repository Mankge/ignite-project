import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name, token) => async (dispath) => {
  if (token) {
    token.cancel("Operation canceled due to new request.");
  }
  token = axios.CancelToken.source();
  const searchGames = await axios.get(searchGameURL(game_name), {
    cancelToken: token.token,
  });
  dispath({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export const fetchSearchSuggestions = (game_name, token) => async (dispath) => {
  if (token) {
    token.cancel("Operation canceled due to new request.");
  }
  token = axios.CancelToken.source();
  const searchGames = await axios.get(searchGameURL(game_name), {
    cancelToken: token.token,
  });
  dispath({
    type: "FETCH_SEARCHED_SUGGESTIONS",
    payload: {
      searchedResults: searchGames.data.results,
    },
  });
};
