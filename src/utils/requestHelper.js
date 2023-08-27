import {USER_NOT_FOUND} from '../constants/strings';
import {responsehandler} from './responsehandler';
import showMessage, {type} from './showMessage';

export const requestHelper = (
  response,
  setMessage,
  setError,
  setLoading,
  setLocalStateData,
  setData,
  globalStateUpdater,
  dispatch,
  setIsSuccessful,
) => {
  if (responsehandler(response)) {
    if (!response?.data?.message || response?.data?.message === '') {
      return;
    }
    if (
      !response?.data?.message
        ?.toUpperCase()
        ?.includes(USER_NOT_FOUND.toUpperCase())
    ) {
      showMessage(type.ERROR, response?.data?.message);
    }
    setMessage(response?.data?.message);
    setError(response?.message);
    setLoading(false);
    return response?.data;
  }

  if (setLocalStateData) {
    setData(response?.data?.data);
  }

  if (globalStateUpdater) {
    dispatch(globalStateUpdater(response?.data?.data));
  }

  if (response?.data?.success) {
    setIsSuccessful(true);
  }

  setMessage(response?.data?.message);
  setLoading(false);
  return response?.data;
};
