import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import text from '../../../assets/text/blochSphereText';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} component="div">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} component="div">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} component="div">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Background" {...a11yProps(1)} />
          <Tab label="Parameters" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Container fixed>
          <h1> Overview </h1>
          <p className="explain">{text}</p>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container fixed>
          <h1> Parameters </h1>
          <p className="explain">beans</p>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container fixed>
          <h1> Background </h1>
          <p className="explain">{text}</p>
        </Container>
      </TabPanel>
    </Box>
  );
}