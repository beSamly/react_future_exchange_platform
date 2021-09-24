import React from 'react';
import styled from 'styled-components';
import useCoinRate from '../../../hooks/useCoinRate';
import BaseTable from '../../common/BaseTable';

const CoinRateList = ({ symbol = 'BTC' }) => {
    const { data, dataColumn } = useCoinRate({ symbol });

    return (
        <div>
            <BaseTable data={data} dataColumn={dataColumn} maxWidth="100%" maxHeight={660} disableClick={true} />
        </div>
    );
};

export default CoinRateList;
