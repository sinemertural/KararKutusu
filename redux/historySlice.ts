// redux/historySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Choice = {
  sectionId: string;
  choiceText: string;
};

type HistoryState = {
  choices: Choice[];
};

const initialState: HistoryState = {
  choices: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addChoice: (state, action: PayloadAction<Choice>) => {
      state.choices.push(action.payload);
    },
    clearHistory: (state) => {
      state.choices = [];
    },
  },
});

export const { addChoice, clearHistory } = historySlice.actions;
export default historySlice.reducer;
