import Initializing from '../Screens/Initializing';
import List from '../Screens/List';
import Detail from '../Screens/Detail';
import AddTask from '../Screens/AddTask';
import {registerScreen} from './navigation';

export async function registerScreens() {
  registerScreen('Initializing', Initializing);
  registerScreen('List', List);
  registerScreen('AddTask', AddTask);
  registerScreen('Detail', Detail);
}
