import { Box, Stack, Divider, Grid, Typography, Paper } from "@mui/material"

export const MuiLayoutGrid = () => {
    // Grid component is used for two dimensional layout
    return (
        <Paper sx={{padding: '32px'}} elevation={4}>
            <Stack 
                sx={{border: '1px solid'}} 
                direction='row' spacing={2}
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
            <Typography variant='subtitle1'>Grid Layout 1</Typography>
            <Grid container my={2} spacing={1}>
                <Grid item xs={12} sm={9}>
                    <Box bgcolor='primary.light' p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box bgcolor='primary.light' p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box bgcolor='primary.light' p={2}>Item 3</Box>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Box bgcolor='primary.light' p={2}>Item 4</Box>
                </Grid>
            </Grid>
            <Typography variant='subtitle1'>Grid Layout 2</Typography>
            <Grid container my={2} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>Item 3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>Item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    );
}