import React from 'react';
import { useSelector } from 'react-redux';
import BaseTable from '../../../common/BaseTable';
import LogInRequired from '../../../common/LogInRequired';
import useData from './useData';
import { style, mobileStyle } from '../common/tableStyle';
import useScreenSize from '../../../../hooks/useScreenSize';

const Index = () => {
    const { data, dataColumn } = useData();
    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

    const { isMobile } = useScreenSize();

    const positionDetailProps = { data, dataColumn };

    const styleProps = isMobile ? mobileStyle : style;

    const logInStyleProps = isMobile
        ? {
              width: '100%',
              height: '200px',
          }
        : {};

    return isLoggedIn ? <BaseTable {...positionDetailProps} {...styleProps} /> : <LogInRequired {...logInStyleProps} />;
};

export default Index;
