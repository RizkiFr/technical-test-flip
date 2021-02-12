import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import { colors } from '../../../styles';

export const Loading = (props) => {
    return (
        <Modal visible={props.loading} style={{ margin: 0 }} transparent={true} animationType='fade' >
            <View style={style.container}>
                <ActivityIndicator color={colors.PinkishOrange} size='large' />
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
})

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}