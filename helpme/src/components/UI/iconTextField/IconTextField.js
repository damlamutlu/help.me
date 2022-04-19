import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const IconTextField = ({textFieldLabel , textFielType , iconComponent ,textFieldStyle , onChangeHandler ,textFieldValue , placeholder ,helperText=""}) => {
  const style = {
    "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
    "& label.Mui-focused": {
      color:"#ffe0cf",
    },
  }

    const textFieldStyleDynamic = textFieldStyle !== undefined ? textFieldStyle : style;
    const error = helperText === "" ? false : true;

    return(      
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
    {iconComponent}
    <TextField
      label={textFieldLabel}
      variant="standard"
      type={textFielType}
      onChange={(event) => onChangeHandler(event.target.value)}
      value={textFieldValue}
      sx={textFieldStyleDynamic}
      autoComplete="false"
      placeholder={placeholder}
      helperText={helperText}
      error={error}
    />
    </Box>);

} 
export default IconTextField;