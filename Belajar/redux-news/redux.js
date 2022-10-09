const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 20,
};

// reducer => fungsi untuk update
const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_AGE") {
    return {
      ...state,
      age: state.age + 1,
    };
  }

  if (action.type === "CHANGE_VALUE") {
    return {
      ...state,
      value: state.value + action.newValue,
    };
  }
  return state;
};

// Store => value global
const store = createStore(rootReducer);
console.log(store.getState());
// dispatch => action
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());

// subcription => jika ada perubahan akan terpanggil
