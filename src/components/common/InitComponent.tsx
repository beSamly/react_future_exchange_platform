import React from 'react';
import useInit from '../../hooks/useInit';
import useInitUponSymbolSelection from '../../hooks/useInitUponSymbolSelection';
import useRegisterSpots from '../../hooks/useRegisterSpots';

const InitComponent = () => {
    const {} = useInit();
    const {} = useInitUponSymbolSelection();
    const {} = useRegisterSpots();

    return <></>;
};

export default InitComponent;
