import React from "react";
import "./Calender.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";

const Calender = ({ date, onChangeHandler }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ffe0cf",
                },
              },
              "& label.Mui-focused": {
                color: "#ffe0cf",
              },
            }}
            {...props}
          />
        )}
        label="Tarih ve Saat"
        value={date}
        onChange={(newDate) => onChangeHandler(newDate)}/>
    </LocalizationProvider>
  );
};
export default Calender;
