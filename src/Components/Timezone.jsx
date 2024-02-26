import React from "react";
import moment from "moment-timezone";

const Timezone = ({ value, onChange }) => {
  const timeZones = moment.tz.names();

  const options = timeZones.map((tz) => ({
    label: tz,
    value: tz,
  }));

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="w-[90%] rounded-lg bg-neutral-100 p-2">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Timezone;
