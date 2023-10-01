import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Details({navigation, route}) {
  const param = route.params;
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('home', {value: 'details'})}
        title="Go to Home Page"
      />
    </View>
  );
}
