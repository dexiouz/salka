import {StyleSheet} from 'react-native';
import {IS_DARK} from '../../constants/Layouts';

const cardLight = '#F7F7FC';
const cardDark = '#252525';
export const ELEVATION = 3;
export const SHADOW_COLOR = IS_DARK
  ? 'rgba(255,255,255,0.40)'
  : 'rgba(0, 0, 0, 0.60)';
export const SHADOW_OFFSET_WIDTH = 1;
export const SHADOW_OFFSET_HEIGHT = 3;
export const SHADOW_RADIUS = 1;
export const SHADOW_OPACITY = 0.2;

export default StyleSheet.create({
  card: {
    backgroundColor: IS_DARK ? cardDark : cardLight,
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: SHADOW_OFFSET_WIDTH,
      height: SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: SHADOW_RADIUS,
    shadowOpacity: SHADOW_OPACITY,
    elevation: ELEVATION,
  },
  carouselCard: {
    backgroundColor: IS_DARK ? cardDark : cardLight,
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: SHADOW_OFFSET_WIDTH,
      height: SHADOW_OFFSET_HEIGHT,
    },
    shadowRadius: SHADOW_RADIUS,
    shadowOpacity: SHADOW_OPACITY,
    elevation: ELEVATION,
  },

  // eslint-disable-next-line react-native/no-color-literals
  none: {
    backgroundColor: IS_DARK ? cardDark : cardLight,
    shadowColor: null,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: IS_DARK ? cardDark : cardLight,
    overflow: 'hidden',
  },
  flexWrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: IS_DARK ? cardDark : cardLight,
    flex: 1,
    overflow: 'hidden',
  },
});
