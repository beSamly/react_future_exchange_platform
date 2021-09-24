import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { convertDateToString } from '../../lib/formatCalendarDate';

const Calendar = ({ label = '날짜', handleDateSelect }) => {
    const handleClick = (value) => {
        setDate(value);
        setOpened(false);
        handleDateSelect(convertDateToString({ date: value }));
    };

    const [date, setDate] = useState();
    const [opened, setOpened] = useState(false);

    const handleOpenCalendar = () => {
        setOpened(true);
    };

    return (
        <div>
            <TextField
                fullWidth
                // width={200}
                label={label}
                margin="normal"
                variant="outlined"
                focused={date ? true : false}
                value={date ? convertDateToString({ date, withDash: true }) : ''}
                onClick={handleOpenCalendar}
            />

            {opened && (
                <CalendarWrapper>
                    <ReactCalendar maxDate={new Date()} onChange={handleClick} value={date} />
                </CalendarWrapper>
            )}
        </div>
    );
};

export default Calendar;

const CalendarWrapper = styled.div`
    background: grey;
    position: absolute;
    right: 0;
`;
