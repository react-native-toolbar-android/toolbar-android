import {registerRootComponent} from 'expo';

// import App from './App';
// registerRootComponent(App);

import ToolbarAndroidExample from './ToolbarAndroidExample';
registerRootComponent(ToolbarAndroidExample);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
