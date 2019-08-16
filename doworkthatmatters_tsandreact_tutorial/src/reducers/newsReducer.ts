import { StoreStructure } from "../entities/StoreStructure";
import { ActionTypeBase, NewsActionType } from "../actions/actionTypes";
import {
  LOAD_NEWS,
  ADD_NEWS,
  EDIT_NEWS,
  REMOVE_NEWS
} from "../actions/newsActions";
import { Reducer } from "redux";

const initState: StoreStructure = {
  articles: [],
  read: [],
  favorite: [],
  withComplains: []
};

const newsReducer: Reducer<StoreStructure, NewsActionType> = (
  state: StoreStructure,
  action: NewsActionType
) => {
  switch (action.type) {
    case LOAD_NEWS:
      console.log("LOAD news (reducer)");
      return state;
    case ADD_NEWS:
      console.log("ADD news (reducer)");
      return state;
    case EDIT_NEWS:
      console.log("EDIT news (reducer)");
      return state;
    case REMOVE_NEWS:
      console.log("REMOVE news (reducer)");
      return state;
    default:
      return state;
  }
};
