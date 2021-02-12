/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/id-ID';

AppRegistry.registerComponent(appName, () => App);
