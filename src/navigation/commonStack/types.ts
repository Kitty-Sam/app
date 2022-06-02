import { TabStackParamList } from '../tabStack/types';
import { COMMON_STACK_NAME } from '../../enum/enum';

export type CommonStackParamList = {
  [COMMON_STACK_NAME.TAB]: TabStackParamList;
  [COMMON_STACK_NAME.WEATHER]: { error?: boolean; title: string };
  [COMMON_STACK_NAME.PROFILE]: undefined;
};
