import Initializing from '../Screens/Initializing';
import List from '../Screens/List';
import {registerScreen} from './navigation';

export async function registerScreens() {
  registerScreen('Initializing', Initializing);
  registerScreen('List', List);
}
