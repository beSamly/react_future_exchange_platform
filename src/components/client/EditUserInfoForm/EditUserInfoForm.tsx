import React, { useEffect } from 'react';
import useEditUserInfo from '../../../hooks/useEditUserInfo';
import CustomCombo from '../../common/CustomCombo';
import { Button } from '@material-ui/core';
import UserInfoForm from './UserInfoForm';
import useUsersData from '../../../hooks/useUserData';

const options = [
    {
        label: 'label1',
        value: 'value1',
    },
    {
        label: 'label2',
        value: 'value2',
    },
];

const EditUserInfoForm = () => {
    const { result, sendTrToGetUserInfo } = useEditUserInfo();
    const { isLoggedIn } = useUsersData();
    console.log(`this is result : `, result);

    const onChange = (value) => {
        //awefawef
    };

    useEffect(() => {
        isLoggedIn && sendTrToGetUserInfo();
    }, [isLoggedIn]);

    const handleClick = () => {
        sendTrToGetUserInfo();
    };

    return (
        <div>
            edit ucsotmer info form
            <Button variant="contained" color="primary" onClick={handleClick}>
                조회
            </Button>
            <UserInfoForm userInfo={result} />
            <div style={{ width: 300 }}>
                <CustomCombo options={options} onChange={onChange} />
            </div>
        </div>
    );
};

export default EditUserInfoForm;
