
import { Box, Tab, Tabs, Typography } from "@mui/material"
//import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from "react"
import { MuiAccordion } from "./MuiAccordion";
import { MuiAlert } from "./MuiAlert";
import { MuiAutocomplete } from "./MuiAutocomplete";
import { MuiAvatar } from "./MuiAvatar";
import { MuiBadge } from "./MuiBadge";
import { MuiBottomNavigation } from "./MuiBottomNavigation";
import { MuiBreadcrumbs } from "./MuiBreadcrumbs";
import { MuiButton } from "./MuiButton";
import { MuiCard } from "./MuiCard";
import { MuiCheckbox } from "./MuiCheckbox";
import { MuiChip } from "./MuiChip";
import { MuiDialog } from "./MuiDialog";
import { MuiDrawer } from "./MuiDrawer";
import { MuiImageList } from "./MuiImageList";
import { MuiLayout } from "./MuiLayout";
import { MuiLayoutGrid } from "./MuiLayoutGrid";
import { MuiLink } from "./MuiLink";
import { MuiList } from "./MuiList";
import { MuiLoadingButton } from "./MuiLoadingButton";
import { MuiMasonry } from "./MuiMasonry";
import { MuiNavbar } from "./MuiNavbar";
import { MuiPicker } from "./MuiPicker";
import { MuiProgress } from "./MuiProgress";
import { MuiRadioButton } from "./MuiRadioButton";
import { MuiRating } from "./MuiRating";
import { MuiSelect } from "./MuiSelect";
import { MuiSkeleton } from "./MuiSkeleton";
import { MuiSkeletonSimple } from "./MuiSkeltonSimple";
import { MuiSnakbar } from "./MuiSnakbar";
import { MuiSpeedDial } from "./MuiSpeedDial";
import { MuiSwitch } from "./MuiSwitch";
import { MuiTable } from "./MuiTable";
import { MuiTextField } from "./MuiTextField";
import { MuiTimeline } from "./MuiTimeline";
import { MuiTooltip } from "./MuiTootip";
import { MuiTypography } from "./MuiTypography";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
export const MuiExamples : React.FC = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
                <Tab label="Avatar" />
                <Tab label="Badge" />
                <Tab label="Bottom Navigation" />
                <Tab label="Bread Crumbs" />
                <Tab label="Buttons" />
                <Tab label="Card" />
                <Tab label="Checkbox" />
                <Tab label="Chip" />
                <Tab label="Dialog" />
                <Tab label="Drawer" />
                <Tab label="Image List" />
                <Tab label="Layout" />
                <Tab label="Layout Grid" />
                <Tab label="Link" />
                <Tab label="List" />
                <Tab label="Loading Button" />
                <Tab label="Masonry" />
                <Tab label="Navbar" />
                <Tab label="Picker" />
                <Tab label="Progress" />
                <Tab label="Radio Button" />
                <Tab label="Rating" />
                <Tab label="Select" />
                <Tab label="Skeleton" />
                <Tab label="Skeleton Simple" />
                <Tab label="Snak Bar" />
                <Tab label="Speed Dial" />
                <Tab label="Switch" />
                <Tab label="Table" />
                <Tab label="Textfield" />
                <Tab label="Timeline" />
                <Tab label="Tooltip" />
                <Tab label="Typography" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <MuiAccordion />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MuiAlert />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MuiAutocomplete />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MuiAvatar />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <MuiBadge />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <MuiBottomNavigation />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <MuiBreadcrumbs />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <MuiButton />
            </TabPanel>
            <TabPanel value={value} index={8}>
                <MuiCard />
            </TabPanel>
            <TabPanel value={value} index={9}>
                <MuiCheckbox />
            </TabPanel>
            <TabPanel value={value} index={10}>
                <MuiChip />
            </TabPanel>
            <TabPanel value={value} index={11}>
                <MuiDialog />
            </TabPanel>
            <TabPanel value={value} index={12}>
                <MuiDrawer />
            </TabPanel>
            <TabPanel value={value} index={13}>
                <MuiImageList />
            </TabPanel>
            <TabPanel value={value} index={14}>
                <MuiLayout />
            </TabPanel>
            <TabPanel value={value} index={15}>
                <MuiLayoutGrid />
            </TabPanel>
            <TabPanel value={value} index={16}>
                <MuiLink />
            </TabPanel>
            <TabPanel value={value} index={17}>
                <MuiList />
            </TabPanel>
            <TabPanel value={value} index={18}>
                <MuiLoadingButton />
            </TabPanel>
            <TabPanel value={value} index={19}>
                <MuiMasonry />
            </TabPanel>
            <TabPanel value={value} index={20}>
                <MuiNavbar />
            </TabPanel>
            <TabPanel value={value} index={21}>
                <MuiPicker />
            </TabPanel>
            <TabPanel value={value} index={22}>
                <MuiProgress />
            </TabPanel>
            <TabPanel value={value} index={23}>
                <MuiRadioButton />
            </TabPanel>
            <TabPanel value={value} index={24}>
                <MuiRating />
            </TabPanel>
            <TabPanel value={value} index={25}>
                <MuiSelect />
            </TabPanel>
            <TabPanel value={value} index={26}>
                <MuiSkeleton />
            </TabPanel>
            <TabPanel value={value} index={27}>
                <MuiSkeletonSimple />
            </TabPanel>
            <TabPanel value={value} index={28}>
                <MuiSnakbar />
            </TabPanel>
            <TabPanel value={value} index={29}>
                <MuiSpeedDial />
            </TabPanel>
            <TabPanel value={value} index={30}>
                <MuiSwitch />
            </TabPanel>
            <TabPanel value={value} index={31}>
                <MuiTable />
            </TabPanel>
            <TabPanel value={value} index={32}>
                <MuiTextField />
            </TabPanel>
            <TabPanel value={value} index={33}>
                <MuiTimeline />
            </TabPanel>
            <TabPanel value={value} index={34}>
                <MuiTooltip />
            </TabPanel>
            <TabPanel value={value} index={35}>
                <MuiTypography />
            </TabPanel>
        </Box>
        
    )

}