import { Box, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = 
[150, 30, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

export const MuiMasonry = () => {
    return (
        <Box sx={{ width: 500, minHeight: 400 }}>MuiMasonry
            <Masonry columns={4} spacing={1}>
                {
                    heights.map((height, index) => (
                        <Paper 
                            key={index} 
                            sx={{
                                // dispaly: 'flex', 
                                // justifyContent: 'center', 
                                // alignItems: 'center', 
                                // height, 
                                border: '1px solid'}}>
                            {/* { index + 1} */}
                            <Accordion sx={{ minHeight: height}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Accordion</AccordionSummary>
                                <AccordionDetails>Contents</AccordionDetails>
                            </Accordion>
                        </Paper>
                    ))
                }
            </Masonry>
        </Box>
        
    )
}