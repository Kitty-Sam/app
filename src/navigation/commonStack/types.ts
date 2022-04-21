import { TabStackParamList } from '../tabStack/types';

export type CommonStackParamList = {
  Error: undefined;
  Tab: TabStackParamList;
  Weather: { error?: boolean; title: string };
};
