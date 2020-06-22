import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView6352Navigator from '../features/CalendarView6352/navigator';
import Messaging6351Navigator from '../features/Messaging6351/navigator';
import EmailAuth6350Navigator from '../features/EmailAuth6350/navigator';
import CalendarView6349Navigator from '../features/CalendarView6349/navigator';
import Messaging6347Navigator from '../features/Messaging6347/navigator';
import EmailAuth6346Navigator from '../features/EmailAuth6346/navigator';
import CalendarView6345Navigator from '../features/CalendarView6345/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView6352: { screen: CalendarView6352Navigator },
Messaging6351: { screen: Messaging6351Navigator },
EmailAuth6350: { screen: EmailAuth6350Navigator },
CalendarView6349: { screen: CalendarView6349Navigator },
Messaging6347: { screen: Messaging6347Navigator },
EmailAuth6346: { screen: EmailAuth6346Navigator },
CalendarView6345: { screen: CalendarView6345Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
