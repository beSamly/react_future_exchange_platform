import React from 'react';
import MessageBox from './MessageBox';
import useData from './useData';

export default function Index() {
    const { data } = useData();
    const reversedData = [...data].reverse();
    return <MessageBox data={reversedData} />;
}
