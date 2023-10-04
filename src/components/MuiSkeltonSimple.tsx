import { Stack, Skeleton } from "@mui/material";

export const MuiSkeletonSimple = () => {
    return (
         <Stack spacing={1}>
            <Skeleton variant='text' />
            <Skeleton variant='circular' width={40} height={40} animation={false} />
            <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
        </Stack>
    );
}