import { TabStackParamList } from '../tabStack/types';

export type CommonStackParamList = {
  Error: undefined;
  Tab: TabStackParamList;
  Weather: { error?: boolean; info?: any; title: string };
};
