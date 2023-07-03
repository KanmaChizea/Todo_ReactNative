import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeScreenNavigationProp} from '../components/navigation/navigation_values';
import {AppBar} from '../components/home/appbar';
import TextStyles from '../styles/textstyles';
import InputForm from '../components/login/login_form';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../styles/colors';
import Snackbar from 'react-native-snackbar';
import HomeEmptyState from '../components/home/empty_state';
import ActiveTasks from '../components/home/active_tasks';
import CompleteTask from '../components/home/complete_task';

function HomeScreen({navigation}: HomeScreenNavigationProp): JSX.Element {
  const [todo, setTodo] = useState<string>('');
  const [activeList, setActiveList] = useState<string[]>([]);
  const [completedList, setCompletedList] = useState<string[]>([]);

  function addTodo() {
    if (todo.length !== 0) {
      setActiveList([...activeList, todo]);
      setTodo('');
    } else {
      Snackbar.show({
        text: 'Task cannot be empty boss!',
        backgroundColor: Colors.red,
      });
    }
    Keyboard.dismiss();
  }

  async function deleteTodo(item: string) {
    const response = await new Promise(resolve => {
      Alert.alert(
        'Delete task?',
        'Deleting this task is a permanent action. Do you want to continue?',
        [
          {
            text: 'Cancel',
            onPress: () => resolve(false),
          },
          {
            text: 'Delete',
            onPress: () => resolve(true),
          },
        ],
      );
    });

    if (response) {
      setActiveList(activeList.filter(task => task !== item));
    }
  }

  async function clearCompleted() {
    const response = await new Promise(resolve => {
      Alert.alert(
        'Clear all completed?',
        'Deleting this task is a permanent action. Do you want to continue?',
        [
          {
            text: 'Cancel',
            onPress: () => resolve(false),
          },
          {
            text: 'Delete',
            onPress: () => resolve(true),
          },
        ],
      );
    });

    if (response) setCompletedList([]);
  }

  return (
    <View style={styles.body}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={{...TextStyles.bodySmall, paddingBottom: 12}}>
          Add todo
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{flex: 1, paddingRight: 24}}>
            <InputForm
              value={todo}
              onChangeText={val => setTodo(val)}
              placeholder="Task"
            />
          </View>
          <TouchableOpacity onPress={addTodo}>
            <Icon name="add-circle" size={36} color={Colors.green} />
          </TouchableOpacity>
        </View>
        {activeList.length == 0 && completedList.length == 0 ? (
          <HomeEmptyState />
        ) : (
          <View>
            {activeList.length != 0 ? (
              <ActiveTasks
                tasks={activeList}
                deleteFunction={deleteTodo}
                completeFunction={item => {
                  setActiveList(activeList.filter(task => task !== item));
                  setCompletedList([item, ...completedList]);
                }}
              />
            ) : (
              <View />
            )}
            {completedList.length != 0 ? (
              <CompleteTask
                tasks={completedList}
                clearAllFunction={clearCompleted}
              />
            ) : (
              <View />
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 16,
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  addForm: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  addButton: {
    flex: 1,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 24,
    borderRadius: 12,
    fontSize: 14,
  },
});
export default HomeScreen;
