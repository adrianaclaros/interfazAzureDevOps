import { configureStore } from '@reduxjs/toolkit';
import customFieldsReducer from './customFieldsSlice';

export const store = configureStore({
  reducer: {
    customFields: customFieldsReducer,
  },
});
