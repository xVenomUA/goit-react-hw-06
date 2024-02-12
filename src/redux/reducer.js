// import { combineReducers } from "redux";

const intialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Andrian Pan", number: "459444-12-56" },
  { id: "id-6", name: "Yura Robin", number: "44124-839-12" },
  { id: "id-7", name: "Ira Comandik", number: "64324-14237-79" },
  { id: "id-8", name: "Diana TopGun", number: "22567-941-26" },
];

export const numberReducer = (state = intialState, aciton) => {
  switch (aciton.type) {
    case "numbers/addNumber":
      return [...state, aciton.payload];
    case "numbers/deleteNumber":
      return state.filter((number) => number.id !== aciton.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = "", aciton) => {
  switch (aciton.type) {
    case "filter/filterNumbers":
      return aciton.payload;
    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   numbers: numberReducer,
//   filter: filterReducer,
// });
