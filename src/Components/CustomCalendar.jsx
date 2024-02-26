import React from 'react';
import { InlineWidget } from 'react-calendly';

const CustomCalendar = () => {
  return (
    <div className="inline-widget">
     <InlineWidget
        url="https://calendly.com/aqsa-mac/macworld-technology-client-meet"
      />
    </div>
  );
};

export default CustomCalendar;
