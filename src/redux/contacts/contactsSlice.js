import { createSlice } from "@reduxjs/toolkit";
import contactData from "../../contactData.json";
import { fetchContactsThunk } from "./contactsOps";

const initialContacts = contactData;

const initialState = {
  items: initialContacts,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter((item) => item.id !== action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const contactsReducer = slice.reducer;
