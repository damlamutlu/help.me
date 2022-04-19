import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const StyledCheckBox = ({
  labelStyle,
  checkBoxLabel,
  checkboxName,
  checked,
  onChecked,
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              marginLeft:"10px",
              "&.Mui-checked": {
                color: '#ffe0cf',
              },
            }}
            onChange={(event) =>
              onChecked(event.target.name, event.target.checked)
            }
            name={checkboxName}
            checked={checked}
          />
        }
        label={<Typography sx={labelStyle}>{checkBoxLabel}</Typography>}
      />
    </FormGroup>
  );
};
export default StyledCheckBox;
