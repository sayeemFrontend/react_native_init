import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Details from '../pages/details';

export default function GetStacks() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
      <Screen component={Home} name="home" initialParams={{value: 'default'}} />
      <Screen component={Details} name="details" />
    </Navigator>
  );
}
