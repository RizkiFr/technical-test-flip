import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, PixelRatio } from 'react-native';
import { colors, spacing, styles, typography } from '../../../styles';


export const ButtonStatus = (props) => {

    const isSuccess = props.status == 'SUCCESS';
    const isPending = props.status == 'PENDING'

    const containerStyle = {
        paddingVertical: spacing.xxs,
        paddingHorizontal: spacing.xs,
        borderRadius: spacing.xs,
        backgroundColor: isSuccess ? colors.Turquoise : isPending ? colors.White : colors.VeryLightPink,
        borderWidth: isPending ? PixelRatio.getPixelSizeForLayoutSize(1) : 0,
        borderColor: colors.PinkishOrange
    }
    const textStyle = {
        ...typography.ContentTitle,
        color: isSuccess ? colors.White : colors.CharcoalGrey,
    }

    const getStatus = (status) => {
        switch (status) {
            case 'SUCCESS':
                return 'Berhasil'
            case 'PENDING':
                return 'Pengecekan'
            default:
                return 'Dibatalkan'
        }
    }

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{getStatus(props.status)}</Text>
        </View>
    )
}

ButtonStatus.propTypes = {
    status: PropTypes.string.isRequired
}