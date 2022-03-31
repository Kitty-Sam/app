import { TabStackParamList } from '../tabStack/types';

export type CommonStackParamList = {
  Notifications: { title: string };
  Tab: TabStackParamList;
  Weather: { selectedIds: number[]; title: string };
};
