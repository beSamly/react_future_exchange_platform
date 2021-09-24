import React, { useState } from 'react';
import useAgentToSend from './useAgentToSend';
import axios from 'axios';
import { AxiosRequest } from '../lib/axiosRequest';

type HandleSignUpInputType = {
    email: string;
    password: string;
    check_password: string;
    szFamilyName: string;
    szUserName: string;
    szNation_Name: string;
    szTelNo2: string;
};

type ReturnType = {
    handleSignUp: ({
        email,
        password,
        check_password,
        szFamilyName,
        szUserName,
        szNation_Name,
        szTelNo2,
    }: HandleSignUpInputType) => void;
    error: string | undefined;
    success: boolean;
    data: Record<string, string>;
};

const useSignUp = (): ReturnType => {
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState<boolean>(false);
    const [data, setData] = useState<Record<string, string>>({});

    const handleSignUp = async ({
        email,
        password,
        check_password,
        szFamilyName,
        szUserName,
        szNation_Name,
        szTelNo2,
    }) => {
        const params = {
            email,
            password,
            check_password,
            szFamilyName,
            szUserName,
            szNation_Name,
            szTelNo2,
        };
        console.log(`params in singu p : `, params);
        setSuccess(false);
        await AxiosRequest.post(`/sign_up`, params)
            .then((res) => {
                console.log(res.data);

                if (res.data.error) {
                    //do smt
                    console.log(`res.data.error!! : `, res.data.error);
                    setError(res.data.error);
                } else if (res.data.success) {
                    //do smt
                    setSuccess(true);
                    setData({
                        otp_img_data: res.data.otp_img_data,
                        otp_setup_key: res.data.otp_setup_key,
                    });
                    setError(undefined);
                }
            })
            .catch((err) => {
                console.log(`err in sign up : `, err.data);
                setError(err.data);
            });
    };

    return { handleSignUp, error, success, data };
};

export default useSignUp;
