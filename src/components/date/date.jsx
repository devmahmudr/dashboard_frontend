import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateComponent({ onDateChange,value }) {
  const handleDateChange = (date) => {
    const originalDate = new Date(date.$d);
    const dateOnly = originalDate.toDateString();
    value = dateOnly
    onDateChange(dateOnly);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DateTimePicker",
          "MobileDateTimePicker",
          "DesktopDateTimePicker",
          "StaticDateTimePicker",
        ]}
      >
        <DemoItem label="Next work day">
          <DateTimePicker
            defaultValue={dayjs("2022-04-17T15:30")}
            onChange={handleDateChange}
            value={value}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
