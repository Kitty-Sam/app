import { DataItemType } from '../screens/ListCitiesScreen/types';
import { NotificationItemType } from '../screens/NotificationsSCreen/types';

type itemPropsType = DataItemType | NotificationItemType;

export const keyExtractor = (item: itemPropsType) => {
  return item.id.toString();
};
