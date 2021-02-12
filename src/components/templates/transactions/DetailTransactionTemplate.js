import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { autoCurency, capitalizeBankName, dateFormat, copyToClipboard } from '../../../utils';
import { colors, spacing, styles, typography } from '../../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailTransactionTemplate = ({ data, onClose }) => {
    return (
        <View>
            <View style={style.header}>
                <Text style={typography.ContentTitle}>ID TRANSAKSI #{data.id}</Text>
                <Ionicons name='copy-outline' color={colors.PinkishOrange} size={spacing.s} style={{ marginLeft: spacing.xs }} onPress={() => copyToClipboard(data.id)} />
            </View>
            <View style={[style.header, styles.wrapperRowSpaceBetween]}>
                <Text style={typography.ContentTitle}>DETAIL TRANSAKSI</Text>
                <Text style={{ color: colors.PinkishOrange }} onPress={onClose}>Tutup</Text>
            </View>
            <View style={style.bankNameContainer}>
                <Text style={typography.HeaderTitle}>{capitalizeBankName(data.sender_bank)} <FontAwesome name='long-arrow-right' /> {capitalizeBankName(data.beneficiary_bank)}</Text>
            </View>
            <View style={style.body}>
                <View style={{ flex: 1 }}>
                    <View style={style.contentBody}>
                        <Text style={typography.ContentTitle}>{data.beneficiary_name}</Text>
                        <Text style={typography.Content}>{data.account_number}</Text>
                    </View>
                    <View style={style.contentBody}>
                        <Text style={typography.ContentTitle}>BERITA TRANSFER</Text>
                        <Text style={typography.Content}>{data.remark}</Text>
                    </View>
                    <View style={style.contentBody}>
                        <Text style={typography.ContentTitle}>WAKTU DIBUAT</Text>
                        <Text style={typography.Content}>{dateFormat(data.created_at)}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={style.contentBody}>
                        <Text style={typography.ContentTitle}>NOMINAL</Text>
                        <Text style={typography.Content}>{autoCurency(data.amount)}</Text>
                    </View>
                    <View style={style.contentBody}>
                        <Text style={typography.ContentTitle}>KODE UNIK</Text>
                        <Text style={typography.Content}>{data.unique_code}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        padding: spacing.s,
        backgroundColor: colors.White,
        borderBottomWidth: 1,
        borderColor: colors.VeryLightPink,
        flexDirection: 'row',
        alignItems: 'center'
    },
    body: {
        padding: spacing.s,
        flexDirection: 'row',
        backgroundColor: colors.White
    },
    bankNameContainer: {
        paddingHorizontal: spacing.s,
        paddingTop: spacing.s,
        borderTopWidth: 1,
        backgroundColor: colors.White,
        borderColor: colors.VeryLightPink
    },
    contentBody: {
        paddingVertical: spacing.xs
    }
})

DetailTransactionTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
}

export default DetailTransactionTemplate;