/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from "./src/components/App";

export default class reactNativeCoursesApp extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('reactNativeCoursesApp', () => reactNativeCoursesApp);
