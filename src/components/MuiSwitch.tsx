import { Box, FormControlLabel, Switch, FormControl, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    const [lights, setLights] = useState<string[]>([]);
    console.log({checked});
    console.log({lights});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    const handleLightControl = (event: React.ChangeEvent<HTMLInputElement>) => {

        // Logic here is if the recieved value in not in lights array
        // Then we add it to the array
        // Otherwise we remove the value from array
        
        const index = lights.indexOf(event.target.value);
        if (index === -1) {
            setLights([...lights, event.target.value]);
        } else {
            setLights(lights.filter((skill) => skill !== event.target.value));
        } 
    }

    return (
        <Box>
            <Box>
                <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success'/>}/> 
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Lights Control</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='Living Room'
                            value='living-room'
                            control={<Switch checked={lights.includes('living-room')} onChange={handleLightControl} />}
                        />
                        <FormControlLabel
                            label='Bed Room'
                            value='bed-room'
                            control={<Switch checked={lights.includes('bed-room')} onChange={handleLightControl} />}
                        />
                        <FormControlLabel
                            label='Kitchen'
                            value='kitchen'
                            control={<Switch checked={lights.includes('kitchen')} onChange={handleLightControl} />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
}