import { createSlice } from "@reduxjs/toolkit";
import contactData from "../../contactData.json";

const initialContacts = contactData;

const initialState = {
  items: initialContacts,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;
