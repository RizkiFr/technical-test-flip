import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ModalFilter } from '../../atoms';
import { colors, spacing, typography, } from '../../../styles';
import { filtersearch } from '../../../constants';

export const SearchInput = ({ value, onChangeText, placeholder, style, onFilterSelected }) => {

    const [filterVisible, setFilterVisible] = useState(false)
    const [filterSelected, setFilterSelected] = useState(filtersearch[0])

    const containerStyle = {
        backgroundColor: colors.White,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.xs
    }
    const textInputStyle = {
        flex: 1,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.xs,
        color: colors.CharcoalGrey,
    }

    const textFilterContainer = {
        ...typography.ContentTitle,
        color: colors.PinkishOrange,
    }

    const filterContainerStyle = {
        alignItems: 'center',
        flexDirection: 'row'
    }

    const handleOnSelect = (v) => {
        setFilterSelected(v)
        setFilterVisible(false)
        onFilterSelected(v)
    }

    return (
        <View style={style}>
            <View style={containerStyle}>
                <Ionicons name={'search'} color={colors.PaleTeal} size={spacing.m} />
                <TextInput value={value} style={textInputStyle} onChangeText={v => onChangeText(v)} placeholder={placeholder} placeholderTextColor={colors.PaleTeal} />
                <TouchableOpacity style={filterContainerStyle} activeOpacity={0.7} onPress={() => setFilterVisible(true)}>
                    <Text style={textFilterContainer}>{filterSelected.label}</Text>
                    <Ionicons name='chevron-down' size={spacing.m} color={colors.PinkishOrange} />
                </TouchableOpacity>
            </View>
            <ModalFilter
                data={filtersearch}
                visible={filterVisible}
                selected={filterSelected}
                onRequestClose={() => setFilterVisible(false)}
                onSelect={handleOnSelect}
            />
        </View>
    )
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    onFilterSelected: PropTypes.func.isRequired,
    style: PropTypes.object
}