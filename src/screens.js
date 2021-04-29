import Initializing from './Initializing';
import List from './List';
import {registerScreen} from './utils/navigation';

export async function registerScreens() {
  registerScreen('Initializing', Initializing);
  registerScreen('List', List);
}
