import { createSlice } from "@reduxjs/toolkit";

export const EDITOR = "editor";

const initialEditorState = {
  title: "",
  content: "",
};

export const editorSlice = createSlice({
  name: EDITOR,
  initialState: initialEditorState,
  reducers: {
    onTitleChange: (state, action) => ({ ...state, title: action.payload }),
    onContentChange: (state, action) => ({ ...state, content: action.payload }),
  },
});

export const { onTitleChange, onContentChange } = editorSlice.actions;

export default editorSlice.reducer;
