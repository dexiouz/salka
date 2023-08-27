import {
  IS_ANDROID,
  IS_DARK,
  IS_LARGE_SCREEN,
  SPACE_LARGE,
} from '../../constants/Layouts';

const headerStyleApp = {
  headerShadowVisible: false,
  backgroundColor: IS_DARK ? '#000000' : '#FFFFFF',
  shadowColor: 'transparent',
  height: IS_LARGE_SCREEN && !IS_ANDROID ? 100 : 65,
};

export const STANDARD_HEADER_APP = {
  headerBackTitleVisible: true,
  headerStyle: headerStyleApp,
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTintColor: IS_DARK ? '#FFFFFF' : '#000000',
  title: '',
};
