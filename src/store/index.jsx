const {default: dashboard} = require('./slices/dashboard');
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    dashboard,
  },
});
