import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012216Navigator from '../features/BlankScreen012216/navigator';
import CopyOfBlankScreen012213Navigator from '../features/CopyOfBlankScreen012213/navigator';
import BlankScreen012212Navigator from '../features/BlankScreen012212/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012216: { screen: BlankScreen012216Navigator },
CopyOfBlankScreen012213: { screen: CopyOfBlankScreen012213Navigator },
BlankScreen012212: { screen: BlankScreen012212Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
