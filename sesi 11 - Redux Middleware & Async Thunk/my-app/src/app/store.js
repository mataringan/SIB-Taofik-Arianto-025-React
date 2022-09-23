import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import counterReducer from "../features/counter/counterSlice.js";
// import usersReducer from "../features/users/usersSlice.js";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

import authReducer from "../features/users/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
