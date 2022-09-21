import redux from "redux";
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 21,
};

// reducer -> function untuk mengubah state
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription -> fungsi dipanggil ketika ada perubahan
store.subscribe(() => {
  console.log("store change: ", store.getState());
});

// Dispatching Action
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
