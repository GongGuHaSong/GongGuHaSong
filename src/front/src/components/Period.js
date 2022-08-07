import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components'
import '../css/Calendar.css'


function Period() {
  const [date, setDate] = useState(new Date());


  return (
      <div>
      <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }

      />
    </div>
  );
}

export default Period;

