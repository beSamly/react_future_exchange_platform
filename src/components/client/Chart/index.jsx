import React from 'react';
import Chart from './Chart';
import useScreenSize from '../../../hooks/useScreenSize';

export default function Index() {
    const { isMobile } = useScreenSize();

    const MobileStyle = {
        height: '100%',
        maxHeight: '100%',
        minHeight: '100%',
        overflow: 'auto',
        width: '100%',
    };

    const style = {
        width: '569px',
        height: '446px',
        borderRadius: '6px',
        border: '1px solid #e3e3e3',
        marginRight: '15px',
    };

    return (
        <div style={!isMobile ? style : MobileStyle}>
            <Chart />
        </div>
    );
}
