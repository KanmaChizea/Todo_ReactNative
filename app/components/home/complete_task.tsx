import TextStyles from '../../styles/textstyles';
import Colors from '../../styles/colors';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function CompleteTask({
  tasks,
  clearAllFunction,
}: {
  tasks: string[];
  clearAllFunction: () => void;
}) {
  return (
    <View>
      <View
        style={{
          paddingBottom: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={TextStyles.h3}>COMPLETED TASKS</Text>
        <TouchableOpacity onPress={clearAllFunction}>
          <Text style={{...TextStyles.caption, color: Colors.red}}>
            Clear all
          </Text>
        </TouchableOpacity>
      </View>
      {tasks.map(item => (
        <View style={styles.listTile}>
          <Text style={{...TextStyles.bodySmall, color: Colors.grey2}}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey3,
  },
});
export default CompleteTask;
