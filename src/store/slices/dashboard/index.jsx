const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    isLoading: true,
    response: {data: {}},
    isError: false,
  },
  reducers: {
    initDashboard: (state, action) => {
      return {...state, isLoading: true};
    },
    successDashboard: (state, action) => {
      return {...state, isLoading: false, response: action.payload};
    },
    failDashboard: (state, action) => {
      return {...state, isLoading: false, isError: true};
    },
  },
});

export const {initDashboard, successDashboard, failDashboard} = slice.actions;
export default slice.reducer;
