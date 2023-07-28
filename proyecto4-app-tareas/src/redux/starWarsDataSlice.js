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
      count = payload.count;
      previous = payload.previous;
      next = payload.next;
      results = payload.results;
    }
    // ,
    // chageNameCharacter:(state, action) =>{
    //   state.name = payload
    // }
  },
});

export const {getStarwarsdata, /*chageName*/ } = starWarsDataSlice.actions;
export default  starWarsDataSlice.reducer;