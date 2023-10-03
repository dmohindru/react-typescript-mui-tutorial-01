import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true);
    return (
        // <Stack spacing={1}>
        //     <Skeleton variant='text' />
        //     <Skeleton variant='circular' width={40} height={40} animation={false} />
        //     <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
        // </Stack>

        <Box sx={{width: '250px'}}>
            {
                loading ? 
                    (<Skeleton variant='rectangular' width={256} height={144} animation='wave' />) :
                    (<img src='https://source.unsplash.com/random/256x144' alt='skeleton' width={256} height={144} />)
            }
            <Stack direction='row' spacing={1} sx={{width: '100%', marginTop: '12px' }}>
                {
                   loading ? 
                   (<Skeleton variant='circular' width={40} height={40} animation='wave' />) :
                    (<Avatar>V</Avatar>)
                }
                <Stack sx={{width:'80%'}}>
                    
                </Stack>
            </Stack>
        </Box>

    )
}