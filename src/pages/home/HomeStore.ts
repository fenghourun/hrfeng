import { MotionValue } from 'framer-motion';
import create, { type SetState, type GetState } from 'zustand';
import shallow from 'zustand/shallow';


import {
  type StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from 'zustand/middleware';

type HomePageStoreState = {
  scrollPosition: MotionValue<number>;
  loadingProgress: number;
};

export const useHomePageStore = create<
  HomePageStoreState,
  SetState<HomePageStoreState>,
  GetState<HomePageStoreState>,
  StoreApiWithSubscribeWithSelector<HomePageStoreState>
>(
  subscribeWithSelector(() => ({
    scrollPosition: new MotionValue<number>(),
    loadingProgress: 0,
  })),
);

const useHomePageControls = () => {
  const controls = useHomePageStore(
    (state) => ({
      loadingProgress: state.loadingProgress,
      scrollPosition: state.scrollPosition,
    }),
    shallow,
  );

  return controls;
};

export { useHomePageControls };
export default useHomePageStore;
