import {
  showMessage as ShowMessage,
  hideMessage,
} from 'react-native-flash-message';

export const type = {
  ERROR: 'danger',
  SUCCESS: 'success',
};
const showMessage = (type, message) => {
  return ShowMessage({
    message,
    type,
  });
};

export default showMessage;
