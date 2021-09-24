import React from 'react';
import CustomInput, { TypeEnum } from '../../common/CustomInput';

type PropsType = {
    userInfo: Array<Record<string, string | number>>;
};

const UserInfoForm = ({ userInfo }: PropsType) => {
    return (
        <div>
            {Object.keys(userInfo).map((key, index) => (
                // <div key={index}>{key}</div>
                <CustomInput
                    key={index}
                    label={key}
                    type={TypeEnum.ReadOnly}
                    readOnlyValue={userInfo[key]}
                    // color={'blue'}
                />
            ))}
        </div>
    );
};

export default UserInfoForm;
