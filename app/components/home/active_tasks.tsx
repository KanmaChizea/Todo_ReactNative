import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TextStyles from '../../styles/textstyles';
import Colors from '../../styles/colors';

function ActiveTasks({
  tasks,
  deleteFunction,
  completeFunction,
}: {
  tasks: string[];
  deleteFunction: (item: string) => void;
  completeFunction: (item: string) => void;
}): JSX.Element {
  return (
    <View style={{paddingBottom: 52}}>
      <Text style={{...TextStyles.h3, paddingBottom: 12}}>ACTIVE TASKS</Text>
      {tasks.map(item => (
        <View key={tasks.indexOf(item)} style={style.listTile}>
          <TouchableOpacity onPress={() => completeFunction(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteFunction(item)}>
            <Image source={require('../../../assets/icon_trash.png')}></Image>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  listTile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey3,
  },
});
export default ActiveTasks;
