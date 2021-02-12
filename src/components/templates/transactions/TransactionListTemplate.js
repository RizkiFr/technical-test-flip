import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { styles } from '../../../styles';
import { Loading } from '../../atoms';
import { TransactionCard, SearchInput } from '../../molecules';
import { filterAscending, filterDescending } from '../../../utils';

const TransactionListTemplate = (props) => {

    const [searchKey, setSearchKey] = useState('')
    const [searchFilter, setSearchFilter] = useState({})

    const filterTransaction = (data) => {
        const key = searchKey.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()
        const filtered = data.filter(v => (
            v.beneficiary_name.toLowerCase().match(key) ||
            v.sender_bank.toLowerCase().match(key) ||
            v.beneficiary_bank.toLowerCase().match(key) ||
            v.amount.toString().match(key)
        ))
        if (searchFilter.type == 'ascending') {
            return filterAscending(filtered, searchFilter)
        } else if (searchFilter.type == 'descending') {
            return filterDescending(filtered, searchFilter)
        }
        return filtered
    }

    const renderTransaction = useCallback(({ item }) => {
        return (
            <TransactionCard data={item} onPress={() => props.onTransactionPress(item)} />
        )
    }, [])

    return (
        <View style={styles.container}>
            <SearchInput
                placeholder='Cari nama, bank, atau nominal'
                style={{ marginBottom: 10 }}
                onChangeText={v => setSearchKey(v)}
                onFilterSelected={v => setSearchFilter(v)}
            />
            <FlatList
                data={filterTransaction(props.data)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderTransaction}
            />
            <Loading loading={props.loading} />
        </View>
    )
}

TransactionListTemplate.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onTransactionPress: PropTypes.func.isRequired
}

export default memo(TransactionListTemplate);