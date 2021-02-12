import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TransactionNavigator from './TransactionNavigator';

const AppContainer = () => {

    return (
        <NavigationContainer>
            <TransactionNavigator />
        </NavigationContainer>
    );
}

export default AppContainer;