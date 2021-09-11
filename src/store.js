import { configureStore } from "@reduxjs/toolkit";

import { EDITOR, EditorReducer } from "./editor";

export const store = configureStore({
  reducer: {
    [EDITOR]: EditorReducer,
  },
});
