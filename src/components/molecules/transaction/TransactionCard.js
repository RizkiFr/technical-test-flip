import React from 'react';
import PropTypes from 'prop-types';
import { PixelRatio } from 'react-native';
import { Card, ButtonStatus } from '../../atoms';
import { View, Text } from 'react-native';
import { colors, spacing, styles, typography } from '../../../styles';
import { autoCurency, capitalizeBankName, dateFormat } from '../../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const TransactionCard = ({ data, onPress }) => {

    const isSuccess = data.status == 'SUCCESS';
    const isPending = data.status == 'PENDING'

    const containerStyle = {
        ...styles.containerRow,
        padding: PixelRatio.getPixelSizeForLayoutSize(6),
        borderLeftWidth: PixelRatio.getPixelSizeForLayoutSize(3),
        borderColor: isSuccess ? colors.Turquoise : isPending ? colors.PinkishOrange : colors.SteelGrey,
        marginBottom: spacing.xs,
        marginHorizontal: spacing.xxs,
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(3),
    }

    return (
        <Card style={containerStyle} onPress={onPress}>
            <View style={{ flex: 1 }}>
                <Text style={typography.ContentTitle}>{capitalizeBankName(data.sender_bank)} <FontAwesome name='long-arrow-right' /> {capitalizeBankName(data.beneficiary_bank)}</Text>
                <Text style={typography.Content}>{data.beneficiary_name.toUpperCase()}</Text>
                <Text style={typography.SmallContent}>{autoCurency(data.amount)} • {dateFormat(data.created_at)}</Text>
            </View>
            <View>
                <ButtonStatus status={data.status} />
            </View>
        </Card>
    )
}

TransactionCard.propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
}