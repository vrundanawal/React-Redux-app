import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi"; //import the api

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors: authors,
  };
}

//thunks used for load authors with async call
export function loadAuthors() {
  return function (diapatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        diapatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
