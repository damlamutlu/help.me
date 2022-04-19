import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  customOutline: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ffe0cf"
      }
    },
    "& label.Mui-focused": {
      color: "#ffe0cf"

    }
  }
});
const Dorpdown = ({ list, dropdownLabel , onSelectHandler ,selectedValue }) => {

  const classes = useStyles();
  return (
    <FormControl fullWidth         variant="outlined"
    className={classes.customOutline}>
      <InputLabel  id="label">{dropdownLabel}</InputLabel>
      <Select
        labelId="label"
        sx={{ display: "flex", width: "25%", margin: "2px" }}
        value={selectedValue}
        label={dropdownLabel}
        onChange={(event) => onSelectHandler(event.target.value)}
      >
        {list && list.map((item,index) => {
          return <MenuItem key={index} value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};
export default Dorpdown;
