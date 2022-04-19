import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const IconTextField = ({textFieldLabel , textFielType , iconComponent ,textFieldStyle , onChangeHandler ,textFieldValue , placeholder}) => {

    return(      
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
    {iconComponent}
    <TextField
      label={textFieldLabel}
      variant="standard"
      type={textFielType}
      onChange={(event) => onChangeHandler(event.target.value)}
      value={textFieldValue}
      sx={textFieldStyle}
      autoComplete="false"
      placeholder={placeholder}
    />
    </Box>);

} 
export default IconTextField;