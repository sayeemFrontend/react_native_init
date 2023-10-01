import {View, Text, Button} from 'react-native';

export default function Home({navigation, route}) {
  const param = route.params;

  return (
    <View>
      <Button
        onPress={() => navigation.navigate('details', {value: 'details'})}
        title="Go to Details Page"
      />
    </View>
  );
}
