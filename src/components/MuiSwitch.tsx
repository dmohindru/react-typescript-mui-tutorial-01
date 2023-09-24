import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    console.log({checked});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    // TODO build an example of Switch component with FormGroup as done in MuiCheckbox component

    return (
        <Box>
           <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success'/>}/> 
        </Box>
    );
}