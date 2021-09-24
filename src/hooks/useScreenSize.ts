import React from 'react';
import DEVICE_SIZE from '../constants/DeviceSize';
import { useTypedSelector } from '../states/useTypedSelector';

const useScreenSize = (): {
    isMobile: boolean;
} => {
    const currentScreenSize = useTypedSelector((state) => state.userReducer.screenSize);
    const isMobile = currentScreenSize === DEVICE_SIZE.MOBILE;
    return { isMobile };
};

export default useScreenSize;
