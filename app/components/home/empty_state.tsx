import {Text, View} from 'react-native';

function HomeEmptyState(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
      }}>
      <Text>Chill! You have nothing to do</Text>
    </View>
  );
}

export default HomeEmptyState;
