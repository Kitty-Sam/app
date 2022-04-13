import { TabStackParamList } from '../tabStack/types';

export type CommonStackParamList = {
  Error: undefined;
  Tab: TabStackParamList;
  Weather: { info?: any; title: string };
};
