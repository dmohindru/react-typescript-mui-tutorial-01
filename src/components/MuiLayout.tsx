import { Box, Stack, Divider, Typography } from "@mui/material"

export const MuiLayout = () => {
    // Stack component is used one dimensional layout
    return (
        <>
        <Typography variant='subtitle1'>Direction row</Typography>
        <Stack 
            sx={{border: '1px solid'}} 
            direction='row' spacing={2}
            width='25%' 
            divider={<Divider orientation='vertical' flexItem />}> 
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '50px',
                width: '50px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>1</Box>
            <Box 
                display='flex' 
                height='50px' 
                width='50px' 
                bgcolor='success.light'
                p={2}
            >2</Box>
        </Stack> 
        <Typography variant='subtitle1'>Direction row reverse</Typography>
        <Stack 
            sx={{border: '1px solid'}} 
            direction='row-reverse' spacing={2}
            width='25%' 
            divider={<Divider orientation='vertical' flexItem />}> 
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '50px',
                width: '50px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>1</Box>
            <Box 
                display='flex' 
                height='50px' 
                width='50px' 
                bgcolor='success.light'
                p={2}
            >2</Box>
        </Stack>
        <Typography variant='subtitle1'>Direction column</Typography>
        <Stack 
            sx={{border: '1px solid'}} 
            direction='column' spacing={2} 
            width='25%'
            divider={<Divider orientation='horizontal' flexItem />}> 
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '50px',
                width: '50px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>1</Box>
            <Box 
                display='flex' 
                height='50px' 
                width='50px' 
                bgcolor='success.light'
                p={2}
            >2</Box>
        </Stack>
        <Typography variant='subtitle1'>Direction column reverse</Typography>
        <Stack 
            sx={{border: '1px solid'}} 
            direction='column-reverse' spacing={2} 
            width='25%'
            divider={<Divider orientation='horizontal' flexItem />}> 
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '50px',
                width: '50px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>1</Box>
            <Box 
                display='flex' 
                height='50px' 
                width='50px' 
                bgcolor='success.light'
                p={2}
            >2</Box>
        </Stack>  
        </>
    );
}