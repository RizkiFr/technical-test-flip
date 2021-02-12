import React from 'react';
import axios from 'axios';
import { TransactionListTemplate } from '../../components/templates';
import Toast from 'react-native-simple-toast';

class TransactionList extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                transactionList: [],
                loading: false
            }
    }

    componentDidMount() {
        this.getTransactionList()
    }

    getTransactionList = () => {
        this.setState({ loading: true })
        axios.get(`https://nextar.flip.id/frontend-test`)
            .finally(() => this.setState({ loading: false }))
            .then(res => {
                const transactionList = Object.keys(res.data).map(key => res.data[key])
                this.setState({ transactionList })
            }).catch(() => {
                Toast.show('Terjadi kendala teknis, mohon tunggu beberapa saat.', Toast.LONG)
            })
    }

    render() {
        const { transactionList, loading } = this.state
        return (
            <TransactionListTemplate
                data={transactionList}
                loading={loading}
                onTransactionPress={data => this.props.navigation.navigate('DetailTransaction', { data })} />
        )
    }
}

export default TransactionList;