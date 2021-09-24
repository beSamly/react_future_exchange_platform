import React from 'react';
import styled from 'styled-components';
import UsersCoinList from './UsersCoinList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
// import * as TRANSLATOR from '../../../../Translator/OrderTab';
import * as LANGUAGE from '../../../constants/Language';
import CoinToPoint from './CoinToPoint';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';

const getPointToCoinText = (language) => {
    switch (language) {
        case LANGUAGE.KOREAN:
            return 'Point -> 환전통화';
        case LANGUAGE.ENGLISH:
            return 'Point -> Coin';
        default:
            return 'Point -> 환전통화';
    }
};
const getCoinToPointText = (language) => {
    switch (language) {
        case LANGUAGE.KOREAN:
            return '환전통화 -> Point';
        case LANGUAGE.ENGLISH:
            return 'Coin -> Point';
        default:
            return '환전통화 -> Point';
    }
};

const ExchangeForm = () => {
    const [isCoinToPoint, setIsCoinToPoint] = useState(false);

    const { currentLanguage } = useCurrentLanguage();

    const handleClick = (e) => {
        setIsCoinToPoint(e.target.value === 'coin-to-point' ? true : false);
    };

    return (
        <div>
            <Grid container justify="center">
                <RadioGroup onChange={handleClick}>
                    <Grid container>
                        <StFormControlLabel
                            value={'point-to-coin'}
                            control={<Radio />}
                            label={getPointToCoinText(currentLanguage)}
                            checked={isCoinToPoint === false ? true : false}
                        />
                        <StFormControlLabel
                            value={'coin-to-point'}
                            checked={isCoinToPoint ? true : false}
                            control={<Radio />}
                            label={getCoinToPointText(currentLanguage)}
                        />
                    </Grid>
                </RadioGroup>
            </Grid>

            {isCoinToPoint ? <CoinToPoint /> : <CoinToPoint />}
        </div>
    );
};

export default ExchangeForm;

const StFormControlLabel = styled(FormControlLabel)`
    color: #000000 !important;
    span {
        font-size: 14px !important;
    }

    span:first-child {
        color: #5461bd !important;
    }
`;
