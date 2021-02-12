import React from 'react';
import { DetailTransactionTemplate } from '../../components/templates';

class DetailTransaction extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                detailTransaction: props.route.params.data
            }
    }

    render() {
        return (
            <DetailTransactionTemplate
                data={this.state.detailTransaction}
                onClose={() => this.props.navigation.goBack()} />
        )
    }
}

export default DetailTransaction;