import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
import {setRoot} from './utils/navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  setRoot('stack', 'Initializing', [
    {
      component: {
        name: 'Initializing',
      },
    },
  ]);
});
