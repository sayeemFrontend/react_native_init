import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import GetStacks from './src/stacks/GetStacks';
import {store} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GetStacks />
      </NavigationContainer>
    </Provider>
  );
}
