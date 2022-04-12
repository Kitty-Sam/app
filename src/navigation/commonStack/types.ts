import { TabStackParamList } from '../tabStack/types';

export type CommonStackParamList = {
  Error: undefined;
  Tab: TabStackParamList;
  Weather: { data?: any; title: string };
};
