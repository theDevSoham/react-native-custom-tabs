/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';

import dashReducer from './slices/dashSlice';

export const store = configureStore({
    reducer: {
        dash: dashReducer,
    },
});