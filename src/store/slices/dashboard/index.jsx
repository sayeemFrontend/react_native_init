const {createSlice} = require('@reduxjs/toolkit');

const dashboard = createSlice({
  name: 'dashboard',
  initialState: {
    isLoading: true,
    response: {data: {}},
    isError: false,
  },
  reducers: {
    initDashboard: () => {},
  },
});
