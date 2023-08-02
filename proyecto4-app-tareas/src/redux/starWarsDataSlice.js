import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count:0,
  previous:null,
  next:null,
  results: [],
};

export const starWarsDataSlice = createSlice({
  name:'fullDataStarWars',
  initialState,
  reducers:{
    getStarwarsdata:(state, action) =>{
      const {count, previous, next, results } = action.payload;
      state.count =   count;
      state.previous = previous;
      state.next = next;
      state.results = results;
    }
    // ,
    // chageNameCharacter:(state, action) =>{
    //   state.name = payload
    // }
  },
});

export const {getStarwarsdata, /*chageName*/ } = starWarsDataSlice.actions;
export default  starWarsDataSlice.reducer;