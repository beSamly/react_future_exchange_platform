import React from 'react';
import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core/';
const QRCode = ({ data, setOpened }) => {
    console.log(`data ! : `, data);
    const { otp_img_data, otp_setup_key } = data;

    const handleClose = () => {
        setOpened(false);
    };

    return (
        <QRCodeWrapper>
            <Wrapper>
                <div>
                    <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                        <img src={otp_img_data} />
                    </div>
                    <div style={{ width: 220, height: 20, textAlign: 'center' }}>{otp_setup_key}</div>
                </div>
            </Wrapper>
            F
            <Grid container justify="flex-end">
                <Button onClick={handleClose}>close</Button>
            </Grid>
        </QRCodeWrapper>
    );
};

export default QRCode;

const QRCodeWrapper = styled.div`
    background-color: white;
    border-radius: 4px;
    padding: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* height: 800px; */
    /* width: 400px; */
    color: black;
`;
