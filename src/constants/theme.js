const commonColors = {
  colors: {
    primary: '#7851a9',
    black: '#000000',
    white: '#FFFFFF',
    disabled: '#7851a960',
    red: '#F57777',
    lightRed: '#FFEBF2',
    danger: '#ff3a2a',
  },
};

const light = {
  colors: {
    cardBaseBorder: '#ACACAC',
    text: '#1A1A1A',
    bgColor: '#FFFFFF',
    dark: '#000000',
    input: '#F6F6F6',
    cardBase: '#EEF4FB',
    cardBaseDark: '#E6EBF2',
    inputLight: '#FFFFFF',
    inputBorder: '#DDDDDD',
    card: '#F9F9F9', //'#F7F7FC',
    label: '#585858',
    lightDark: '#616161',
    cardLight: '#F7F9FC',
    cardSidLight: '#F2F7FF',
    filterColor: '#EDF0F7',
    borderWidthColor: '#52536D',
    circleColor: '#CDCADB',
    radioBack: '#F2F5FA',
    aboutCompanyColor: '#F1F3F8',
    inactiveCircle: '#C8C0ED',
    redColor: '#CB0410',
    ...commonColors.colors,
  },
};

const dark = {
  colors: {
    text: '#FFFFFF',
    bgColor: '#0B0B0B',
    dark: '#FFFFFF',
    input: '#252525',
    cardBase: '#252525',
    cardBaseDark: '#2D2C2C',
    inputLight: '#2D2C2C',
    inputBorder: '#2E2E2E',
    card: '#171717',
    label: '#9E9E9E',
    lightDark: '#E9E9E9',
    cardLight: '#252525',
    cardSidLight: '#171717',
    filterColor: '#252525',
    borderWidthColor: '#52536D',
    circleColor: '#FFFFFF',
    radioBack: '#F2F5FA',
    aboutCompanyColor: '#F1F3F8',
    inactiveCircle: '#C8C0ED',
    redColor: '#CB0410',
    cardBaseBorder: '#2E2E2E',
    ...commonColors.colors,
  },
};

export default {light, dark, commonColors};
