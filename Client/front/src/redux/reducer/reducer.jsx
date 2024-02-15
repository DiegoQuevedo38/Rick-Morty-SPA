import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, RESET } from "../actions/types";

const initialState = {
  allFavorites: [],
  favorites: [],
};


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        allFavorites: payload,
        favorites: payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        allFavorites: payload,
        favorites: payload,
      };
    case FILTER:
      if (payload === "All") return { ...state, favorites: state.allFavorites };

      const filterByGender = state.allFavorites.filter(
        (fav) => fav.gender === payload
      );
      return {
        ...state,
        favorites: filterByGender,
      };
    case ORDER:
      const ordered = state.favorites.sort((a, b) => {
        switch (payload) {
          case "Asc":
            return a.id < b.id ? -1 : 1;
          case "Desc":
            return a.id > b.id ? -1 : 1;
          case "All":
            return a.id < b.id ? -1 : 1;
          default:
            return 0;
        }
      });
      return {
        ...state,
        favorites: ordered,
      };

    case RESET:
      return {
        ...state,
        favorites: state.allFavorites,
      };

    default:
      return {
        ...state,
      };
  }
}