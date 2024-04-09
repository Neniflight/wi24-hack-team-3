"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './calendar.module.css';


function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    // Handle date click here, for example, navigate to a link
    const formattedDate = formatDate(date); // You may need to format the date as needed
    window.location.href = `/home`;
  };

  const formatDate = (date) => {
    // Format the date as needed, for example, YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className={styles.customCalendar}>
            <Calendar
                calendarType='gregory'
                onChange={setSelectedDate}
                value={selectedDate}
                onClickDay={handleDateClick}
            />
    </div>
  );
}

export default MyCalendar;