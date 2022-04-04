import { APP_SET_STATUS, RequestStatusType } from '../reducers/appReducer';

export const toggleAppStatusAC = (status: RequestStatusType) => ({
  type: APP_SET_STATUS,
  status,
});
