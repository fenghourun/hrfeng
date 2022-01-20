import BlochSphereRender from '@apps/quantum/blochSphere/BlochSphereRender';
import BLochSphereControls from '@apps/quantum/blochSphere/BlochSphereControl';
import BlochSphereDescription from '@apps/quantum/blochSphere/BlochSphereDescription';

import { Grid, Paper } from '@mui/material';

import Typography from '@mui/material/Typography';

import create, { GetState, SetState } from 'zustand';
import { StoreApiWithSubscribeWithSelector, subscribeWithSelector } from 'zustand/middleware';

import { useEffect } from 'react';

// Store phi and theta in radians
type StoreState = {
  phi: number;
  theta: number;
};

const useStore = create<
  StoreState,
  SetState<StoreState>,
  GetState<StoreState>,
  StoreApiWithSubscribeWithSelector<StoreState>
>(
  subscribeWithSelector(() => ({
    phi: 0,
    theta: 0,
  })),
);

const BlochSpherePage = () => {
  console.log('BlochSphere.tsx useEffect[] mounted ');
  useEffect(() => {
    return () => {
      console.log('BlochSphere.tsx useEffect[] unmounted');
      useStore.destroy();
    };
  }, []);

  return (
    <>
      <Grid item p={10}>
        <Typography variant="h1"> The Bloch Sphere </Typography>
      </Grid>
      <Grid container item direction="row" justifyContent="center" columnSpacing={2} p={10}>
        <Grid container item xs={8} sx={{ padding: '0.5em' }}>
          <BlochSphereRender />
        </Grid>
        <Grid container item xs={4}>
          <Paper elevation={1} sx={{ height: 1, padding: '1em' }}>
            <BLochSphereControls />
          </Paper>
        </Grid>

        <Grid container item xs={12} sx={{ padding: '1em', height: 1 }} p={10}>
          <BlochSphereDescription />
        </Grid>
      </Grid>
    </>
  );
};

export { useStore };
export default BlochSpherePage;