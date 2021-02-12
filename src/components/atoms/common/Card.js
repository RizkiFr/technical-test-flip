import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { spacing, styles } from '../../../styles';


export const Card = (props) => {

    const containerStyle = {
        ...styles.shadow,
        padding: spacing.s,
        borderRadius: spacing.xs,
        ...props.style,
    }
    return (
        <TouchableHighlight underlayColor='transparent' onPress={props.onPress} disabled={props.disabled} >
            <View style={containerStyle}>
                {props.children}
            </View>
        </TouchableHighlight>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}