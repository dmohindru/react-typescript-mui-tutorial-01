import { Box, TextField, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [multipleContries, setMultipleCountries] = useState<string[]>([]);
    console.log({ country });
    console.log({ multipleContries });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    };

    const handleMultipleContriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setMultipleCountries(typeof value === 'string' ? value.split(',') : value);
    };



    return (
        <Box width='250px'>
            <Typography variant='subtitle1'>Single select drop down</Typography>
            <TextField label ='Select country' select value={country} onChange={handleChange} fullWidth size='small' color='secondary' helperText='Please select your country'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austraila</MenuItem>
            </TextField>
            <Typography variant='subtitle1'>Multiselect drop down</Typography>
            <TextField label ='Select country' select value={multipleContries} onChange={handleMultipleContriesChange} fullWidth SelectProps={{multiple: true}}>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austraila</MenuItem>
            </TextField>
        </Box>

        
    )
}