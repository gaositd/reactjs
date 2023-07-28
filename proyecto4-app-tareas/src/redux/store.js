import { configureStore } from '@reduxjs/toolkit';
import starwarsreducer from './starWarsDataSlice';

export const store = configureStore({
  reducer:{
    starWarsData:starwarsreducer,
  },
});

//https://www.youtube.com/watch?v=fMiFnbufAP4 12:55