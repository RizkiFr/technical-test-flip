import React from 'react';
import TransactionList from '../containers/transactions/TransactionList';
import DetailTransaction from '../containers/transactions/DetailTransaction';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator()

const TransactionNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureDirection: 'horizontal',
            }}>
            <Stack.Screen name="TransactionList" options={{ title: 'Flip' }} component={TransactionList} />
            <Stack.Screen name="DetailTransaction" options={{ title: 'Detail Transaksi' }} component={DetailTransaction} />
        </Stack.Navigator>
    )
}

export default TransactionNavigator;