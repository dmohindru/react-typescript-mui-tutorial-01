
import { Box, Tab, Tabs } from "@mui/material"
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from "react"
export const MuiExamples : React.FC = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
    
    return (
        <Box sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex'
        }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="vertical tabs example"
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Accordian" />
                <Tab label="Alert" />
                <Tab label="Auto Complete" />
            </Tabs>
        </Box>
        
    )

}