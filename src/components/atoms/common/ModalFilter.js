import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colors, spacing, styles, typography } from '../../../styles';
import { Card } from './Card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const ModalFilter = (props) => {

    const renderFilterList = ({ item }) => {
        const isSelected = item.label == props.selected.label
        return (
            <TouchableOpacity style={style.listItemContainer} onPress={() => props.onSelect(item)}>
                <FontAwesome name={`${isSelected ? 'dot-' : ''}circle-o`} color={colors.PinkishOrange} style={{ marginRight: spacing.xs }} size={spacing.s + spacing.xxs} />
                <Text style={typography.Content}>{item.label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Modal
            visible={props.visible}
            transparent
            animationType='fade'
            onRequestClose={props.onRequestClose}
        >
            <TouchableWithoutFeedback onPress={props.onRequestClose}>
                <View style={style.backdrop}>
                    <Card style={style.container}>
                        <FlatList
                            data={props.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderFilterList}
                        />
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {

    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: spacing.m,
        justifyContent: 'center'
    },
    listItemContainer: {
        ...styles.containerRow,
        paddingVertical: spacing.s
    }
})

ModalFilter.propTypes = {
    visible: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
}