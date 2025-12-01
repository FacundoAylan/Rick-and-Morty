import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Character, CharactersState } from "../models/character.model";

const initialState: CharactersState = {
  items: [],
  filteredItems: [],
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character[]>) => {
      const newCharacters = action.payload.filter(
        c => !state.items.some(existing => existing.id === c.id)
      );
      state.items = [...state.items, ...newCharacters];

      // Si filteredItems está vacío, inicializarlo
      if (state.filteredItems.length === 0) {
        state.filteredItems = [...state.items];
      }
    },
    
    filtedCharacters: (state, action: PayloadAction<Character[]>) => {
      state.filteredItems = action.payload;
    }
  },
});

// Action
export const { addCharacter, filtedCharacters } = characterSlice.actions;

// Reducer
export default characterSlice.reducer;

