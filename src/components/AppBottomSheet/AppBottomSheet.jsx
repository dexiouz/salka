import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Box from '../Box';
import {useTheme} from '@react-navigation/native';

const AppBottomSheet = ({children, refRBSheet, height}) => {
  const {colors} = useTheme();
  return (
    <Box flex center style={{flex: 1}}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={height}
        customStyles={{
          wrapper: {
            backgroundColor: `${colors.bgColor}75`,
          },
          draggableIcon: {
            backgroundColor: colors.input,
            width: 80,
            height: 8,
          },
          container: {
            backgroundColor: colors.card,
            borderTopRightRadius: 23,
            borderTopLeftRadius: 23,
          },
        }}>
        <Box ph={30}>{children}</Box>
      </RBSheet>
    </Box>
  );
};

export default AppBottomSheet;
