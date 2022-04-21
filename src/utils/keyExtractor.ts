import { DataItemType } from '../screens/ListCitiesScreen/types';

type itemPropsType = DataItemType;

export const keyExtractor = (item: itemPropsType) => {
  return item.id.toString();
};
